// primitive dtypes

/* 

  7 types primitive dtypes
  --> It is call by value
  // changes in copy not in the original variable
  1. String
  2. Number
  3. boolean
  4 Null
  5. undefined
  6. Symbol
  7. bigInt

*/

// Reference (Non prmitve)

// Array, Objects and Functions

// heap and stack


let firstname = "Rahil"

let anothername = firstname
anothername = "Akshita"

console.log(firstname)
console.log(anothername) 


let user = {
    email: "mathurrahil05@gmail.com"
}

let user2 = user

user2.email = "akshitamittal09@gmail.com"

console.log(user)
console.log(user2)