// there are two type to declair objects
    // 1.litteral
    // 2.constructor

// Important "SINGLTON"
    // when we decalir object with litteral it will not be SINGLTON
    // when we decalir object with constructor it will be SINGLTON

// 1. Object Literals

const mysym = Symbol("key1")

const JsUser={
    name : "Nihal",
    "fullName":"Nihal Singh",
    [mysym]:"mykey1",
    age : 24,
    location:"jaipur",
    email:"nihal@gamil.com",
    isLoggedIn: false,
    lastLoginDays:["monday","sunday"]
}

// console.log(JsUser.location);
// console.log(JsUser["fullName"]);
// console.log(typeof JsUser["fullName"]);
// console.log(typeof JsUser[mysym]);


JsUser.age = 20
// console.log(typeof JsUser.age);
// console.log(typeof JsUser.lastLoginDays);


// we can freeze objects like that
// Object.freeze(JsUser)
// JsUser.name = "vishal"
// console.log(JsUser);

// Function with objects

JsUser.greeting = function(){
    console.log("hello js users");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//  function eha(num1,num2) {
//      this.num1=num1
//      this.num2=num2
    
//  }
//  console.log(new eha(7,8).num1.num2);
  
 
 




