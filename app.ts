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
if(x==10){
    // redefine x globally
    var x = 20;
}
console.log(x);

// let is block scoped.
let y = 10;
if(y==10){
    // redefine y in this block only
    let y = 20;
    console.log("redeclared: " + y); // prints 20
}
console.log("y: ", y); // prints 10

// const is block scoped and cannot be reassigned.
const z = 10;
if(z==10){
    // cannot redefine z, will throw error
    // const z = 20; // Uncommenting this line will cause an error
    console.log("z: ", z); // prints 10
}

// let is prefered over var, and considered best practice to avoid scoping issues.

// Data types in Typescript
// we can define variables data type using a colon.
// built in data types: string, number, boolean, any, void, null, undefined
let customMessage: string = "Hello, world!";
let num: number = 42;
let isActive: boolean = true;
let anything: any = "Can be anything";
let nothing: void = undefined; // used for functions that do not return a value
let undef: undefined = undefined; // explicitly set to undefined
console.log(customMessage, num, isActive, anything, nothing, undef);

// function does not return anything, so return type is void
function greet(): void {
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
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let names: string[] = ["Alice", "Bob", "Charlie"]; // array of strings
let mixed: (number | string)[] = [1, "two", 3, "four"]; // array of mixed types
console.log(numbers, names, mixed);

// Tuples: when we have a known number of elements with different data types
let person: (string | number | boolean)[] = [1, "John Doe", true]; // tuple with number, string, and boolean
console.log(person);

// classes
class Person{
    //properties
    name: string;
    age: number;
    isStudent: boolean;

    // constructor function used to initialize an object instance
    constructor(nameArg: string, ageArg: number, isStudentArg: boolean) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }

    // greet(): void {
    // console.log("Hello World!");
    // return;
    // }    
}

// initialize a class = creating an object instance
//new keyword is ued to call yhe constructor of the person class
let person1 = new Person("Alice", 25, true);
let person2 = new Person("Bob", 30, false);
console.log(person1, person2);

// What is Inheritance?
// Whrn s class inherits properties and methods from another class
// Parent class for an animal can be mammal
class mammal {
    hasHair: boolean;
    isWarmBlooded: boolean;

    constructor(hasHairArg: boolean, isWarmBloodedArg: boolean) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }

    eat(): void {
        console.log("Mammal is eating.");
        return;
    }
}

// we can inherit from mammal class using extends keyword
class Animal extends mammal {
    name: string;
    age: number;

    constructor(nameArg: string, ageArg: number, hasHairArg: boolean, isWarmBloodedArg: boolean) {
       // we can use "super" keyword to call the parent class constructor
        super(hasHairArg, isWarmBloodedArg);
        this.name = nameArg;
        this.age = ageArg;
    }
}

//Create an animal instance 
let cat = new Animal("Marcus", 2, true, true);
console.log(cat);
console.log(cat.eat()); // inherited method from mammal class