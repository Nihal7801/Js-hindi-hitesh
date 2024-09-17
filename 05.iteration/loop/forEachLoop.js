const programming = ["js","c++","c","java","python"]

// programming.forEach(function(val){
//     console.log(val);
    
// })

// programming.forEach((item)=> {
// console.log(item);

// })

// through function 
// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)

// programming.forEach( ( item , index , arr) => {
//     console.log(item , index , arr);
    
// })

// object with array 

const myCoading = [
{
    languagename : "javascript",
    languagefilename : "js"
},
{
    languagename : "java",
    languagefilename : "java"
},
{
    languagename : "python",
    languagefilename : "py"
},
]
myCoading.forEach((item,index,array)=>{
    console.log(item.languagename,index,array);
    
})