// for-each loop (mostly used loop) it is higher order function
// for-each on array(commonly used on it)
const coding = ["js", "java", "ruby", "python", "cpp"];
// coding.forEach( function (item) { // here its a callback fn so we don't give name to it
//    console.log(item);
// })

// we can also use arrow function in it
// coding.forEach( (item) => {
//     console.log(item);
// } )

// imoprtant
function printMe(item){
    console.log(item);
}
// coding.forEach(printMe); // NOTE: we only need to give the reference(printMe) of the function not execution(printMe())
// passing the function to the for each

// it can have multiple values that it(for-each) brings with it
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

//[{}, {}, {}] it is very useful in db
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )