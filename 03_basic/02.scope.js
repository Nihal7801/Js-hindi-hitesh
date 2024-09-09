
var c = 78;
let a = 400;
// we can use global scope variable under local scope but we can not use local scope variable in global scope
if (true) {
    let a= 30;
    const b = 23;
    var c = 89;
    console.log('Inner :', a);
    
}
// console.log(a);
// console.log(b); 
// console.log(c);

// ****** Scope with function 

function one(){
    const username = "Nihal"

    function two(){
        const websiteName = "chaicode.com"
        console.log(username);
        console.log(websiteName);
        
    }
    // console.log(websiteName); // this will not print here bcz its outside of there function
    two() 
}
one()

// *** Scope with if

if(true){
    const username = "Nihal";
    if (username==="Nihal") {
        const website = " youtube"
        console.log(username+website);
        
    }
    // console.log(website); // out of if condition we can not access
    
}
// console.log(username);

// +++++++++++++++++ Interesting ++++++++++++++

function addOn(num){
    return num + 1
    
}
console.log(addOn(7));


const addOne = function (num){
    return num + 5 
}
addOne(8)
