// these are the type of values where we can assume that it is true and false i.e truthy and falsy
const userEmail = "nikhil@gmail.com"; // we can place values like: ""(false), " "(true), [](empty array), {} ...
if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, bigInt 0n, "", null, undefined, NaN
// truthy values
// except falsy values all other are truthy values, some of them are:
// "0", 'false' (it in string so its not false value), " ", [], {}, function(){}

// we can check array as
const arr = [];
if (arr.length === 0) {
    // console.log("array is empty");
}

// for object
const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// Important for interview
/*
false == 0
->true
false == "";
->true
"" == 0
->true
*/

// Nullish and coalescing operator (??): null undefined
// let val1 = 5 ?? 10;
// let val1 = null ?? 10;
// let val1 = undefined ?? 10;
let val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternery Operator
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");