
// const coding = ["js", "java", "ruby", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item; forEach doesn't return anything in any case(implicitly or explicitly)
// } )
// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// we have filter similar to forEach, it also take callback into it
// operation are same as forEach but forEach doesn't return and filter does
// const newNums = myNums.filter( (num) => num > 4 );
// const newNums = myNums.filter( (num) => {
//     return num > 4; // if we use curly braces then we need to return it. if we don't retrun then we need to write the condition
// } );
// console.log(newNums);

// if we want to return it with forEach 
// const newNums = [];
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// } )
// console.log(newNums);

// some extra features of filter
// books example need to add