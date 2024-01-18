// console.log("A")
// console.log("K")
// console.log("S")
// console.log("H")
// console.log("I")
// console.log("T")
// console.log("A")


// function sayMyname() {
//     console.log("A")
// console.log("K")
// console.log("S")
// console.log("H")
// console.log("I")
// console.log("T")
// console.log("A")
// }

// sayMyname() // execution of function ()


// add two numbers

// function addTwo(num1, num2) {
//     console.log(num1 + num2)    
// }
// addTwo(3, 6)

// function addTwo(num1, num2) {
//     console.log(num1 + num2)    
// }
// const result = addTwo(3, 6)
// console.log("addition of two nums is", result);

// function addTwo(num1, num2) {
//     const result = num1 + num2
//     console.log(result)
//     return result    
// }

// addTwo(4, 5)

// function expression
// const result = function addTwo(num1, num2) {
//     console.log(num1 + num2);
// }
// console.log(result)

// function addTwo(num1, num2) {
//     console.log(num1 + num2);
// }
// const result = addTwo(3,5)
// console.log("Result", result)

// function addTwo(num1, num2) {
    // let result = num1 + num2
    // return result
    // return num1 + num2
    // console.log("Rahil");  // not print 
// }
// const result = addTwo(3,5)
// // console.log("Result", result)

// function log_inUser_msg(username) {
//     return `${username} just logged in` 
// }

// log_inUser_msg("Rahil")
/* when we run this code, function is execute
but it prints nothing on console, it is because
function only returns value not prints the value*/

// const loggedUser = log_inUser_msg("")
// const loggedUser = log_inUser_msg("Rahil")
// console.log(loggedUser);
/* to print the value, we have to store the function
in some variable or we have to console it*/


// when user is not give it's name try to login 
/*
function log_inUser_msg(username) {
    // if (username === undefined) {
    //     console.log("Please enter the username");
    //     return
    // }
    if (!username) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in` 
}

console.log(log_inUser_msg())
*/

// pass the default value to parameter
function log_inUser_msg(username = "Akshita") {
    // if (username === undefined) {
    //     console.log("Please enter the username");
    //     return
    // }
    if (!username) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in` 
}

console.log(log_inUser_msg())
