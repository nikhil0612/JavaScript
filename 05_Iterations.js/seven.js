// map() method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num+10 ); // map automatically returns the value
// console.log(newNums);
// chaining: means we can use multiple methods in one go like .map().map().filter();
const newNums = myNums // we can write it in multiple lines and we can use as many as methods we want
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 );

console.log(newNums);
