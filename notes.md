What the heck is JavaScript?

It is a programming language used mainly for web development.

Languages are for communication

- Questions, inquiries
- Commands

-----


What does it mean to treat something as a value

What does it mean to treat a FUNCTION as a value?


JS values:

- numbers: 10, 5.2, -4
- booleans: true, false
- strings
- undefined
- NaN
- Symbol
- null
- arrays
- OBJECTS!
- functions


JS values can be stored in _variables_

```js
const addTwo = function (number) {
	return number + 2
}
```


Difference between TELLING someone about an action
Actually performing that action.


let doThing = function () {
	console.log('haha!')
}


FUN FACT, functions are just values
You can 

- REASSIGN THEM if they are LET variables
- PASS THEM as arguments
    - as long as you don't invoke them


When a function RECEIVES ANOTHER FUNCTION, and then CALLS it: YOUVE GOT A CALLBACK!

Callbacks mainly solve:

- duplication
- injecting our code somewhere else
    - why would we do this?