"use strict"; //treat all js code as newer version

// alert("hello")
// alert(3+3) // cant use with this syntax

let name="Prakahr"

/* string 
* number
* boolean (true/false)
null
undefined
symbol-> used for uniqueness


object

// */
console.log(typeof undefined);
console.log(typeof null);


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
