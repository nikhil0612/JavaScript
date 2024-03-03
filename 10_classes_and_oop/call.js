function setUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called"); // it is also being called normally, but its functional EC is vanished by the execution context(EC)
}

function createUser(username, email, password){
    // setUsername(username); // here when we call this function that means it will set the username
    // to fix above problem we will use the below method
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const check = new createUser("test", "test@example.com", "123");
console.log(check); // here we should have all the details but the username is not present in o/p