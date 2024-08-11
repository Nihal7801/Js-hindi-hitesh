//  Primitive 
// 7 types :- String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
    console.log(id === anotherId);
    
const bigNumber = 98765432123545n

//Reference(Non primitive)
    // Array , Objects , Functions

    const heros =["nihal","hitesh","adarsh"]
    // now objects
// Notes :- objects always is in currly bracess
let myObj = {
    name: "Nihal",
    age: 22, 
}

// now functions 

const myFunction = function(){
    console.log("hello world");
        
}
console.log(typeof myObj);


    
