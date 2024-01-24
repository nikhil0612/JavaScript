//  basic comparison (same datatypes)
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// comparison with different datatypes
console.log("2" > 1);
console.log("02" > 1);
console.log("2" == 2);
// these types of comparison should be avoided hence, it can lead to confusion
console.log(null > 0); // flase because null is NaN
console.log(null < 0); // false because null is NaN
console.log(null == 0); // flase because null is NaN
console.log(null >= 0); // it gives true because here null convertes to 0

console.log(undefined > 0); // it always gives false in any type of conversion comparison