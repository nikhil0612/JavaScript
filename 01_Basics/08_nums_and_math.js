// --------------------------number--------------------------
const score = 100;
// console.log(score); // 100

const balance = new Number(300); // It is a type that declare the datatype as number while defining it
// console.log(balance); // [Number: 300]

// console.log(balance.toString());
// console.log(balance.toFixed(2)); // also check about precisoion carefully

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// --------------------------Maths--------------------------
// console.log(Math); // it shows the properties present in the Math library
// console.log(Math.abs(-6)); // it will convert the negative value to positive vlaue (it will not convert +ve to -ve)
// console.log(Math.round(4.6)); // it will round of the number according to the general rule
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(2, 4, 3, 1));
// console.log(Math.max(5, 8, 2, 4));

console.log(Math.random()); // it is a function that generates the random values between 0-1 excluding 0&1
// generate random number within a range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1) + min));

