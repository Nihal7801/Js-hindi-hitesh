// array specific loops 

// talk about forOf loop

const num = [1,2,3,4,5,6,7,8]
for (const number of num) {
    // console.log(number); 
    
}

// with string 

const greating = "hello nihal!"
for (const great of greating) {
    // console.log(`i say ${great}`);
    
}

// talk about map 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN',"India")
// map known for unique value and print think in same order which you write
console.log(map);

for (const [key,value] of map) {
    // console.log(key ,':-', value);
    
}

// talk about objects

// const myObj = {
//     game1 : "PS5",
//     game2 : "PUBG",
// }
// for (const [key,value] of myObj) {
//     console.log(key ,':-', value);
// }
// output :- just for check 


