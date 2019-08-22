const forEach = function (array, cb) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        let elem = array[i]
        const newElement = cb(elem)

        newArray.push(newElement)
    }

    return newArray
}

const newNumbers = forEach([1, 2, 3, 4], (elem) => {
    return elem * 100
})

console.log(newNumbers) // [100, 200, 300, 400]