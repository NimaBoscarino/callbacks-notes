var names = ['Simon', 'Pierre', 'Brenda', 'Hamid']

function forEveryPerson(callback) {
  for (var i = 0; i < names.length; i++) {
    var name = names[i] // e.g. Simon
  
    callback(name)

  }
}

function sayHello(name) {
  console.log("Hey " + name + "!")
}

forEveryPerson(sayHello)

// inline anonymous function as a callback

forEveryPerson(function (name) {
	console.log('Hey ' + name + ', how you doing?')
})

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    var thing = array[i] // e.g. Simon
  
    callback(thing)
  }
}

forEach([1, 2, 3], function (number) {
  console.log(number + 5)
})