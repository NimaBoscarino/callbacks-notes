# W1 D4

# Callbacks

## GIT REPO WITH CODE: https://github.com/NimaBoscarino/callbacks-notes

See the demos in this order:

1. functions-are-values
2. functions-2
3. callbacks
4. mystery-demo
5. goToThe
6. foreach
6. callbacksWithReturns

Hey everyone! Thanks for sitting through today's lecture 😊

Today we talked about using callbacks! The basic idea was that we can pass functions around without invoking them, so that "higher order functions" can use them as they please. We used this concept to make functions that are *generic*. Now... the notes that I have here are all the bits and pieces of code that we wrote during lecture. However, if you want some good solid definitions I really recommend taking a look at Joel's excellent notes: https://web.compass.lighthouselabs.ca/activities/185/lectures/1716

I also recommend KV's notes and examples: https://web.compass.lighthouselabs.ca/activities/185/lectures/1554

The main code that we wrote is in the `script.js` file and the `forEach.js` file. In the repo there are a couple other files with examples that you might find useful! Please message me if you have any questions or need anything cleared up.

Topics we covered:

- Functions are values
- What are anonymous functions?
- Function declaration vs. Function expression
- Function calling vs. passing (reference)
- HIGHER ORDER FUNCTIONS
- Implementing our own versions of some popular functions (e.g. forEach)

- BY THE WAY, I recommend if you have time over the course of bootcamp, make a habit of implementing your OWN versions of functions that ALREADY exist.

## Notes

Check the `notes.md` file in the github repo for the stuff that we wrote during lecture. The `script.js` file has almost ALL of the code that we ran. Note that the code is written up in _chunks_, where we rewrote the same thing over and over again in different ways. You can't just run the `script.js` file, but you can use sections of it!

## Callbacks in a Nutshell

- A function that's passed to another function in a parameter.
- That "receiving" function can call the other function.

## Fun challenge!!

- Try making functions that accept more than one callback!
  - What?? Yeah, that's a thing!

-----

As I promised, the notes that we wrote during the lecture are available below:

```
What the heck is JavaScript?

It is a programming language used mainly for web development.

Languages are for communication

- Questions, inquiries
- Commands

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

const addTwo = function (number) {
	return number + 2
}


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

```



Enjoy!

Cheers,

Nima