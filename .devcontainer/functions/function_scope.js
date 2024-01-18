/*
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);
*/

// it is a scope

// var c= 300
let a = 2400

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner a", a);
}

console.log("outer a", a);
// console.log(b);
// console.log(c);



function one() {
    const user = "Akshita"

    function two() {
        const tech =  "DevOps"
        console.log(user)
    }
    // console.log(tech)

    two()
}

// one()

if (true) {
    const username = "Rahil"
    if (username === "Rahil") {
        const tech = "DevOps"
        console.log(username + " " + tech);
    }
    // console.log(tech);
}
// console.log(username);


console.log(addOne(5))
function addOne (value) {
    return value + 1
}



// function expression
// hoisting error
addTwo(4)
const addTwo = function(num) {
    return num + 2
}
