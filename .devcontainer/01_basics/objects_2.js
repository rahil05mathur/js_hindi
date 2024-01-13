// singleton object
// const tinderUser = new Object()

// non singleton object
const tinderUser = {}

tinderUser.id = "123rah"
tinderUser.name = "Rahil"
tinderUser.isLoggedin = false

//  console.log(tinderUser)


//  const newUser = {
//     email: "someone@gmail.com",
//     fullname: {
//         userFUllname: {
//             fname: "Akshita",
//             lname: "Mittal"
//         }
//     }
//  }

//  console.log(newUser.fullname.userFUllname.fname);

//  const obj_1 = {1: "a", 2: "k"} 
//  const obj_2 = {3: "r", 4: "a"}

//  const obj_3 = { obj_1, obj_2} // created problem
//  const obj_3 = Object.assign(obj_1, obj_2)
//  const obj_3 = Object.assign({}, obj_1, obj_2) // assign(target, source)
// const obj_3 = {...obj_1, ...obj_2} 
// console.log(obj_3)


const users = [
    {
        id: 1,
        email: "rahil@gmail.com"
    },
    {
        id: 2,
        email: "akshita@gmail.com"
    }
]

users[1].email
console.log(users)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedin'))

