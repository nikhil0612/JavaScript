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