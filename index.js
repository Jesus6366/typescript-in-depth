"use strict";
// // //////Primitive types///////////
// // Strings // manually typed
// let firstName: string = "John";
let stringNumberPair = {
    key: "age",
    value: 30,
};
let numberArrayPair = {
    key: 1234,
    value: ["a"],
};
function printId(obj) {
    console.log(obj.id);
}
const user = {
    id: 1234,
    name: "Alice",
};
printId(user);
