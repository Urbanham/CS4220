// STRINGS
const hello = 'Hello World it is me';

const csv = 'hi,hello,hey,yo,greetings'

console.log(splitting);


// WHILE LOOP
let number = 1;
while (number < 10) {
    console.log(number);
    number++;
}

// FOR LOOP
for (let number = 1; number < 10; number++) {
    console.log(number);
}

// FOR LOOP with STRINGS
const word = 'hello';



// // FUNCTIONS
// declaration notation
function addFn(a, b) {
    return a + b;
}
console.log(addFn(2, 3));

// Functions as Value

// Arrow Function



// // ARRAYS and METHODS
const planets = ['venus', 'earth', 'mars'];
console.log(planets);
console.log(planets.length);

// access
const accessPlant = planets[0];


// push

// pop

// unshift

// shift

// join

// includes



// // EXAMPLE ARRAY PROBLEM
// Write a function called sumArray.
// The sumArray function should accept an array as an argument and then
// return the sum all the numbers in that array of mixed primitives.
// sumArray(arr);  // 33
const arr = [5, 7, undefined, 2, 'a', 4, true, 'b', 'c', 7, false, 8];
const sumArray = arr => {};
const ex1 = sumArray(arr);
console.log(ex1);



// // EXAMPLE ARRAY and STRING PROBLEM
// Write a function called replaceVowles.
// This function that takes a string and an array of letters as arguments.
// This function replaces letters in the string with a dash (-) if they are contained in the array.
// The function return the newly created string.
const word = 'node.js';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const replaceVowles = (word, vowels) => {};
const ex2 = replaceVowles(word, vowels);
console.log(ex2);



// // OBJECTS
const transformer = {
    name: 'Optimus Prime',
    team: 'Autobots',
    colors: ['red', 'blue', 'silver']
};
console.log(transformer);

// Keys can be added using various notations

// Keys can be removed using the delete keyword



// OBJECTS CONTINUED
const company = {
    name: 'EA',
    type: 'Video Games',
    subsidiaries: ['BioWare', 'DICE', 'PopCap']
};

// accessing arrays in objects

// adding properties to object
const games = [
    {
        name: 'Battlefield V',
        release: 2018
    },
    {
        name: 'FIFA 19',
        release: 2018
    },
    {
        name: 'Apex Legends',
        release: 2019
    }
];



// EXAMPLE OBJECT PROBLEM
// Write a Function called convertToArray.
// The function takes an object as an argument and returns a 2D array.
// Each key, value pair in the object should be added to an array.
// The first item is the key and the second is the value.
// convertToArray(game_object)
// [
//     [ 'developer', 'Respawn' ],
//     [ 'producer', 'EA' ],
//     [ 'game', 'Star Wars Jedi: Fallen Order' ],
//     [ 'year', 2019 ]
// ]
const game_obj = {
    developer: 'Respawn',
    producer: 'EA',
    game: 'Star Wars Jedi: Fallen Order',
    year: 2019
};

const convertToArray = obj => {};
const game_array = convertToArray(game_obj);
console.log(game_array);
