const person = 'Bradlina'

const announcePerson = function (name) {
    console.log('🎺🎺🎺🎺🎺')
    console.log('Announcing ' + name + ', the Magnificent!')
}

const leavingPerson = function (name) {
    console.log('🎺🎺🎺🎺🎺')
    console.log('You had been graced with the presence of ' + name + ', the Magnificent!')
}

const people = ['Bradlina', 'Kristoferetta', 'Jamiestofino', 'Bob']

// takes a function, and then calls it (callback)
// Higher order function
const forEach = function (array, cb) {
    for (let i = 0; i < array.length; i++) {
        let elem = array[i]
        cb(elem)
    }
}

forEach(people, announcePerson)
forEach(people, leavingPerson)

const mult100 = function (thing) {
    console.log(thing * 100)
}

forEach([1, 2, 3, 4], mult100)