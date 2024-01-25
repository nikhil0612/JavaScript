const name = "Nikhil"; // it also invokes the below statement(line no.6) internally
const repoCount = 7;
// console.log(name+" "+repoCount); // this is traditional method to print the string
console.log(`Hello this is ${name} and my repositories are ${repoCount}`); // this is string interpolation
// how to create a string object
const fullName = new String("Nikhil Soni");

// implementing the methods of strings
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(2));
console.log(fullName.indexOf(3));

const newStr = fullName.substring(0,5); // if we will pass negative value then it will ignore that and start from 0
console.log(newStr);

const anotherStr = fullName.slice(3, 6); // it can take negative value also like: fullName.slice(-11,6);
console.log(anotherStr); 

const newStr1 = "     Nikhil     ";
console.log(newStr1);
console.log(newStr1.trim());

const sentence = "Hello there! I am the Software Developer";
console.log(sentence.replace(" am", "'m"));
console.log(sentence.includes("Software"));

const sentence1 = 'Hello-there!-I-am-the-Software-Developer';
console.log(sentence1.split("-")); // It gives a array that separates on the basis of -(dash)

