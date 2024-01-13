// arrays

/* const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0]);

const stringArr = ["true", "false", "Akshita", "Abhinav", "Pragya"]

const myArr2 = new Array (stringArr)
console.log(myArr2) */


// Array Methods

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift("Akshita")
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9)) // false
// console.log(myArr.indexOf(4))


// const newArr2 = myArr.join()
// console.log(myArr2)


// splice and slice

// console.log("A", myArr)

// const myn1 = myArr.slice(1, 3);
// console.log(myn1)
// console.log("B", myArr)


// const meraArray = [1, 2, 3, 4]
// console.log(meraArray);


/* arrays - 2 */ 

const marvel_heroes = ["ironman", "spiderman", "thor", "captain america"]
const dc_heroes = ["superman", "batman", "flash"]


// push method
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)


// concat operator
// const new_universe = marvel_heroes.concat(dc_heroes)
// console.log(new_universe)



// spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)


const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// flat method
const real_array =  another_arr.flat(Infinity)
console.log(real_array)


// isArray method
console.log(Array.isArray("Rahil"))

// from method
console.log(Array.from("Rahil"))
console.log(Array.from({name: "Akshita"})) // * imp

// of method
let score_1 = 100
let score_2 = 200
let score_3 = 300
console.log(Array.of(score_1, score_2, score_3))


