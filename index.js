"use strict";
// // Primitive types
// // Strings // manually typed
// let firstName: string = "John";
// //inference by typescript
// let automobile = "BMW";
// // literal value
// const city = "New york";
// let students = 32;
// let studentAsString: string = students.toString();
// // Numbers
// let age: number = 32;
// let year: number = 2024;
// // literal value
// const numberOfMember = 61;
// let stringToNumber: number = parseInt("1985");
// //Booleans true or false
// let isStudent: boolean = true;
// // literal value
// const alwaysStudent = true;
// let minimumAge: boolean = age >= 6 ? true : false;
// // null and undefined types
// let user: undefined;
// console.log(user);
// let userRole: null;
// console.log((userRole = null));
// bigint Type
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
let bigInt1 = BigInt(1234);
console.log(bigInt1);
