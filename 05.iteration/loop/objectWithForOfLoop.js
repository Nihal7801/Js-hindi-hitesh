// object relation with for of loop 

const objName = {
    js :"javaScript",
    cpp :"C++",
    rb : "rubby",
    swift: "swift by apple"
    
}
for (const key in objName) {
    // console.log(`${key} shortcut is for ${objName[key]}`);
    
}

// for in loop with array 

const programming = ["js","c++","c","java","python"]
for (const key in programming) {
    console.log(programming[key]);
    
}