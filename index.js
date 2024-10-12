"use strict";
// // //////Primitive types///////////
// // Strings // manually typed
// let firstName: string = "John";
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        case "failed":
            return state.code;
        case "success":
            return `Downloading ${state.response.title}`;
    }
}
