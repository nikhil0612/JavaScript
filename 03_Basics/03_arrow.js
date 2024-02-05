// this
const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // in node env. it shows the empty braces 
// but it shows the lots of methods in browser's console and browser contain global object

// function fun() {
//     let username = "Nikhil";
//     console.log(this.username); // it is only working in objects not in function
//     // console.log(this);
// }
// fun();

// this is also not working for it too
// const fun = function(){
//     let username = "Nikhil";
//     console.log(this.username); // undefined
// }
// fun();

// arrow function
// () => {} - it is the syntax of arrow function
const fun = () => {
    let username = "Nikhil";
    console.log(this.username ); // undefined
    // console.log(); //if we use this in the log inside the function then it will return empty braces
}
fun();


// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4)); // it is arrow function and when we have curly braces then we have user return keyword

// it is very imp concept and it implicitly returns the value in parenthesis
// const addTwo = (num1, num2) => num1+num2; 
const addTwo = (num1, num2) => (num1+num2); // this also works same as curly braces declaration
console.log(addTwo(3,4));