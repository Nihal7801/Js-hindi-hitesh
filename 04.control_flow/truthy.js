const username = [] // is username we can store any value like array , integer it will take it as ki yes username me value hai to ye treat as a true 
if (username) {
    console.log("yes user is logined");
    
}else{
    console.log("user is logout");
    
}

// falsy values 
    // false , 0 ,-0 , BigInt , 0n , "" , null , undefined , NaN

// truthy value 
    // true , "0" , "false" , " "  , [] , {} , function(){} , 

// if (username.length === 0 ) {
//     console.log("array is empty");
    
// }else{
//     console.log("array is not empty");
// }

// **** check object is empty or not ******8

// const name = {name:"nihal",age:23,email:"nihalkumar8736",}
// if (Object.keys(name).length===0) {
//     console.log("object is empty");
    
// }else{
//     console.log("object is not empty");
    
// }

// ******** Nullish coalesacing operator ************

let value1;
// value1 = 5 ?? 10
// value1 = undefined ?? 19
value1 = null ?? 12 ?? 21

// console.log(value1)

// ****** ternaru operator ******

// condition ? true :false 
const icePrice =200 
icePrice >= 150 ? console.log("Price is right"):console.log("price is not right");

