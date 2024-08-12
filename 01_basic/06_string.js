const name = "nihal"
const age = 23

// console.log(name + age + "kumar"); {This is a out dated style}
// Note :- (``) its called backticks
console.log(`my name is ${name} and my age is ${age}`);

// one another way to declear string

const gameName = new String('nihalsingh')
// const gameName = "nihal"
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
// we can not use negative number( -1 , -4) in substring method
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   nihal.  "
console.log(newStringOne);
console.log(newStringOne.trim);
// trim() use for remove space from string

const url = "https://nihalkumar.com%30singh"
console.log(url.replace('%30' , '_'));

console.log(url.includes('singh'));
console.log(url.includes('maurya'));


const stringName = new String('nihal-kumar-singh')
console.log(stringName.split('-'));
// const u = stringName.split('-')
// console.log(u[2]);






