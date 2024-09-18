// const programming = ["js","c++","c","java","python"]

// const value = programming.forEach((item)=>{
//     // console.log(item);
//     return item
//     // for each always return undefined in return case
    
// })
// console.log(value);

const numArray = [1,2,3,4,5,6,7,8,9,10]
// const outputNum = numArray.filter((number)=> number > 3)
// console.log(outputNum);

// const outputNumber = numArray.filter((num)=>{
//    return num>3
// })
// console.log(outputNumber);


// const myNumber = []
// numArray.forEach((num)=>{
//     if (num>5) {
//         console.log(num);
        
//     }
// })

// ********** learn filter() with real example ***********

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks = books.filter((book)=>book.genre === 'Fiction')
const userbooks = books.filter((bk)=>{return bk.publish>=2000}) // if you open scope{} you will write return keyword 
// const userbk = books.filter((bk)=>bk.edition>2000)
const userbks = books.filter((bkk)=>bkk.publish>=2000 && bkk.genre === 'Science')

console.log(userbks);


