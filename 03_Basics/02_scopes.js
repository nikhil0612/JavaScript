// case 2
var c = 300; // it is globally defined and still it is not printing this value
let a = 100;
if(true){
    let a = 10;
    const b =20;
    var c = 30;
    // c = 30; // if we declare var or not still this problem arrise
    console.log(a);
}

    //console.log(a); // it will give error because its scope is limited in the if block
    //console.log(b); // it also give error as its scope is limited in the if block
    console.log(c); // it will execute and give value 30 and it should not print according to the programming scope rules so ultimately we should not use the var

// in browser's console the scope is different and in the node(terminal) it is different
