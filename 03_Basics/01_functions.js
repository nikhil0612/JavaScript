// function syntax
/* function functionname(){
    body
}
functionname- we can give it according to variable naming rules
()- parenthesis
{}- scope of function
*/
// function sayMyName() {
//     console.log("N");
//     console.log("I");
//     console.log("K");
//     console.log("H");
//     console.log("I");
//     console.log("L");
// }
// sayMyName();

//learning
// sayMyName- it is just reference of the function it will not execute anything
// sayMyName()- it is functions execution, whenever we write like this it means it will execute the function

// function addTwoNumbers(number1, number2){ // here while giving definition number1, number2 are parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5); // here when we call function then i.e. 3,5 are the arguments
// addTwoNumbers(); // it will print NaN
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, null); // 3

// const result = addTwoNumbers(3,5);
// console.log("Result: ", result); // undefined, because function is not returning anything so its not storing it

// extending the example
function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result; // here we have same variable name inside and outside the function but their scopes is different
    return number1+number2; 
}
const result = addTwoNumbers(5,7);
// console.log("Result: ", result);

// function loginUserMessage(username){
    function loginUserMessage(username = "User"){ // we can also pass a default name when nothing is passed, also default value can be override by the passed value
    // if(username === undefined){
        if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Nikhil"));
//console.log(loginUserMessage("")); // when we pass empty string then it returns nothing
// console.log(loginUserMessage()); // when we don't pass anything then it returns undefined

//---------------------------funtions remaining-------------------------------------
// rest operator is same as var-arg in java, most importantly rest operator should be at last like (val1, val2, ...val)
function calcualteCartValue(...num1){ // in JS it is called rest operator and spread operator but their significance differ place to place
    return num1;
}
// console.log(calcualteCartValue(200, 300, 500, 2000));

// we can also pass object in functions
const user = {
    username: "Nikhil",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

// we can also pass arrays in functions
const arr = [200, 400, 500, 1000];
function retrunSecondValue(getArray){
    return getArray[1];
}
// console.log(retrunSecondValue(arr));
console.log(retrunSecondValue([100, 500, 1000, 2000])); // we can also pass direct array without variable
