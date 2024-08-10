let score = "33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// NOTES :-

//"33" => convert in 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// Convert in string

let someNumber = 30
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// convert in bigint

let someValue = 32
let InBigint = BigInt(someValue)

console.log(InBigint);
console.log(typeof InBigint);

// ***************** Operations ******************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = "Nihal"

let str3 = str1+str2
console.log(str3);

// some more conversion in string

// console.log(1+"2");
// console.log(2+"1");
// console.log("1"+2+2);
// console.log(2+2+"1");
// console.log((1+3)*4%2);


console.log(+true);
console.log(+"");

let gameCounter = 100
let newValue = ++gameCounter;
console.log(newValue);






