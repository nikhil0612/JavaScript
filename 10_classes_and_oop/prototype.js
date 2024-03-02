// let myName = "Nikhil     ";
// let myChannel = "AnyChannel";
// console.log(myName.trueLength); // we want the method trueLength

let myHeros = ["spiderman", "thor"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

// adding property directly to Object
Object.prototype.nikhil = function(){
    console.log(`Nikhil is present in all Objects`);
}

// adding property to array
Array.prototype.heyNikhil = function(){
    console.log(`Nikhl says hello`);
}
// heroPower.nikhil();
myHeros.nikhil();
myHeros.heyNikhil();
// heroPower.heyNikhil(); // it gives error because it is not having access to array properties

// inheritance

const User = {
    name: "Universal",
    email: "uni@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    teachingAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport // it inherits the properties of TeachingSupport, it is older method
}

Teacher.__proto__ = User; // alternate method to inherit the properties

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode       ";

String.prototype.trueLength = function(){
    console.log(`${this}`); // it is giving the refernce of the callee
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"nikhil".trueLength();
"iceTea".trueLength();