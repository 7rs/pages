use crate::js::JSConsole;
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::window;
use console_error_panic_hook;

mod js;
pub mod suggest;

#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn log_loading_time(start: f64) {
    let Some(window) = window() else {
        JSConsole::error("Measurement failed: `window` couldn't be resolved.");
        return;
    };
    let Some(performance) = window.performance() else {
        JSConsole::error("Measurement failed: `performance` couldn't be resolved.");
        return;
    };

    let fuckyou_fuckin_rust_analyzer = &format!("Loaded boorufind wasm {}sec", (start - performance.now()) / 1000.0);
    JSConsole::debug(fuckyou_fuckin_rust_analyzer);
}
