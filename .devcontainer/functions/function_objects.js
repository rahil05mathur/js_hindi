/*
real time situation: shopping cart
--> in shopping cart user is adding the
things one by one without checking the price
we don't know about how much items in the
basket, so we have to just added the price
to all the items. so it's a situation where
we dont know how much items in added to basket
(parameters)
*/

/*using resr & spread operator with function */
/*
function cartCalc(...num1) {
    return num1
}

console.log(cartCalc(200, 400, 500, 1000, 40000)
)
*/

/*
function cartCalc(val1, val2, ...num1) {
    return num1
}

console.log(cartCalc(200, 400, 500, 1000, 40000))
*/

/*
const user = {
    username: "Akshita",
    price: 299,
}

function handleObj (anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObj(user)
*/

function handleObj (anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

 handleObj({
    username: "akshita09",
    price: 99
})

const myNew_arr = [200, 400, 300, 1000]

function returnSecondVal(getArr) {
    return getArr[1]
}

console.log(returnSecondVal([200, 400, 300, 1000]));
