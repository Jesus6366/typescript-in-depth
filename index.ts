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

// ///// enums vs objects /////

// enum Direction {
//   Up, // 0
//   Down, // 1
//   Left, // 2
//   Right, // 3
// }

// // this will not be compliled to JS
// const enum EDirection {
//   Up, // 0
//   Down, // 1
//   Left, // 2
//   Right, // 3
// }

// // object acting like an enum
// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Rigth: 3,
// } as const;

// let eDirection = EDirection.Up;
// let direction = EDirection.Right;

// //////// computed enums /////
// enum AccessPermissions {
//   None = 0,
//   Read = 1,
//   Write = 2,
//   ReadWrite = Read + Write,
//   Delete = 4,
//   All = ReadWrite | Delete,
// }

// ///////////////////////Enums as Unions and Types /////////////////////////

// // basically union Circle or Square
// enum ShapeKind {
//   Circle = "circle ",
//   Square = "square",
// }

// type Circle = {
//   kind: ShapeKind.Circle;
//   radius: number;
// };

// type Square = {
//   kind: ShapeKind.Square;
//   sideLength: number;
// };

// let circle: Circle = {
//   radius: 100,
//   kind: ShapeKind.Circle,
// };

// console.log(circle);

// function printShape(shape: ShapeKind /*circle/ square */) {
//   console.log(shape);
// }

// printShape(ShapeKind.Circle);

/////// Practice Questions //////////////////

// //* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.

// let arrayOfNumbers: number[] = [1, 2, 3];
// let arrayOfStrings: string[] = ["1", "2", "3"];

// //* 2. Create a tuple person that holds a string (name) and a number (age).

// type Tuple = [string, number];

// let person: Tuple = ["Jesus", 34];

// //* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.

// // read only array

// type ReadOnlyArray = readonly string[];

// const colors: ReadOnlyArray = ["black", "blue", "gray"];

// type ReadOnlyTuple = readonly [...number[]];
// const point: ReadOnlyTuple = [2, 3];

// //* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending

// enum StatusEnum {
//   ACTIVE = "active",
//   INACTIVE = "inactive",
//   PENDING = "pending",
// }

// //* 5. Create an object as const called Status with the same structure as an StatusEnum

// const Status = {
//   ACTIVE: "active",
//   INACTIVE: "inactive",
//   PENDING: "pending",
// } as const;

////////////////FUNCTIONS/////////////

// // named function
// function intro(name: string, age: number): string {
//   return `My name ${name}, and I am ${age} years old`;
// }

// // function expression
// const intro2 = function (name: string, age: number): string {
//   return `My name ${name}, and I am ${age} years old`;
// };

// // arrow function

// const intro3 = (name: string, age: number): string | number => {
//   return `My name ${name}, and I am ${age} years old`;
// };

// //// default and optional parameters
// function intro(name: string, age: number, country?: string): string {
//   if (country) {
//     return `My name ${name}, and I am ${age} years old. I live in ${country}`;
//   }
//   return `My name ${name}, and I am ${age} years old`;
// }

// console.log(intro("jesus", 34));
// console.log(intro("jesus", 34, "mexico"));

///////////custom parameters and return types //////////////

// enum AgeUnit {
//   Years = "years",
//   Months = "months",
// }

//   // function call signature
// type GreetingFunction = (greeting: string) => string;

// type Person = {
//   name: string;
//   age: number;
//   ageUnit: AgeUnit;
//   // function call signature
//   greet: GreetingFunction;
// };

// const person: Person = {
//   name: "Scott",
//   age: 30,
//   ageUnit: AgeUnit.Years,
//   greet: function (greeting) {
//     return `${greeting} ${this.name}`;
//   },
// };

// function convertAgeToMonths(person: Person): Person {
//   if (person.ageUnit === AgeUnit.Years) {
//     person.age = person.age * 12;
//     person.ageUnit = AgeUnit.Months;
//   }

//   return person;
// }

// // console.log(convertAgeToMonths(person));
// console.log(person.greet("Hello"));

// /////// anonymus function
// const students: string[] = ["Alice", "Bob", "Mark"];

// students.map((student: string) => {
//   console.log(student);
// });

/////////// void and never types ////////////
// void
// function writeToDataBase(value: string): void {
//   console.log("Writing to a database", value);
// }

// writeToDataBase("(Data...)");

// // never
// function throwError(error: string): never {
//   throw new Error(error);
// }

// console.log(throwError("could not get data "));

// //////// Async Function//////

// async function fetchFromDatabase(id: number): Promise<any> {}

// const anotherAsyncFunction = async (): Promise<any> => {};

// async function returnString(id: number): Promise<string> {
//   return Promise.resolve("string");
// }

// type User = {
//   name: string;
//   age: number;
// };

// async function returnUser(id: number): Promise<User> {
//   return Promise.resolve({ name: "Jhon", age: 20 });
// }

// returnUser(2).then((res) => console.log(res));

// function multiplyBy(by: number, ...number: number[]): number[] {
//   return number.map((number: number) => number * by);
// }

