use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::to_value;
use std::{
    collections::{HashMap, HashSet},
    vec,
};
use wasm_bindgen::{JsValue, prelude::wasm_bindgen};

use crate::js::JSConsole;

#[wasm_bindgen]
#[derive(Serialize, Deserialize, Clone)]
pub struct ResultItem {
    result_id: String,

    title: String,

    #[serde(skip_serializing_if = "Option::is_none")]
    description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    image: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    image_type: Option<f32>,

    #[serde(skip_serializing_if = "Option::is_none")]
    filters: Option<HashMap<String, Vec<String>>>,

    #[serde(skip_serializing_if = "Option::is_none")]
    metadatas: Option<HashMap<String, String>>,
}

#[wasm_bindgen(getter_with_clone)]
#[derive(Serialize, Deserialize)]
pub struct SuggestSearcher {
    suggests: HashMap<String, HashSet<String>>,
    result_counts: HashMap<String, i32>,
    results: HashMap<String, ResultItem>,
}

#[wasm_bindgen]
impl SuggestSearcher {
    #[wasm_bindgen(constructor)]
    pub fn new(raw_results: JsValue) -> Self {
        let mut _self = SuggestSearcher {
            suggests: HashMap::new(),
            result_counts: HashMap::new(),
            results: HashMap::new(),
        };

        _self.suggests.insert("id".to_owned(), HashSet::new());

        if !raw_results.is_undefined() {
            _self.add_result_items(raw_results);
        }

        return _self;
    }

    #[wasm_bindgen]
    pub fn add_result_items(&mut self, raw_results: JsValue) {
        match serde_wasm_bindgen::from_value::<Vec<ResultItem>>(raw_results) {
            Ok(results) => {
                for result in results {
                    self.add_result_item_to_suggests(result.clone());
                    self.results.insert(result.result_id.to_owned(), result);
                }

                JSConsole::debug(format!("add_result_items() -> suggests: {}", self.suggests.len()));
            }
            Err(e) => {
                JSConsole::warn(format!("add_result_items() -> raw_results is invalid: {:?}", e));
            }
        }
    }

    #[wasm_bindgen]
    pub fn find_suggests(&mut self, query: String) -> JsValue {
        if !query.is_empty() {
            if let Ok(suggests) = to_value(&self.get_suggests_and_result_counts(&query)) {
                return suggests;
            }
        }

        return to_value(&Vec::<(String, i32)>::new()).unwrap();
    }

    fn add_result_item_to_suggests(&mut self, result: ResultItem) {
        self.add_id(result.result_id);
        self.add_filters(result.filters);
        self.add_metadatas(result.metadatas);
    }

    fn add_id(&mut self, id: String) {
        self.result_counts.insert(self.make_suggest("id", &id), 1);
        self.suggests.get_mut("id").unwrap().insert(id);
    }

    fn add_filters(&mut self, _filters: Option<HashMap<String, Vec<String>>>) {
        let Some(filters) = _filters else { return };

        for (key, values) in filters {
            self.add_suggests(&key, values);
        }
    }

    fn add_metadatas(&mut self, _metadatas: Option<HashMap<String, String>>) {
        let Some(metadatas) = _metadatas else { return };

        for (key, value) in metadatas {
            self.add_suggests(&key, vec![value]);
        }
    }

    fn add_suggests(&mut self, key: &str, values: Vec<String>) {
        self.suggests.entry(key.to_owned()).or_insert(HashSet::new());

        for value in values {
            let result_counts_key = self.make_suggest(key, &value);

            if self.suggests.get_mut(key).unwrap().insert(value) {
                self.result_counts.insert(result_counts_key, 1);
            } else {
                let old_count = self.result_counts.get(&result_counts_key).unwrap();
                self.result_counts.insert(result_counts_key, old_count + 1);
            }
        }
    }

    fn get_suggests_and_result_counts(&mut self, mut query: &str) -> Vec<(String, i32)> {
        let mut result_suggests: Vec<(String, i32)> = vec![];

        let separator = ':';
        let mut key_query = "";

        if query.matches(separator).count() == 1 {
            if query.chars().last().unwrap() != separator && query.chars().next().unwrap() != separator {
                let spliteds = query.split(separator).collect::<Vec<&str>>();
                key_query = spliteds[0];
                query = spliteds[1];
            }
        }

        for (key, suggests_values) in self.suggests.clone() {
            if key_query.len() > 0 && key_query != key {
                continue;
            }

            for value in suggests_values {
                if let Some(result_count) = self.get_result_counts(query, &key, &value) {
                    result_suggests.push(result_count);
                }
            }
        }

        return result_suggests;
    }

    fn get_result_counts(&mut self, query: &str, key: &str, value: &str) -> Option<(String, i32)> {
        if value.starts_with(query) && query.len() != value.len() {
            let result_counts_key = self.make_suggest(key, value);

            return Some((
                result_counts_key.clone(),
                self.result_counts.get(&result_counts_key).unwrap().clone(),
            ));
        }

        return None;
    }

    fn make_suggest(&self, key: &str, value: &str) -> String {
        return vec![key, value].join(":");
    }

    #[wasm_bindgen]
    pub fn search_results(&mut self, raw_queries: JsValue) -> JsValue {
        match serde_wasm_bindgen::from_value::<Vec<String>>(raw_queries) {
            Ok(queries) => {
                return to_value(
                    &self
                        .union_result_ids(queries)
                        .iter()
                        .map(|id| self.results.get(id).unwrap().clone())
                        .collect::<Vec<ResultItem>>(),
                )
                .unwrap();
            }
            Err(e) => {
                JSConsole::warn(format!("search_results() -> raw_queries is invalid: {:?}", e));
            }
        }

        return to_value(&Vec::<ResultItem>::new()).unwrap();
    }

    fn union_result_ids(&mut self, queries: Vec<String>) -> HashSet<String> {
        let all_results = queries
            .iter()
            .map(|query| self.get_result_ids(&query))
            .collect::<Vec<HashSet<String>>>();

        if all_results.len() <= 0 {
            return HashSet::new();
        }

        return all_results.iter().skip(1).fold(all_results[0].clone(), |acc, set| {
            acc.intersection(set).cloned().collect()
        });
    }

    fn get_result_ids(&mut self, query: &str) -> HashSet<String> {
        let mut results = HashSet::<String>::new();

        let separator = ':';
        if query.matches(separator).count() != 1 {
            return results;
        }

        let spliteds = query.split(":").collect::<Vec<&str>>();
        let key = spliteds[0];
        let value = spliteds[1];

        for result in self.results.clone().values() {
            let Some(filters) = &result.filters else {
                continue;
            };

            if !filters.contains_key(key) {
                continue;
            }

            for filter in filters.get(key).unwrap() {
                if value == filter {
                    results.insert(result.result_id.to_owned());
                }
            }
        }

        return results;
    }
}
