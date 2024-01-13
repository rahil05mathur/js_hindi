// OBJECTS

/* There are two ways to declare the objects
--> 1. literals and
--> 2. constructor 
*/

//1 . singleton
// --> made from constructor
// Object.create()


// object literals

const mySym = Symbol("key_1")


const jsUser = {
    name: "Sangeeta",
    "name": "Sanjay Dutt Mathur",
    age: 53,
    // mySym: "mysymbol", // it return as string
    [mySym]: "mysymbol", // it returns as symbol
    location: "Jaipur",
    email: "sangeetamathur23@gmail.com",
    isLogggedIn: false,
    lastlogin_days: ["monday", "friday"] 
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["name"])
console.log(jsUser.name)
// console.log(jsUser.mySym)
console.log(typeof jsUser[mySym])


// jsUser.email = "rahilmathur2000@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "rahilmathur2000@microsoft.in"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello Chotu")
}

console.log(jsUser.greeting())

jsUser.greeting_2 = function() {
    console.log(`Hello ${this.name}`) // string interpolation
}

console.log(jsUser.greeting_2())