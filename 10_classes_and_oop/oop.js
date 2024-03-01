const user = {
    username: 'nikhil',
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // here we need to provide the current context by means of this otherwise will get error
        // console.log(this); // it will give the current context of the memory
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username; // here username is parameter passed and this.username is the variable of fun.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // we can also write function here
    this.greetings= function(){
        console.log(`Welcome ${this.username}`);
    }

    // if we don't use return here still it will implicitly return these values
    return this; // it retruned the details
}

// const userOne = User("nikhil", 5, true); // it is giving all the details 
// const userTwo = User("AbcXyz", 6, false); 
// console.log(userOne); // now it is giving the userTwo values in userOne because we are not creating another instance
// userTwo overrides the values

// use of new keyword
const userOne = new User("nikhil", 5, true);
const userTwo = new User("AbcXyz", 6, false); 

// console.log(userOne); // now both are giving needed values only
// console.log(userTwo);
console.log(userOne.constructor); // constructor property
// study about instanceOf()