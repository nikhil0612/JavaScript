// Immediately Invoked Function Expressions(IIFE)
// we can have global scope pollution sometime so to remove this we can use iife 
(function temp() {
    // it is named iife
    console.log("DB Connected");
})();
// semi colon is must here because the it doesn't know where to stop the context execution, by this we can run multiple iife in one file
// we can also write arrow function as iife but to write two iffe in one file we need to close the previous by a semicolon
(() => {
    console.log("DB Connectec: two");
})();

// we can expect the name
((name) => {
    console.log(`iife name ${name}`);
})("Temporary");
// fun("Nikhil"); // we can understand above iife from this notation and passed the string