// What is a Single-Page Application (SPA)?
// An application with one HTML page, updated dyanimically without refreshing the page.
// Angular, Vue, React JS are all SPA frameworks.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    // constructor function used to initialize an object instance
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    return Person;
}());
// initialize a class = creating an object instance
//new keyword is ued to call yhe constructor of the person class
var person1 = new Person("Alice", 25, true);
var person2 = new Person("Bob", 30, false);
console.log(person1, person2);
// What is Inheritance?
// Whrn s class inherits properties and methods from another class
// Parent class for an animal can be mammal
var mammal = /** @class */ (function () {
    function mammal(hasHairArg, isWarmBloodedArg) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }
    mammal.prototype.eat = function () {
        console.log("Mammal is eating.");
        return;
    };
    mammal.prototype.sleep = function () {
        console.log("Mammal is sleeping.");
        return;
    };
    return mammal;
}());
// we can inherit from mammal class using extends keyword
// we can also implement an interface using implements keyword
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(nameArg, ageArg, hasHairArg, isWarmBloodedArg) {
        // we can use "super" keyword to call the parent class constructor
        var _this = _super.call(this, hasHairArg, isWarmBloodedArg) || this;
        _this.name = nameArg;
        _this.age = ageArg;
        return _this;
    }
    return Animal;
}(mammal));
//Create an animal instance 
var cat = new Animal("Marcus", 2, true, true);
console.log(cat);
console.log(cat.eat()); // inherited method from mammal class
// dino variable must follow to IAnimal interface
var dino = {
    name: "Rex",
    age: 3,
    hasHair: true,
    isWarmBlooded: true,
    eat: function () {
        console.log("Dino is eating.");
    },
    sleep: function () {
        console.log("Dino is sleeping.");
    },
};
//
var dog = new Animal("Joe", 5, true, true);
