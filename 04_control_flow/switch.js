// switch syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3; 
switch (month) { // we can use variable of any datatype
    case 1:
        console.log("jan");
        break; // break stops the fall through property
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default: console.log("default case");
        break;
}