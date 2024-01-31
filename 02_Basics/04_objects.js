// const User1 = new Object(); // by this we are creating object using constructor and it is of singleton type
// console.log(User1); // if we print this there is no difference b/w singleton and object literal
const User1 = {}; // it non-singleton object
// console.log(User1); // it will also print the same user as empty value
// assigning values to the User1
User1.id = "123abc";
User1.name = "Nikhil";
User1.isLoggedIn = false;
// console.log(User1); // it will print all assigned values

// we can create objects in objects(nesting)
const regularUser1 = {
    email: "nikhil123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nikhil",
            lastname: "Soni"
        }
    }
}
// console.log(regularUser1.fullname.userfullname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
// const obj3 = {obj1, obj2};
// console.log(obj3); // it is same as the array combining i.e. in 1 object we are combining 2 another objects
// const obj3 = Object.assign({}, obj1, obj2); // by this we can overcome this problem of objects in objects
// we can also write it as (obj1, obj2), but as we read its documentation we should give a empty braces before the objects for more check the documentation of assign
// to combine we have Object.assign(target, source) so if we write obj1 as target then all the other object will be combined in obj1(target)
// console.log(obj3); 
const obj4 = {5:"e", 6:"f"};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj3 = {...obj1, ...obj2, ...obj4}; // it is most widely used method for combining i.e. spread operator
// console.log(obj3);

// some methods
// console.log(User1);
// console.log(Object.keys(User1));
// console.log(Object.values(User1));
// console.log(Object.entries(User1));
// console.log(User1.hasOwnProperty("isLoggedIn"));

// ----------------------------------------objects destructure and json(API)---------------------------------------
// objects destructure
const course = {
    coursename: "JS course",
    price: "999",
    courseInstructor: "hitesh choudhary"
}
// course.courseInstructor; // we can call the object values
// object destructure
// const {courseInstructor} = course;
const {courseInstructor: instructor} = course; // we can also give name as suitable to us 
console.log(instructor);

// APIs
// it is in form json(javascript object notation), mostly its key and value are in string as shown below
// {
//     "name": "hitesh"
//     "coursename": "JS Course",
//     "price": "free",
// }

// APIs is also in form of array
[
    {},
    {},
    {}
]
// All are in form of JSON whether it is array notation or object notation and also it is language independent