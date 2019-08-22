const goToTheCobbler = function () {
    console.log('I went to the cobbler 🥾')
}

const goToTheStore = function () {
    console.log('I went to the store 🏬')
}

const goToTheLibrary = function () {
    console.log('I went to the library 📚')
}

const goToTownAndWhileYoureThereGoToTheCobbler = function () {
    console.log("I'm going downtown")
    console.log('Go dancing 🕺🏽')
    // do some stuff

    // I'll do something for you while I'm in town
    goTheCobbler()

    console.log('Go to the fair🎢')
}

const goToTownAndWhileYoureThereGoToTheLibrary  = function () {
    console.log("I'm going downtown")
    console.log('Go dancing 🕺🏽')
    // do some stuff

    // I'll do something for you while I'm in town
    goTheLibrary()

    console.log('Go to the fair🎢')
}

const goToTown = function (andWhileYoureThere) {
    console.log("I'm going downtown")
    console.log('Go dancing 🕺')

    andWhileYoureThere()

    console.log('Go to the fair🎢')
}


// goToTown(goToTheLibrary)
// goToTown(goToTheStore)

goToTown(function () {
    console.log('I went to the city hall 🏛')
})

// let num = 2
// console.log(num)

// //

console.log(2)