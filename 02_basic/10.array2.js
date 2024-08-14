const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

// another method

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

// we have another method to concatinate

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// when array is mixed
 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// note :-flat(), its a method that concatinate all the array in one array

// we check that value is in array or not

console.log(Array.isArray("Nihal"));
console.log(Array.from("Nihal"));
// note :- isArray(), its check that value is in array or not
// note :- from(), its convert value in array

console.log(Array.from({name: "Nihal"}));  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



