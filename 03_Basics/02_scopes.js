// case 2
var c = 300; // it is globally defined and still it is not printing this value
let a = 100;
if(true){
    let a = 10;
    const b =20;
    var c = 30;
    // c = 30; // if we declare var or not still this problem arrise
    console.log(a);
}

    //console.log(a); // it will give error because its scope is limited in the if block
    //console.log(b); // it also give error as its scope is limited in the if block
    console.log(c); // it will execute and give value 30 and it should not print according to the programming scope rules so ultimately we should not use the var

// in browser's console the scope is different and in the node(terminal) it is different

//--------------------------------------scopes extended--------------------------------------
// DOM(documents Object Model)

//nested scope
function one(){
    const username = "nikhil";

    function two() {
        const website = "Youtube";
        // console.log(username); // nikhil
    }
    // console.log(website); // it gives error
    two(); // it is called after one()
}

one(); // it is called first

if(true){
    const username = "nikhil06";
    if(username === "nikhil06"){
        const website = " Youtube";
        // console.log(username+website);
    }
    // console.log(website); // can't access
}
// console.log(username); // can't access

//-----------------------------------Important Concept-----------------------------------
// these are the function declaration type 
addOne(7); // we can call this function here before its declared
function addOne(number) {
    return number+1;
}
addOne(5); // its normal call

addTwo(2); // it will give error because by this type of definition(declaration) we store value in variable and its called expression
const addTwo = function(number){
    return number+2;
}
addTwo(8); // its normal call
//it is also called hoisting