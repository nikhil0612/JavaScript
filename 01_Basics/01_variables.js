const accountId = 12345;
let accountEmail = "nikhil@nikhil.com";
var accountPassword = "121212";
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "Jaipur";
let accountState;

accountEmail = "nikhil@gmail.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);