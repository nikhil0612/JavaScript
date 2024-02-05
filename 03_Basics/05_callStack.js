// it is simple execution one by one   
function one(){
    console.log("one");
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
// one();
// two();
// three();

// it is calling one function from another function
function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
two();
three();

