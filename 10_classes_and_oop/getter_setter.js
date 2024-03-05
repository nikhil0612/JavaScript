class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        // return this.password.toUpperCase(); // this will give error because race condition(max. call stack exceeded)
        // return this._password.toUpperCase();
        return `${this._password}nikhil`;
    }
    set password(value){
        // this.password = value; // this will give error 
        this._password = value;
    }
}

const test = new User("t@example.com", "abc");
console.log(test.password);
console.log(test.email);