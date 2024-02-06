// these loops are mainly array specific loop
// for of loop
const arr = [1,2,3,4,5];
for (const number of arr) { // iterator is the variable name here and object refers to which we want to iterate on
    // console.log(number);
}

// for of on strings
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}

//Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // it won't contain duplicate values & it maintains the order of insertion
// console.log(map);

// for of on Maps
// for (const key of map) {
//     console.log(key); // it will give the key-values in the form of array
// }
for (const [key, values] of map) { // it is the syntax to do the destructure of array
    // console.log(key,"-",values);
}

// for of on Objects
const myObject = {
    game1: "GTA",
    game2: "NFS",
    game3: "Spiderman"
}
// for (const [key, values] of myObject) {
//    console.log(key, "-", values); // myObject is not iterable
// }