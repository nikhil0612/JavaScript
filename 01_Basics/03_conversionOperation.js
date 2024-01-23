let score = "33abc";
console.log(typeof score);
console.log(typeof(score)); // Both are same

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
/*
Conversion
"33" => 33 it is converting string to number
"33abc" => NaN it is aslo converting string to number but it is not a value so it is marked as NaN
true => 1; false => 0 it is converting true as 1 and flase as 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
/*
1 => true; 0 => false
"" => false;
"Nikhil" => true;
 */

let someNumber = 33;
let stringNumber = String(someNumber); // now we are converting number to string
console.log(stringNumber);
console.log(typeof stringNumber);
// ----------------------------------Operations---------------------------------------------

let value = 3;
let negativeValue = -value;
console.log(negativeValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " Nikhil";
let str3 = str1+str2;
console.log(str3);
// operation examples
// console.log(1+2); // 3
// console.log(1 + "2"); // 12
// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log("1" + "2"); // 12

console.log(+true); // 1;
// console.log(true+); // its wrong and gives error
// console.log(+""); // it will give 0 but no use and also no sense of this
