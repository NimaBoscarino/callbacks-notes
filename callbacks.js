const sayHello = function () {
    console.log('hello')
}

const sayGoodbye = function () {
    console.log('goodbye')
}

const sayGreeting = function(greeting) {
    greeting()
}

sayGreeting(sayHello)
sayGreeting(sayGoodbye)