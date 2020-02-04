// STRINGS
const hello = 'Hello World it is me';
// console.log(hello.toLowerCase());
// console.log(hello.toUpperCase());
// console.log(hello.includes('me'));

const csv = 'hi,hello,hey,yo,greetings';
const splitting = csv.split(',')
// console.log(splitting);


// // WHILE LOOP
// let number = 1;
// while (number < 10) {
//     console.log(number);
//     number++;
// }

// // FOR LOOP
// for (let number = 1; number < 10; number++) {
//     console.log(number);
// }

// // FOR LOOP with STRINGS
// const word = 'hello';
// for (let i = 0; i < word.length; i++) {
//     const letter = word[i]
//     console.log(letter)
// }



// // // FUNCTIONS
// // declaration notation
function addFn(a, b) {
    return a + b;
}
// console.log(addFn(5, 2));

// // Functions as Value
const addAsValue = function(a, b) {
    return a + b
}
// console.log(addAsValue(2, 3))

// // Arrow Function
const addArrow = (a, b) => a + b;
// console.log(addArrow(2, 3))

// // // ARRAYS and METHODS
const planets = ['venus', 'earth', 'mars'];
// console.log(planets);
// console.log(planets.length);

// // access
const accessPlant = planets[1];
// console.log(accessPlant)

// // push
planets.push('jupitar')
// console.log(planets.length)
planets.push('saturn', 'uranus', 'neptune', 'pluto')
// console.log(planets.length)

// // pop
const last = planets.pop()
// console.log(last)
// console.log(planets)

// // unshift
planets.unshift('mercury')
// console.log(planets)

// // shift
const first = planets.shift()
// console.log(first)
// console.log(planets)

// // join
const joinPlanets = planets.join('|');
// console.log(joinPlanets)

// // includes
const hasEarth = planets.includes('Earth')
// console.log(hasEarth)


// // // EXAMPLE ARRAY PROBLEM
// // Write a function called sumArray.
// // The sumArray function should accept an array as an argument and then
// // return the sum all the numbers in that array of mixed primitives.
// // sumArray(arr);  // 33
const arr = [5, 7, undefined, 2, 'a', 4, true, 'b', 'c', 7, false, 8];
const sumArray = sumArr => {
    let sum = 0;
    for (let i = 0; i < sumArr.length; i++) {
        const element = sumArr[i];
        if (typeof element === 'number') {
            sum = sum + element;
        }
    }

    return sum
};
const ex1 = sumArray(arr);
// console.log(ex1);



// // // EXAMPLE ARRAY and STRING PROBLEM
// // Write a function called replaceVowels.
// // This function that takes a string and an array of letters as arguments.
// // This function replaces letters in the string with a dash (-) if they are contained in the array.
// // The function return the newly created string.
const nodejs = 'node.js';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const replaceVowels = (word, vowels) => {
    let replaced = '';
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (vowels.includes(letter)) {
            replaced = replaced + '-';
        } else {
            replaced = replaced + letter
        }
    }

    return replaced;
};
const ex2 = replaceVowels(nodejs, vowels);
// console.log(ex2);



// // // OBJECTS
const transformer = {
    name: 'Optimus Prime',
    team: 'Autobots',
    colors: ['red', 'blue', 'silver']
};

// // Keys can be added using various notations
transformer.homeWorld = 'Cybertron'

const type = 'vehicle'
transformer[type] = 'truck'

// // Keys can be removed using the delete keyword
delete transformer.vehicle
//console.log(transformer);


// // OBJECTS CONTINUED
const company = {
    name: 'EA',
    type: 'Video Games',
    subsidiaries: ['BioWare', 'DICE', 'PopCap']
};
company.subsidiaries.push('Respawn')
console.log(company)
// // accessing arrays in objects

// // adding properties to object
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
company.games = games;
console.log(company)



// // EXAMPLE OBJECT PROBLEM
// // Write a Function called convertToArray.
// // The function takes an object as an argument and returns a 2D array.
// // Each key, value pair in the object should be added to an array.
// // The first item is the key and the second is the value.
// // convertToArray(game_object)
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

const convertToArray = obj => {
    const game_array = []
    for (const key in obj) {
        const pairing = [];
        pairing.push(key)
        pairing.push(obj[key])
        game_array.push(pairing)
    }

    return game_array;
};
const game_array = convertToArray(game_obj);
console.log(game_array);
