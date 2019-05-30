var animal = 'dog';
console.log(animal)

animal = 'cat';
console.log(animal)

function hello() {
	console.log('hello!')
}

function goodBye() {
	console.log('goodbye!')
}

var someFunction = hello // without the parens

// refer to the hello function THROUGH "someFunction"
someFunction() 

someFunction = goodBye

// now "someFunction" runs goodBye
someFunction()


func = function(name) {
	return 'Hello ' + name
}

var greeting = func('Clarice')
console.log(greeting)


var goToTheCobbler = function () {
	console.log("I'm at the cobbler 🥾")
}

var goToTheLibrary = function () {
	console.log("I'm at the library 📚")
}


var thingsStevenDoes = function () {
	console.log("I'm at the store")
	// do that day's special activity
	todaysActivity()
	console.log("I'm studying code 💻")
	console.log("I'm having a nice dinner")
}


var todaysActivity = goToTheLibrary
thingsStevenDoes()

todaysActivity = goToTheCobbler
thingsStevenDoes()

// my wish!

// Higher Order Function
var thingsStevenDoes = function (cb) {
	console.log("I'm at the store")
	// do that day's special activity
	cb()
	console.log("I'm studying code 💻")
	console.log("I'm having a nice dinner")
}



thingsStevenDoes(goToTheLibrary)
thingsStevenDoes(goToTheCobbler)


var pickRandomActivity = function () {
	return goToTheCobbler // As an exercise
	// HINT: You'll have to have an array of functions to pick from
}

var theRandomActivity = pickRandomActivity()
thingsStevenDoes(theRandomActivity)




var functionA = function (extraCode) {
	extraCode()
}

var functionB = function () {
	// extra stuff
}

var functionC = function () {
	// extra stuff
}

functionA(functionB)
functionA(functionC)

var peopleILike = ['Bradlina', 'Janistoffer', 'Danielione'];

// go through each person, and say hello to them


var peopleIHate = ['Jackerinna', 'Philobranchetta', 'Jimothino'];

// go through each person I hate, and say "oh, hi there" to them

goThroughEach(peopleILike, sayHello)

goThroughEach(peopleIHate, sayOhHiThere)






















