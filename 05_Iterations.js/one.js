// for
for (let i = 0; i < 5; i++) {
    // console.log(i+1);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop value: ${j}, Outer loop value: ${i}`);
        // console.log(i +" * "+ j +" = "+ i*j);
    }
}
// for array
let myArray = ["flash", "superman", "Batman"];
// console.log(myArray.length);
for(let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
}

// break and continue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log("5 detected");
        break;
    }
    // console.log(`The value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 detected");
        continue;
    }
    console.log(`The value of i is ${i}`);
}