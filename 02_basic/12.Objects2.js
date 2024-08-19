// SINGLETON objects

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name = "niha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
 const regularUser = {
    email:"something@gmail.com",
    fullname:{
        userName:{
            firstname:"nihal",
            lastname:"singh",
        }
    }
 }
//  console.log(regularUser.fullname.userName);
//  console.log(regularUser.fullname);
//  console.log(regularUser);
 
// when we concatinate two objects
const obj1 = {
    1:"a",
    2:"b",
}
const obj2 ={
    3:"c",
    4:"d",
}

const obj3 = {...obj1, ...obj2} // this is a spred(...) to concatinate object or array
console.log(obj3)
 
// const obj3 = Object.assign({}, obj1, obj2,) // second method to concatinate
// console.log(obj3);

// when data come from database
const user=[
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },
]

 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//  note :- hasOwnProperty() , its check that varible is in objects or not

