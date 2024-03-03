class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}

const test = new User("Nikhil");
// console.log(test.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }

}

const  test1 = new Teacher("Rudhav", "rudhav@example.com");
test1.logMe();
// console.log(createId()); // not able to access the static variable by the instance type reference variable
