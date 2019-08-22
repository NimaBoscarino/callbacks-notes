const addTwoNumbers = function (a, b) {
    return a + b
}

const multiplyTwoNumbers = function (a, b) {
    return a * b
}

console.log(addTwoNumbers(10, 5))

console.log(multiplyTwoNumbers(10, 5))

let doMath = addTwoNumbers

console.log(doMath(7, 4))

doMath = multiplyTwoNumbers

console.log(doMath(7, 4))

