
// ((product1,product2,product3)=>{
//     let sum = product1+product2+product3
//     if(sum>10000){
//         sum = sum-1000
//         console.log(`After  discount your bill is ${sum}`);
        
//     }else{
//         console.log(`your bill price is ${sum}`);
//          }

// })(4000,8000,1000)

// back to control flow

// if
if(true){
    
}

// const score = 400
// if(score > 100){
//     let power = "fly"
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`);

// shorthand notation

// const balances = 1000
// if(balances > 500) console.log("yes balance is "),console.log("second output");

// nested if 
// let balance
// ((balance)=>{
// if(balance<500) console.log("balance is less than 500");else if(balance<750) console.log("balance is less than 750"); else if(balance<=1000) console.log("balance is less than equal too 1000");else console.log("balance is greater");})(600)


//  real life program with if else with and(&&) , or(||) operator

const userLogedIn = true
const debitCard = true
const LoggedInfromGoogle = true
const LoggedInFromEmail = true
const LoggedInFromMobile =  true

if(userLogedIn && debitCard){
    console.log("Allow user to buy");    
}else{
    console.log("We will not allow user")
}

if(LoggedInfromGoogle || LoggedInFromMobile || LoggedInFromEmail){
    console.log("Allow user for buy course");
}else{
    console.log("treat as a guest user");
}



