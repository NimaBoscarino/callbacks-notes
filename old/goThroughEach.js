var peopleILike = ['Bradlina', 'Janistoffer', 'Danielione'];
// go through each person, and say hello to them
var peopleIHate = ['Jackerinna', 'Philobranchetta', 'Jimothino'];
// go through each person I hate, and say "oh, hi there" to them

var goThroughEach = function (arrayOfPeople, thingToDo) {
	for (var i = 0; i < arrayOfPeople.length; i++) {
		// console.log('person', arrayOfPeople[i])
		thingToDo(arrayOfPeople[i])
	}
}

var sayHello = function (name) {
	console.log("Hello " + name + " !")
}

var sayOhHiThere = function (name) {
	console.log("Oh... hi there " + name + " 😒")
}

goThroughEach(peopleILike, sayHello)
goThroughEach(peopleIHate, sayOhHiThere)