// console.log(multiplyBy(2, 3, 4, 5, 6));
// console.log(multiplyBy(2, 2, 4, 6));

// const args: [number, number] = [8, 5];
// const args2 = [8, 5] as const;

// const angle = Math.atan2(...args);
// const angle2 = Math.atan2(...args2);

// /// destructuring

// type Numbers = {
//   a: number;
//   b: number;
//   c: number;
// };

// let numbers: Numbers = {
//   a: 2,
//   b: 3,
//   c: 4,
// };

// function sum({ a, b, c }: Numbers): number {
//   return a + b + c;
// }

// console.log(sum(numbers));

// ///////////// Function overloading //////

// const str = "Hello, world";

// const part1 = str.slice(7);
// const part2 = str.slice(7, 10);

// console.log(part1);
// console.log(part2);

// type Reservation = {
//   departureDate: Date;
//   returnDate?: Date;
//   departingFrom: string;
//   destination: string;
// };

// // function overloading
// type Reserve = {
//   (
//     departureDate: Date,
//     returnDate: Date,
//     departingFrom: string,
//     destination: string
//   ): Reservation | never;
//   (departureDate: Date, departingFrom: string, destination: string):
//     | Reservation
//     | never;
// };

// const reserve: Reserve = (
//   departureDate: Date,
//   returnDateOrdeartingFrom: Date | string,
//   departingFromOrDestination: string,
//   destination?: string
// ) => {
//   if (returnDateOrdeartingFrom instanceof Date && destination) {
//     return {
//       departureDate: departureDate,
//       returnDate: returnDateOrdeartingFrom,
//       departingFrom: departingFromOrDestination,
//       destination: destination,
//     };
//   } else if (typeof returnDateOrdeartingFrom === "string") {
//     return {
//       departureDate: departureDate,
//       departingFrom: returnDateOrdeartingFrom,
//       destination: departingFromOrDestination,
//     };
//   }

//   throw new Error("Please provie valid details to reserve a ticket");
// };

// console.log(reserve(new Date(), new Date(), "new york", "washingon"));

// console.log(reserve(new Date(), "new york", "washingon"));

// /**
//  * Practice Excercise for functions
//  */

// //* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.

// function greet(name: string): string {
//   return `Hello ${name}`;
// }

// //* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.

// type Product = {
//   id: number;
//   name: string;
// };

// function getProduct(id: number): Product {
//   const name = `Product ${id}`; // Just an example; you could fetch this from a database or other source

//   return {
//     id: id,
//     name: name,
//   };
// }

// //* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.

// // function call signature
// type Calculator = (n1: number, n2: number) => number;

// // Implementing the add function
// const add: Calculator = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// // Implementing the subtract function
// const subtract: Calculator = (n1: number, n2: number) => {
//   return n1 - n2;
// };

// // Example usage
// const sum = add(5, 3); // Outputs: 8
// const difference = subtract(5, 3); // Outputs: 2

// console.log("Sum:", sum);
// console.log("Difference:", difference);

// //* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

// function logMessage(message: string): void {
//   console.log(message);
// }

// function throwError(message: string): never {
//   throw new Error(message);
// }

/////////// GENERICS /////////////

// if the funcions is invoke with a string them the type will be string or number or watever the function is call with
// // generic function
// function returnParams<Type>(param: Type): Type {
//   return param;
// }

// console.log(returnParams<string>("String"));

// console.log(returnParams<number>(123));

// // function call signature
// const myParam: <T>(param: T) => T = (param) => param;

// // function expression
// const myParam2 = function <U>(param: U): U {
//   return param;
// };

// type ObjectType = {
//   myParam: <V>(param: V) => V;
// };

// type MyParam = <K>(param: K) => K;

//// generic function declaration ///////

// type GetFirstElement = <T>(arr: T[]) => T;

// const getFirstElement: GetFirstElement = (arr) => {
//   return arr[0];
// };
// const numbersArray = [1, 2, 3, 4];
// const stringArray = ["a", "b"];

// let numberOutput = getFirstElement(numbersArray);

// let stringOutput = getFirstElement<string>(stringArray);

// // having to pass the type
// type FirstElement<T> = (arr: T[]) => T;

// const firstElement: FirstElement<string> = (arr) => {
//   return arr[0];
// };

/////// generic and constrains with arrays/////////

// type hasLenth = {
//   length: number;
// };

// function LogLength<T extends hasLenth>(item: T): void {
//   console.log(item.length);
// }

// LogLength(numbersArray);
// LogLength("stringarray");
// // LogLength({});

/////generics with objects

// type KeyValuePair<K, V> = {
//   key: K;
//   value: V;
// };

// let stringNumberPair: KeyValuePair<string, number> = {
//   key: "age",
//   value: 30,
// };

// let numberArrayPair: KeyValuePair<number, string[]> = {
//   key: 1234,
//   value: ["a"],
// };

// type HasId = {
//   id: number;
// };

// function printId<T extends { id: number }>(obj: T): void {
//   console.log(obj.id);
// }

