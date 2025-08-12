// What is a Single-Page Application (SPA)?
// An application with one HTML page, updated dyanimically without refreshing the page.
// Angular, Vue, React JS are all SPA frameworks.
// What is TypeScript?
// Typescript is a superset of Javascript that is used to build large applications with data types.
// Typescript is transpiled to Javascript.
// We can install typescript transpiler using npm: `npm install -g typescript`
//tsc -w app.ts will transpile to app.ts in watch mode. This will create app.js file.
// How do we declare variables in TypeScript?
// var, let , const to initialize variables.
// var is globally scoped.
var x = 10;
if (x == 10) {
    // redefine x globally
    var x = 20;
}
console.log(x);
// let is block scoped.
var y = 10;
if (y == 10) {
    // redefine y in this block only
    var y_1 = 20;
    console.log("redeclared: " + y_1); // prints 20
}
console.log("y: ", y); // prints 10
// const is block scoped and cannot be reassigned.
var z = 10;
if (z == 10) {
    // cannot redefine z, will throw error
    // const z = 20; // Uncommenting this line will cause an error
    console.log("z: ", z); // prints 10
}
// let is prefered over var, and considered best practice to avoid scoping issues.
// Data types in Typescript
// we can define variables data type using a colon.
// built in data types: string, number, boolean, any, void, null, undefined
var customMessage = "Hello, world!";
var num = 42;
var isActive = true;
var anything = "Can be anything";
var nothing = undefined; // used for functions that do not return a value
var undef = undefined; // explicitly set to undefined
console.log(customMessage, num, isActive, anything, nothing, undef);
// function does not return anything, so return type is void
function greet() {
    console.log("Hello World!");
    return;
}
// Type operators
console.log(typeof num); // prints "number"
console.log(typeof customMessage); // prints "string"
console.log(typeof isActive); // prints "boolean"
// user-defined data types
// Arrays, Tuples, Classes, and Interfaces
// Arrays
var numbers = [1, 2, 3, 4, 5]; // array of numbers
var names = ["Alice", "Bob", "Charlie"]; // array of strings
var mixed = [1, "two", 3, "four"]; // array of mixed types
console.log(numbers, names, mixed);
// Tuples: when we have a known number of elements with different data types
var person = [1, "John Doe", true]; // tuple with number, string, and boolean
console.log(person);
// classes
var Person = /** @class */ (function () {
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    return Person;
}());
var person1 = new Person("Alice", 25, true);
var person2 = new Person("Bob", 30, false);
console.log(person1, person2);
