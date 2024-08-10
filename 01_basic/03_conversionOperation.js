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

