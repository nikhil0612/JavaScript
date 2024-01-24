// here two types of memory is there 1) stack and 2) heap

// stack is for the primitive type
// In stack every value is a copy of a real vlaue

// heap memory is for the reference(non-primitive) type
// In heap every reference is related to real value. ex- if we change a value then its real value if being changed
// example

let myName = "Ram";
let anotherName = myName;
console.log(myName);
console.log(anotherName)

anotherName = "Shyam";

console.log(myName);
console.log(anotherName); // Both gives the diferent name and it works on copy file doesn't change the orginal

let userOne  = {
    email: "user@google.com",
    id: "user@123"
}
let userTwo = userOne;
console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "Nikhil@google.com"
console.log(userOne.email);
console.log(userTwo.email); // here it works on real value (heap memory)