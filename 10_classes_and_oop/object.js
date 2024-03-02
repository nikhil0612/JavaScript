function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
// const chai = createUser("chai", 25); // here we need to add new keyword
// const tea = createUser("tea", 250);
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
chai.printMe(); // it is giving error because we are not creating new instance of the onject
tea.printMe();