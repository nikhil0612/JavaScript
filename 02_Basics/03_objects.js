// singleton
// Object.create; when we create objects using constructor the it form singleton

const mySym = Symbol("key-1");

const jsUser = {
    name: "Nikhil",
    "full name": "Nikhil Shekhawat",
    [mySym]: "myKey",
    age: 11,
    email: "nikhil@hawk.com",
    location: "Pune",
    isLoggedIn: false,
    lasLoggedIn: ["Monday", "Friday"]
}; // objects can be accessed by 2 methods 1) .(dot) method and 2) [](square) method

// console.log(jsUser.email); // dot method
// console.log(jsUser["email"]); // square method
// console.log(jsUser["full name"]); // this can't be accessed by dot method

// console.log(jsUser[mySym]); // value will not change but its type change so symbol can inly be accessed by square method

jsUser.email = "nikhil@gmail.com";
// Object.freeze(jsUser); // it will prevent to change
jsUser.email = "nikhil@live.com";
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello JS User!");
};

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}!`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

