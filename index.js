"use strict";
// // //////Primitive types///////////
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
// // bigint Type
// const safeInt = Number.MAX_SAFE_INTEGER;
// console.log(safeInt);
// const safeIntPlusOne = safeInt + 1;
// const safeIntPlusTwo = safeInt + 2;
// console.log(safeIntPlusOne);
// console.log(safeIntPlusTwo);
// let bigInt1: bigint = BigInt(1234);
// console.log(bigInt1);
// // Simbols//////////
// let id: symbol = Symbol();
// console.log(id);
// let alphaberticId: symbol = Symbol("id");
// console.log(alphaberticId);
// let user = {
//   [id]: "1234",
//   name: "Mark",
// };
// /**
//  * Assign the correct types to each of the following variables
//  */
// let message: string = "Hello, TypeScript!";
// let age: number = 42;
// let isStudent: boolean = true;
// let fetched: null = null;
// let user: undefined = undefined;
// let largeNumber: bigint = 9007199254740991n;
// let unique: symbol = Symbol("uniqueSymbol");
// // any Type (avoid using it)
// let firstName: any = "Mark";
// firstName = 123;
// firstName = [];
// function returnParam (param)  {
//     return param
// }
// /////////// unknown Type/////////////////
// function multiplyByTwo(number: unknown): number | string {
//   if (typeof number === "number") {
//     return number * 2;
//   }
//   return "Please provide a valid number ";
// }
// console.log(multiplyByTwo(10));
// console.log(multiplyByTwo("string"));
// ///////////////Type Aliases////////////
// ////////Declaration
// type CustomString = string;
// type CustomNumber = number;
// type CustomDate = Date;
// type CustomSymbol = Symbol;
// ////////////Anotation
// let firstName: CustomString = "Mark";
// let age: CustomNumber = 32;
// let today: CustomDate = new Date();
// let unique: CustomSymbol = Symbol();
// //////////////Inference//////////
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }
// // infering that the variable will be a number
// let finalResult = addNumbers(10, 15);
//////////////////Union Types/////////////
// type StringOrNumber = string | number;
// type NumberOrUndefined = number | undefined;
// type StringNumberOrUndefined = string | number | undefined;
// let stringOrNumber: StringOrNumber = 1233;
// function print(input: string | undefined) {
//   if (!input) {
//     console.log("Please input something to print");
//   } else {
//     console.log(input);
//   }
// }
// print();
// print("hello");
////////////// Conditional Types ////////
// type CustomDate = Date;
// type CustomString = string;
// type TrueString = CustomString extends string ? true : false;
// type ConditionalNumber = CustomDate extends Date ? number : string;
// type DateAssigment = CustomDate extends Date ? Date : undefined;
