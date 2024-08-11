// ********************************

// "stack" used in (primitive) , in stack memory you get copy of variable
// "Heap" used in (non-primitive) , in heap memory you get refrance of original value

let myYoutubename = "010nihal"

let anotherName = myYoutubename
anotherName = "nihalAurChai"
console.log(anotherName);
console.log(myYoutubename);


// Heap 

let user ={
    email:"nihal7801",
    upi:"user@axl"
}
let userTwo = user
userTwo.upi = "user@ybl"

console.log(userTwo.upi);
console.log(user.upi);



