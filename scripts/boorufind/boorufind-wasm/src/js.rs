use wasm_bindgen::prelude::*;
use web_sys::console;

const MODULE_NAME: &str = "Boorufind-WASM";

pub trait Message {
    fn get_message(self) -> JsValue;
}

impl Message for String {
    fn get_message(self) -> JsValue {
        JsValue::from_str(&format!("[{}]: {}", MODULE_NAME, self.as_str()))
    }
}

impl Message for &String {
    fn get_message(self) -> JsValue {
        JsValue::from_str(&format!("[{}]: {}", MODULE_NAME, self.clone().as_str()))
    }
}

impl Message for &str {
    fn get_message(self) -> JsValue {
        JsValue::from_str(&format!("[{}]: {}", MODULE_NAME, self))
    }
}

pub struct JSConsole {}
impl JSConsole {
    pub fn debug<T: Message>(msg: T) {
        console::debug_1(&msg.get_message());
    }

    pub fn log<T: Message>(msg: T) {
        console::log_1(&msg.get_message())
    }

    pub fn info<T: Message>(msg: T) {
        console::info_1(&msg.get_message())
    }

    pub fn warn<T: Message>(msg: T) {
        console::warn_1(&msg.get_message())
    }

    pub fn error<T: Message>(msg: T) {
        console::error_1(&msg.get_message())
    }
}
