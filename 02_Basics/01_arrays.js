// arrays
// arrays in js are resizable and heterogeneous
const myArr = [1, 2, 3, 4, 5];
const names = ["Nikhil", "Ram", "Shyam"];
const newArr = new Array(1, 2, 3, 4, 5); // another way to create an array
// console.log(myArr[0]);
// console.log(names[1]);
// console.log(newArr[4]);

// array methods
// myArr.push(6, 7, 8);
// myArr.pop();
// myArr.unshift(10); // it will add the given parameter at the start position in the array and shits the all other elements(it is like a push operation but at start)
// myArr.shift(); // it is similar to pop() but it removes the element from the start(0 index)
// console.log(myArr.includes(5)); // it gives the result for the values that present in it and gives -1 for other(not present) vlaues
// console.log(myArr.indexOf(4)); //  it will give the index of the present value

const arr1 = myArr.join(); // it converts the array to string type
// console.log(myArr);
// console.log(arr1);
// console.log(typeof arr1);

// slice, splice
console.log("A ", myArr);
const A = myArr.slice(1, 3);
console.log(A);

console.log("B ", myArr);
const B = myArr.splice(1, 3); // it change the array values based on refernce
console.log("C ", myArr);
console.log(B);
// console.log(myArr);

