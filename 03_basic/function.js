function sayMyName(){
    console.log("N")
    console.log("i")
    console.log("h")
    console.log("a")
    console.log("l")
}
// sayMyName()


// function addtwoNu(num1 , num2){
//     console.log(num1 + num2);
    
// }

// for show how "return work" 

function addtwoNu(num1 , num2){
//    let result = num1+num2;
//    return result
//    console.log("NIHAL"); 
   // after decleared "return" keyword in code nothing will print after this
   
   return num1+num2;
    
}
const result =  addtwoNu(2,3)
// console.log(result);

// another function

function  loginUserMessage(username = 'jimmy'){ //username = 'jimmy'(if we not define anything in username then username will take jimmy as a defult value)
    if (username === undefined) {
        console.log("please enter username");
        return
    }
    return`${username} just loged in`
}
console.log(loginUserMessage("Nihal Singh"))


// Shoping cart function

function calulateCarPrice(val1 , val2 , ...num1){ // "..." this three dot called rest/spred operator.
    return num1
}
console.log(calulateCarPrice(200,900,1000,230,320,450))

// object in function

const user={
    username:"Nihal Singh",
    price : 900
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"jimmy",
    price:1900
})


// ***************** FUNCTION WITH ARRAY *******************
const myNewArray = [200,300,400]
function myNewArrayFunction(getArray){
    return getArray[1]
}
// console.log(myNewArrayFunction(myNewArray))
console.log(myNewArrayFunction([300,500,1400,3200]))