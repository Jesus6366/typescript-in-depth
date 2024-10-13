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

// type Author = {
//   name: string;
//   age: number;
//   email: string;
//   readonly type: "human" | "Ai";
// };

// type AwardDetails = {
//   name: string;
//   date: Date;
// };

// type Awards = {
//   /// index signature ////
//   [key: string]: AwardDetails;
// };

// // post type declaration
// type Post = {
//   title: string;
//   content: string;
//   date: Date;
//   author: Author;
//   awards: Awards;
//   category?: string;
// };

// let post: Post = {
//   title: "This is a blog post",
//   content: "Content of the post",
//   date: new Date(),
//   author: {
//     name: "john",
//     age: 22,
//     email: "John@doe.com",
//     type: "human",
//   },
//   awards: {
//     web: {
//       name: "Web Awards",
//       date: new Date(),
//     },
//     web3: {
//       name: "Web3 Awards",
//       date: new Date(),
//     },
//   },
//   category: "Javascript",
// };

// let post2: Post = {
//   title: "This is a blog post",
//   content: "Content of the post",
//   date: new Date(),
//   author: {
//     name: "john",
//     age: 22,
//     email: "John@doe.com",
//     type: "Ai",
//   },
//   awards: {
//     web: {
//       name: "Web Awards",
//       date: new Date(),
//     },
//     web3: {
//       name: "Web3 Awards",
//       date: new Date(),
//     },
//   },
// };

////////////type unions in objects ///////
// type Dog = {
//   name: string;
//   barks: boolean;
//   wags: boolean;
// };

// type Cat = {
//   name: string;
//   purrs: boolean;
// };

// type DogCat = Dog | Cat;

// let dog: DogCat = {
//   name: "Buddy",
//   barks: true,
//   wags: true,
// };

// let cat: DogCat = {
//   name: "Bella",
//   purrs: true,
// };

// let hibridAnimal: DogCat = {
//   name: "Bella",
//   purrs: true,
//   barks: true,
// };

///////// discriminating unions///////

// type NetworkLoadingState = {
//   state: "loading";
// };

// type NetworkFailedState = {
//   state: "failed";
//   code: number;
// };

// type NetworkSuccessState = {
//   state: "success";
//   response: {
//     title: string;
//     duration: number;
//     summary: string;
//   };
// };

// type NetworkState =
//   | NetworkLoadingState
//   | NetworkFailedState
//   | NetworkSuccessState;

// function logger(state: NetworkState) {
//   switch (state.state) {
//     case "loading":
//       return "Loading...";
//     case "failed":
//       return state.code;
//     case "success":
//       return `Downloading ${state.response.title}`;
//   }
// }

//// excercise /////

// type Caterer = {
//   name: string;
//   address: string;
//   phone: number;
// };

// type Seats = {
//   [keyof: string]: string;
// };

// type Airplane = {
//   model: string;
//   flightNumber: string;
//   timeOfDeparture: Date;
//   timeOfArrival: Date;
//   caterer: Caterer;
//   seats: Seats;
// };

// let airplane: Airplane = {
//   model: "Airbus A380",
//   flightNumber: "A2201",
//   timeOfDeparture: new Date(),
//   timeOfArrival: new Date(),
//   caterer: {
//     name: "Special Food Ltd",
//     address: "484, Some Street, New York",
//     phone: 7867856751,
//   },
//   seats: {
//     A1: "John Doe",
//     A2: "Mark Doe",
//     A3: "Sam Doe",
//   },
// };

/////////////////ARRAYS ///////////////

// // array of numbers
// let a: number[] = [1, 2, 3];
// let b: Array<string> = ["a", "b", "c"];
// // array union // not really want to do this
// let c: (string | number)[] = ["a", 1];

// type Caterer = {
//   name: string;
//   address: string;
//   phone: number;
// };

// type Seats = {
//   [keyof: string]: string;
// };

// type Airplane = {
//   model: string;
//   flightNumber: string;
//   timeOfDeparture: Date;
//   timeOfArrival: Date;
//   caterer: Caterer;
//   seats: Seats;
// };

// // array of objects
// type Ariplanes = Airplane[];

// let airplane: Ariplanes = [
//   {
//     model: "Airbus A380",
//     flightNumber: "A2201",
//     timeOfDeparture: new Date(),
//     timeOfArrival: new Date(),
//     caterer: {
//       name: "Special Food Ltd",
//       address: "484, Some Street, New York",
//       phone: 7867856751,
//     },
//     seats: {
//       A1: "John Doe",
//       A2: "Mark Doe",
//       A3: "Sam Doe",
//     },
//   },
// ];

/////////////////TUPLES //////////////////
// // non tuple (normal union array)
// let person: (string | number)[] = ["John", "Doe", 18];
// //tuple
// let personTuple: [string, string, number] = ["John", "Doe", 18];

// type User = [string, string, number, string?];

// let user: User = ["John", "Doe", 18, "Email@email.com"];

// type ListOfStudents = [number, boolean, ...string[]];

// const passingStudents: ListOfStudents = [3, true, "John", "Mark", "Stella"];

// ///// read only tuples and arrays /////
// let number: readonly number[] = [1, 2, 3];

// // number.push()

// type ReadOnlyTuple = readonly [string, string, number];

// // read only tuple
// let person: ReadOnlyTuple = ["John", "Doe", 21];

/////////////// Enums ///////////////////

// const STATUS_LOADING = "loading";
// const STATUS_STOPPED = "stopped";

// // STATUS_LOADING = "stopped";
// // this will be read only
// enum Direction {
//   Up, // 0
//   Down, // 1
//   Left, // 2
//   Right, // 3
// }

// console.log(Direction.Up);
// // Direction.Left = 5;

// enum Direction2 {
//   Up = 1, // 1
//   Down, // 2
//   Left, // 3
//   Right, // 4
// }
// console.log(Direction2.Down);

// // the most one used
// enum Roles {
//   ADMIN = "admin",
//   AUTHOR = "author",
//   EDITOR = "editor",
// }

// type Person = {
//   name: string;
//   email: string;
//   password: string;
//   role: Roles;
// };

// let person: Person = {
//   name: "John",
//   email: "Email@email.com",
//   password: "1234dg",
//   role: Roles.ADMIN,
// };

// console.log(person);

// enum Direction3 {
//   Up = 1, // 1
//   Down = "down", // 2
//   Left = 3, // 3
//   Right, // 4
// }

///// enums vs objects /////

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// this will not be compliled to JS
const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// object acting like an enum
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Rigth: 3,
} as const;

let eDirection = EDirection.Up;
let direction = EDirection.Right;
