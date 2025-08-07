/*
let ->
const ->
var -> In the latest ECMAScript, it is not advisable to use var in variable declaration.
 */
let name = "Super Mario";
const age = 12;

console.log(`Name: ${name}`)
console.log(`Age: ${age}`)

// note: in variable declaration. It is better to use a description variable name to easily identify its purposes.

// other method using objects

const characterInformation = {
    name: "John Wick",
    age: 5,
}

console.log(`CharacterInformation: ${characterInformation.name}`)

