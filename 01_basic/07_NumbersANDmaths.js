const balance = new Number(100)
console.log(balance);

const score = 400
console.log(score);

// functions of number 
// note :- toString(), its convert method to string
console.log(balance.toString());
console.log(balance.toString().length);

// note :- toFixed(), its fix your number after decimal. like 100.00
console.log(balance.toFixed(3));

// variable
const otherNumber = 123.8999
console.log(otherNumber.toPrecision(3));
// note :- toPrecision(), ye decimal ke bad wale number ko 1 step se badha deta hai , as per example

// variable
const hund = 100000
console.log(hund.toLocaleString('en-IN'));
// note :- tolocalString(),its convert value in ones , tens form and sepret using coma','

// ******************************** ABOUT MATHS **************************************

// Math is a object
// console.log(Math);
console.log(Math.abs(-4));
// note :- abs(), its convert negative number to possitive number but not positive to negative


console.log(Math.round(4.3));
// note :- round(), its convert your decimal numbers in roundoff figure. like 4.3 to 4, 5.7 to 6

console.log(Math.ceil(5.3));
// note :- ceil(), its always take high value. like 4.3 its take 5 

console.log(Math.floor(5.9));
// note :- floor(), its always take low value. like 5.9 its take 5 , 5.2 its take 5

console.log(Math.min(5,4,7,3,8,1,9));
// note :- min(), its find lowest value from array

console.log(Math.max(5,4,7,3,8,1,9));
// note :- max(),its find highest value from array

console.log(Math.random());
// note :- random(), its give you a random number between 0 to 1. its can be in decimal 

console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20

const formula = Math.floor(Math.random()*(max-min + 1)+min)
console.log(formula);




