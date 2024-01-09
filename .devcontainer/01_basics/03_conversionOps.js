let score = 35;

let score01 = "35dscd";

let score02 = null;
console.group(typeof score) 
console.group(typeof (score))

let valueIn_num = Number(score)
console.log(typeof valueIn_num)

let valueIn_num01 = Number(score01)
console.log(typeof valueIn_num01)
console.log(valueIn_num01)

let valueIn_num02 = Number(score02)
console.log(typeof valueIn_num02)
console.log(valueIn_num02)



// notes

/* 
  "33" => 33
  "33abc" => NaN
  true => 1
  false => 0
*/

let isLoggedIn = 1

let booleanIs_loggedIn = Boolean(isLoggedIn)

console.log(booleanIs_loggedIn)

/*
 1 => true
 0 => false
 "" => false
 "Akki" => true
*/


let someNUm = 33

let stngNum = String(someNUm)
console.log(stngNum);
console.log(typeof stngNum);