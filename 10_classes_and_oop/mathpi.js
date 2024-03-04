const desciptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desciptor); // its properties are much hard coded multiples checks on them so we aren't able to change it


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); // we can't override the Constant PI value

const test = {
    name: "JS Course",
    price: 2500,
    isAvailable: true,

    enrol: function(){
        console.log("Course is enrolled");
    }
}
// console.log(test);
// to chceck the property description 
console.log(Object.getOwnPropertyDescriptor(test, "name"));

// we can manipulate our own created properties
Object.defineProperty(test, "name",{
    writable: false,
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(test, "name"));

for (let [key, value] of Object.entries(test)) {
    if(typeof value !== 'function'){ // check for the code to prevent from bugs
        console.log(`${key} : ${value}`); // here the name prop is not iterable now
    }
}