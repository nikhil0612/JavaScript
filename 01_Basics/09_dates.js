// Dates

let myDate = new Date(); // date is an object in javascript
// console.log(myDate); // it is not much readable directly
console.log(myDate.toString()); // it is better to read and understand
// some date methods
console.log(myDate.toDateString()); // Fri Jan 26 2024
console.log(myDate.toISOString()); // 2024-01-26T11:50:57.753Z
console.log(myDate.toJSON()); // 2024-01-26T11:50:57.753Z
console.log(myDate.toLocaleDateString()); // 1/26/2024
console.log(myDate.toLocaleTimeString()); // 11:50:57 AM
console.log(myDate.toTimeString()); // 11:50:57 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Fri, 26 Jan 2024 11:50:57 GMT

console.log(typeof myDate); // it is an object type
// date according to given parameters
// let myCreatedDate = new Date(2024, 11, 6);
// let myCreatedDate = new Date(2024, 6, 6, 5, 45);
// let myCreatedDate = new Date("2024-06-30"); // it is formatted as yyyy-mm-dd
let myCreatedDate = new Date("01-6-2024"); // it is formatted as mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

// timestamp
// it generally help's in quizes, poles etc.
let myTimeStamp = Date.now(); // it can also use by new keyword
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // it is taking reference from 1 jan 1970
console.log(Math.floor(Date.now()/1000)); // now it is seconds & to avoid decimal we use its floor value

// some other methods
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday: "long",
}); // we can define formats as we want