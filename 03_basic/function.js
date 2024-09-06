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
