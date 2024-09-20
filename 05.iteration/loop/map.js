const mapArray = [1,2,3,4,5,6,7,8,9,10]
const TenaddInNum = mapArray.map((num)=>num + 10)
// map automaticly return value without using return keyword 
// console.table(TenaddInNum)

// cheanning means use two three method in one time 

const Num = mapArray.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.table(Num)