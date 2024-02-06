// if syntax
// if(condition){ // conditon can be true or false

// }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
    // console.log("welcome to the website");
}
// comparisons
// <, >, <=, >=, !=, ==, ===(it also check the type of variable)

const temperature = 50;
if (temperature < 51) { // we can also use other comparators ===, >=, <= ...
    // console.log("temperature is less than 51");
}
else if(temperature > 50){
    // console.log("temperature is greater than 50");
}
// else{
// }

// scope
const score = 200;
if (score > 100) {
    const power = "fly"; // if we use var then it will give output as fly, so we should not use var
    // console.log(`User power ${power}`);
}
// console.log(`User power ${power}`); // power is not defined, as it scope in limited to if
// shorthand notation of if statement
const balance = 1000;
// if(balance > 500) console.log("success"); // we can write muliple statement after separating it with comma but as per industry std. it not a good practice

if (balance < 500) {
    // console.log("fund is less than 500");
}
else if (balance < 750) {
    // console.log("fund is less than 750");
}
else if (balance < 900) {
    // console.log("fund is less than 900");
}
else{
    // console.log("fund is less than 1200");
}

// concept of && and ||
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    // console.log("allowed to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    // console.log("User logged in");
}
