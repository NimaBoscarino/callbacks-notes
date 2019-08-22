// let food = 'potato'

// food = 'bagel'



let sayHello = function () {
	console.log('hello!')
}

let sayGoodbye = function () {
	console.log('goodbye!')
}

let greeting = sayHello

greeting() // What does this do? 

greeting = sayGoodbye

greeting() // what does it do now??

const sayHello = function () {
    console.log('hello')
}

const sayBye = function () {
    console.log('bye')
}

let arrayOfFunctions = [sayHello, sayBye] // stretch example 

