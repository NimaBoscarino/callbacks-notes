var array = [1, 2, 3]
for (var i = 0; i < array.length; i++) {
  var current = array[i]
  console.log(current)
}

// can be rewritten as:

function logEach (array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

// but if we want something more abstract

function forEach (array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i])
  }
}

logEach([1, 2, 3, 4])
forEach([1, 2, 3, 4], console.log)



// HIGHER ORDER FUNCTION
function goToKitchen(andWhileYoureThere) {
  // walk down the hall
  // take a left
  // keep walking
  // take a right
  console.log("Made it to the kitchen!")
  andWhileYoureThere()
}

function getWater() {
  // take another right
  // get cup
  //....
  // return with cup
  console.log("Mmm water")
}

function getCoffee() {
  // whole other ball game
  console.log("Insert coffee joke here")
}

goToKitchen(getWater)
goToKitchen(getCoffee)
