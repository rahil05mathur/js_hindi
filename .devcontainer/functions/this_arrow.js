const user = {
    username: "Akki",
    tech: "DevOps",
    price: 99,

    welcomeMsg: function() {
        console.log(`${this.username},welcome to my company`);
        console.log(this);
    }

}

// user.welcomeMsg()
// user.username = "rahil"
// user.welcomeMsg()

// console.log(this);

// window is a global object in browser


// function chai() {
//     console.log(this);
// }

// chai()


// const chai = function () {
//     const user = "Akshita Mttal"
//     console.log(this.user);
// }

// chai()

const chai = () => {
    let username = "Chotu"
}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(454,2343));

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => ({username: "Ruchit"})

console.log(addTwo(454,2343));

