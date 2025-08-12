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
