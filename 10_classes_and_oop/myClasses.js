// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const test = new User("test", "test@example.com", "123");
// console.log(test.encryptPassword());
// console.log(test.changeUsername());

// behind the scene (how classes and objects work so we can say it as syntatic sugar)
const User = function(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`;
}

let test2 = new User("Test2", "test2@example.com", "456");
console.log(test2.encryptPassword());
console.log(test2.changeUsername());