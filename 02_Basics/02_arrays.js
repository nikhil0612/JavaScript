const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "flash", "superman"];

// marvel_heros.push(dc_heros); // it will take whole array as an element
// console.log(marvel_heros); // [.. .. .. [.. .. ..]]

// const all_heros = marvel_heros.concat(dc_heros); // it will concate other arrays element to the previous array
// console.log(all_heros); // [.. .. .. .. .. ..] but concat is not much used

const all_superheros = [...marvel_heros, ...dc_heros]; // it is spread that will spread an array to individual ele.
console.log(all_superheros); // it is most used, also we can add more arrays to it


const arr = [1, 2, 3, 4, [6, 7], 8, [8, 9, [2, 7]]];
const new_arr = arr.flat(Infinity); // it will convert 2D/3D array to 1D array & we can pass depth(as parameter) to resolve
console.log(new_arr); // infinity will resolve the all depth

// validating array
console.log(Array.isArray("Nikhil"));
console.log(Array.from("Nikhil")); // it converts the parameters to array

let score1 = 10;
let score2 = 20;
let score3 = 30;
console.log(Array.of(score1, score2, score3)); // it will convert the variables to array