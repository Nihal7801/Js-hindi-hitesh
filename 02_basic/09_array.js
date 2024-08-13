// array

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

const myHeros = ["nihal","adarsh"]
console.log(myHeros[1]);

// array methods

myArr.push(6)
console.log(myArr);
// note :- push(), its push the values in array

 myArr.pop()
 console.log(myArr);
//  note :- pop(), its remove last index from array

myArr.unshift(9)
console.log(myArr);
// note :- unshift(), its add value on 0 index

myArr.shift()
console.log(myArr);
// note :- shift(), its remove unshift() value

console.log(myArr.includes(9));
// note :- includes(), its check value is includes in your array or not

console.log(myArr.indexOf(4));
//  note :- indexof(), its give you value from index number


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
// note :- join(), its add all the element of an array in string.

// slice(),splice()

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);
// note :- slice(), its print value between index

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c" ,myArr);
// note :- splice(), its print value between index include last range(index)








