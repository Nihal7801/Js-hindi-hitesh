// talk about loop 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
        if(element == 5){
            // console.log("5 is best number")
        }
//   console.log(element);
    
}

//  another example 

for(let i = 0; i<= 10; i++){
    // console.log(`outer loop is ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //  console.log(`inner loop is ${j}`);
        // console.log(i+ '*' +j +'=' +i*j);
        
    }
}

// loop with array 

const myArray = ["flash","spiderman","bheem"]
// console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);  
}

// some keywords in loop 

// 1.break
// 2.continue
for (let i = 0; i <= 10; i++) {
    const element = i;
        if(element == 5){
            // console.log("5 is best number")
            // break
        }
//   console.log(element);

}

for (let i = 0; i <= 10; i++) {
    const element = i;
        if(element == 5){
            console.log("5 is best number")
            continue
        }
  console.log(element);
    }
