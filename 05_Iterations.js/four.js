// for-in loop
// iterations on objects 
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) { // for in loop works for the objects and others also
    // console.log(key);
    // console.log(`${key} used for ${myObject[key]}`); // it will give and values both
}

// for-in on array
const programming = ["js", "py", "rb", "java", "cpp"];
for (const key in programming) {
    // console.log(key); // 0 1 2 3 4 it will not print the items of array
    console.log(programming[key]); // it is the syntax for accessing the items of array
}

// for-in on Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// for (const key in map) { // map is not iterable by for-in loop
//     console.log(key);
// }