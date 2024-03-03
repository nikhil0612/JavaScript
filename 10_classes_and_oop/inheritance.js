class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A Course is added by ${this.username}`);
    }
}

const test = new Teacher("Nikhil", "nikhil@example.com", "1234");
const test1 = new User("Test");
test1.logMe();
// test1.addCourse(); // it is not accesible by the parent class
test.addCourse();

console.log(test === test1); // false
console.log(test === Teacher); // false test is just a instance of user
console.log(test instanceof Teacher); // true
console.log(test instanceof User); // true (parent child relation i.e. inheritance)
