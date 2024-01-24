// In JS there are mainly two types of datatypes 1)Primitive and 2)Reference Type(non-primitive)
// Primitive
// 7 types: Number, String, Boolean, null, undefined, BigInt, Symbol
// examples
const score = 100;
const scoreValue = 100.3;
let isLoggedIn = false;
const outsideTemp = null; // it means there is empty value is doesn't mean 0
let userEmail; // its value is undefined

const id = Symbol("123");
const anotherId = Symbol("123")
console.log(id === anotherId); // it gives false because symbol is always unique

const bigNumber = 364872658790321947217n


// Reference (Non-primitive)
//  Array, Objects, Functions
// examples
const names = ["nikhil", "ram", "shyam"];
let myObj = {
    name: "Nikhil",
    age: 20
};

const myFunction = function(){
    console.log("my name is Nikhil");
};

console.log(typeof scoreValue); // here we can find the type of any variable
// function returns the function but it is generally called as object function