// const user = {
//   id: 1234,
//   name: "Alice",
// };

// printId(user);

///// keyof type operator /////////

// type Events = {
//   id: number;
//   date: Date;
//   type: "indoor" | "outdoor";
// };

// // the keyof will generate a union among all the key values id | date | type
// type UniorOfKeysOfEvents = keyof Events;

// let idOfEvent: UniorOfKeysOfEvents = "id";

// // index signature
// type Numeric = {
//   [key: number]: string;
// };

// type NumericKeyOf = keyof Numeric;

// type NumberAndString = {
//   [key: string]: string;
// };

//////// Generic default values //////////

// async function fethData<T = any>(url: string): Promise<T> {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function fetchDefault() {
//   const data = await fethData("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(data);
// }

// fetchDefault();

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// async function fetchPost() {
//   const post = await fethData<Post>(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   console.log(post);
// }

// fetchPost();

// const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
//   let result: T[] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (predicate(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function predicate(item: number) {
//   return item > 7;
// }

// console.log(filter(numbers, predicate));

/////////////CLASSES ///////////////////

// // first class
// class User {
//   name = "John";
//   email = "john@email.com";

//   greet() {
//     return `Hello John`;
//   }
// }
// // new instance (always the same one)
// const user = new User();
// console.log(user);
// console.log(user.greet());

/////////////Constructor function////////

// class User {
//   name: string;
//   readonly email: string;
//   lastname?: string;

//   constructor(name: string, email: string, lastname?: string) {
//     this.name = name;
//     this.email = email;
//     this.lastname = lastname;
//   }

//   greet() {
//     return `Hello ${this.name}`;
//   }
// }

// ////////// inheritance /////////////

// class Admin extends User {
//   isAdmin: boolean = true;
//   usersReporting: number;

//   constructor(
//     name: string,
//     email: string,
//     usersReporting: number,
//     lastname?: string
//   ) {
//     super(name, email, lastname);
//     this.usersReporting = usersReporting;
//   }
// }

// // classes work as types
// const user: User = new User("Jesus", "email");
// const user2: User = new User("Jose", "Jose@email.com");

// const admin: Admin = new Admin("Mark", "admin@email.com", 11);

// console.log(user);
// console.log(admin);

//  * * Practice Problem
//  * * You are building a simple library management system.
//  * * Implement the following requirements using TypeScript:
//  *
//  * TODO: 1. Create a class Book with the following properties:
//  * * - title (string, required)
//  * * - author (string, required)
//  * * - yearPublished (number, optional)
//  * * - ISBN (string, readonly)
//  * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
//  *
//  * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
// class Book {
//   title: string;
//   author: string;
//   yearPublished?: number;
//   readonly ISBN: string;

//   constructor(
//     title: string,
//     author: string,
//     ISBN: string,
//     yearPublised?: number
//   ) {
//     this.title = title;
//     this.ISBN = ISBN;
//     this.author = author;
//     if (yearPublised) {
//       this.yearPublished = yearPublised;
//     }
//   }
// }
// //  *
// //  * TODO: 4. Create an instance of the Book class and log its details.

// const book = new Book("The grat Gatsby", "F. Scott", "34554645656", 1925);
// console.log(book);

// //  *
// //  * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
// //  *
// function logBookDetails(book: Book): void {
//   console.log(book);
// }

// logBookDetails(book);
// //  * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
// //  * * - fileSize (number, required)
// //  * * - format (string, required)

// class EBook extends Book {
//   fileSize: number;
//   format: string;

//   constructor(
//     title: string,
//     author: string,
//     ISBN: string,
//     fileSize: number,
//     format: string,
//     yearPublised?: number
//   ) {
//     super(title, author, ISBN, yearPublised);

//     this.fileSize = fileSize;
//     this.format = format;
//   }
// }
// //  *
// //  * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
// //  *
// //  * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.

// const firstEbook = new EBook("The book", "jesus", "46545645646", 2, "PDF");

////////// ACCESS MODIFIERS ///////////
///----------PUBLIC ACCESS MODIFIERS-----//

class User {
  public name: string;
  readonly email: string;
  lastname?: string;
  protected phone: number;

  constructor(name: string, email: string, phone: number, lastname?: string) {
    this.name = name;
    this.email = email;
    this.lastname = lastname;
    this.phone = phone;
  }

  public greet() {
    return `Hello ${this.name}`;
  }
}

////////// inheritance /////////////

class Admin extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    usersReporting: number,
    phone: number,
    lastname?: string
  ) {
    super(name, email, phone, lastname);
    this.usersReporting = usersReporting;
  }

  public printName() {
    console.log(this.name);
  }

  protected printNumber() {
    console.log(this.phone);
  }

  public useProtectedPhone() {
    this.printNumber();
  }
}

// classes work as types
const user: User = new User("Jesus", "email", 123456);
const user2: User = new User("Jose", "Jose@email.com", 4566556);

const admin: Admin = new Admin("Mark", "admin@email.com", 11, 654654456);

//console.log(user.phone);
admin.useProtectedPhone();
