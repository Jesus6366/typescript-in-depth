"use strict";
// // //////Primitive types///////////
// // Strings // manually typed
// let firstName: string = "John";
let numbers = {
    a: 2,
    b: 3,
    c: 4,
};
function sum({ a, b, c }) {
    return a + b + c;
}
console.log(sum(numbers));
