// Core Types
// 1. Number - 1, 5.3, -10  - All numbers, no differentiation between integers or floats
// 2. String - 'Hi', "Hi", `Hi`  - All text types
//  3. Boolean - true, false - Just these tow, no "truthy" or "falsy" values
// 4. Object - {age: 30} - Any js object, more specific types (type of object) are possible.
// 5. Array - [1, 2, 3] - Any js array, type can be flexible or strict
// 6. Tuple - [1, 2] - Added by Typescript: Fixed length array
// 7. Enums - enum { new, old } - Added by ts: Automatically enumerated global constant identifiers.
// 8. Any - * - Any kind of value, no specific type assignment.
// 9. Union - 24 | 'bishal' - More than one type using | operator
// 10. Literal Type - 'as-num' | 'as-text' - we can have two or more possible values;
// 11. Type Alias - use with type keyword
// ==== Number, boolean, strings
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return n1 + n2;
//   }
// }
// const number1 = 5;
// const number2 = 2.8;
// const showResult = true;
// const phrase = "Result is: ";
// const result = add(number1, number2, showResult, phrase);
// console.log(result);
// ==== Objects
// We can explicitly define the types
// const person: { name: string; age: number } = {
//   name: "bishal",
//   age: 22,
// };
// ==== But TS is smart enough to understand the type
// const newPerson = {
//   name: 'Bishal',
//   age: 22
// }
// ==== Arrays
// const person = {
//   name: "Deepthi",
//   age: 22,
//   hobbies: ["Cooking", "Reading"],
// };
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
// ==== Tuple
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Deepthi",
//   age: 22,
//   hobbies: ["Cooking", "Reading"],
//   role: [2, "Author"],
// };
// ==== Enum
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }
// const person = {
//   name: "Deepthi",
//   age: 22,
//   hobbies: ["Cooking", "Reading"],
//   role: Role.ADMIN,
// };
// if (person.role === Role.ADMIN) {
//   console.log("Is Admin");
// }
// ==== Any Type
// const anyType: any = "This can be any type";
// console.log(anyType);
// ==== Union Type
// const combine = (n1: number | string, n2: number | string) => {
//   let result: number | string;
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     result = n1 + n2;
//   } else {
//     result = n1.toString() + n2.toString();
//   }
//   return result;
// };
// const combineAges = combine(30, 25);
// console.log(combineAges);
// const combineNames = combine("Bishal", "Adhikari");
// console.log(combineNames);
// ==== Literal Types
// type CheckVal = "is-num" | "is-text";
// const val = "is-text";
// let check: CheckVal = "is-num";
//  ==== Alias Type
// type Combinable = string | number;
// type Role = "Admin" | "User";
// ==== Function Return Type Void
var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result: " + num);
};
printResult(add(21, 12));
// ==== Functions as Types
// - Types that describe the function
// let combinedValue: Function;
var combinedValue;
combinedValue = add;
console.log(combinedValue(10, 20));
// ==== Function Types Callbacks
var combineAndReturn = function (num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
};
combineAndReturn(21, 12, function (result) {
    console.log(result);
});
// ==== Unknown Type
// Unknown is better than any type.
var userInput;
var userName;
userInput = 5;
userInput = "Bishal";
// userInput = userName // This throw error
if (typeof userInput === "string") {
    userName = userInput;
}
// ==== Never Type
// const generateError = (message: string, code: number): never => {
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError("An error occurred", 500);
