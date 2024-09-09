const user={
    username:"nihal",
    price:999,

    logIn : function() {
        
    console.log(`${this.username} welcome to website`);
    console.log(this);
    }

}
// user.logIn()
// user.username="Singh"
// user.logIn()

// console.log(this);

// new function

function chai(){
    let username = "nihal"
    console.log(this);
    console.log(this.username);
    // "this" keyword use in only object for access variable name using dot(this.username)
    // "this" keyword not work with variable in function 
    
}
// chai()
 
// ********** Arrow Function ****************

// const chaii = function(){
//     let username = "nihal"
//     // console.log(this);
//     console.log(this.username);
// }
// chaii()


// const chaii = ()=>{
//     let username = "nihal"
//     console.log(this);
//     // console.log(this.username);
// }
// chaii()

const nihal = (num1,num2)=>{
    return num1+num2
}

// one more way to use that is "implecet return"

// const nihalSingh = (num1,num2)=> num1+num2

// const nihalSingh = (num1,num2)=> (num1+num2)

const nihalSingh = (num1,num2)=> ({username:"nihal"})
console.log(nihalSingh(8,10))