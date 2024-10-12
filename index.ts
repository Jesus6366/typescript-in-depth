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

// ///////////////Type Casting ////////////
// let firstName = <any>"Mark";
// let lastName = "Doe" as any;

// // User from API
// let user = {
//   name: "mark",
//   email: "mark@email.com",
// };

// type User = {
//   name: string;
//   email: string;
// };

// function fetchUser() {
//   return user as User;
// }

// const fetchedUser = fetchUser();

// /// excercise
// let city = "New York"; // string
// let population = 8400000; // number
// const age = 32; // 32
// let oldAge = 79 as const; // 79
// let newAge = oldAge; // 79
// let data = new Map(); // Map
// let score = [90, 86, 100]; // number[]
// type Primitive = string | number | boolean;
// type CustomName = "John" extends string ? string : "John"; // string
// type CustomAge = typeof newAge extends number ? 79 : number;
// type CheckData = typeof data extends Object ? true : false;
// type CheckScore = typeof score extends never ? {} : [];

/////////////////Objects ////////////////

// let person = {
//   name: "Mark",
//   age: 32,
// };

// let car: Object = {
//   brand: "BMW",
//   color: "Black",
// };

// // not needed
// car = [];
// car = () => {};

// let newCar: {
//   brand: string;
//   color: string;
// } = {
//   brand: "BMW",
//   color: "Black",
// };

////////////Type Aliaces ///////

// let post: {
//   title: string;
//   content: string;
//   date: Date;
// } = {
//   title: "This is a blog post",
//   content: "Content of the post",
//   date: new Date(),
// };

type Author = {
  name: string;
  age: number;
  email: string;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};

let post: Post = {
  title: "This is a blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "john",
    age: 22,
    email: "John@doe.com",
  },
};
