// creation of promises
// it has callbacks as resolve or reject
const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); // if we want to conect the created promise to consumption then we need to use resolve()
    },1000);
});

// consumption of promise
promiseOne.then(function () {
    console.log("Promise consumed");
});

// promiseTwo
new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);

}).then(function () {
    console.log("Async task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
   setTimeout(function(){
    resolve({username: 'nikhil', email: 'nikhil@example.com'});
   }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'nikhil', password: '123'});
        }
        else{
            reject('ERROR: Something went wrong!');
        }
    },1000);
})
// promiseFour consumption
// if we want to return something it can't be hold in any variable it can only be returned to another then(), also we can multiple then as we want to use
// as we can see here error is true so we need to handle the error too for that we use catch()
// finally() is also being used for the final confirmation that request is rejected or resolved read more about finally

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

// it is not mandatory to handle promise through .then.catch but it can aslo be handled with other ways
// async await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Javascript', password: '123'});
        }
        else{
            reject('ERROR: JS went wrong!');
        }
    },1000);
})

// async await, in this we don't use catch to handle
// async await doesn't handle error directly so we need to use try catch
async function consumePromiseFive(){
    // using try and catch we can handle error gracefully
    try{
        const response = await promiseFive; // it is a consume so it will not consumed like promiseFive()
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// https://jsonplaceholder.typicode.com/users
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers();

// we can also write the above function in .then.catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error));

