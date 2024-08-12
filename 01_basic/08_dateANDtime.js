//Dates is object in js

const myData = new Date
console.log(myData);
console.log(myData.toString());

console.log(myData.getDate());
console.log(myData.getUTCDay());
console.log(myData.toDateString())
console.log(myData.toLocaleString());
console.log(typeof myData);

let myCreateDate = new Date(2021,0,21)
console.log(myCreateDate.toDateString());
// note :- In JS months start from 0

let mmddyy = new Date('2023-04-28')
console.log(mmddyy.toLocaleString());
// one another format

let newV = new Date('07-21-2023')
console.log(newV.toLocaleString());

// Next is TimeStamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());


console.log(Math.floor(Date.now()/1000));
// note :- Date.now(), gives us value in milisecond , and we can convert them into sec devideing with 1000

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate);



