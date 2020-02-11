// TEMPLATE LITERALS / TEMPLATE STRINGS
const sentence = `half of 100 is ${100 / 2}`;
console.log(sentence);

// // DEFAULT VALUES
function multiply(a, b = 3) {
    return a * b;
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 15

// // ARRAY - CONCAT and SPREAD
const a1 = [1, 2, 3];
const a2 = [2, 3, 4];
const a3 = 'hello';

// // ARRAY - CONCAT versus SPREAD
const concat = a1.concat(a2);
console.log(concat);

const spread = [...a1, ...a2];
console.log(spread);

const test1 = [...a1, ...a3];
const test2 = a1.concat(a3);
const test3 = [...a1, a3];
console.log(test3);

// // HIGHER ORDER FUNCTIONS with console.log
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(n, i);
    }
}
repeat(5, console.log);

// // HIGHER ORDER FUNCTIONS with multiple functions
function multiplyBy(n, index) {
    const result = n * index;
    console.log(result);
}
repeat(5, multiplyBy);

// // ARRAY - FOREACH
const inventory = [1, 5, 7, 3, 2];
inventory.forEach(count => {
    console.log(`Unit: ${count}`);
});

// // ARRAY - FOREACH with index
const letters = ['a', 'z', 'b', 'y'];
letters.forEach((letter, index) => {
    console.log(`Letter: ${letter} at index position ${index}`);
});

// // ARRAY - FOREACH with Objects
const heros = [
    {
        name: ['Bruce', 'Wayne'],
        hero: 'Batman'
    },
    {
        name: ['Peter', 'Benjamin', 'Parker'],
        hero: 'SpiderMan'
    }
];
heros.forEach(hero => {
    const name = hero.name;
    hero.firstName = name[0];
    hero.lastName = name[name.length - 1];
    delete hero.name;
    console.log(hero);
});

// // // ARRAY - MAP
const squares = [2, 3, 4, 5];
const results = squares.map(n => {
    return n * n;
});
console.log(results);

// // // ARRAY MAP with OBJECTS
// // Use .map() on the heros2 array to return a new array
// // Inside this method remove the key 'name' and add two new keys 'firstName' and 'lastName'
const heros2 = [
    {
        name: ['Bruce', 'Wayne'],
        hero: 'Batman'
    },
    {
        name: ['Peter', 'Benjamin', 'Parker'],
        hero: 'SpiderMan'
    }
];
const newHeros = heros2.map(hero => {
    const name = hero.name;
    hero.firstName = name[0];
    hero.lastName = name[name.length - 1];
    delete hero.name;
    return hero;
});
console.log(newHeros);

// // // ARRAY - FILTER
const mixtypes = [5, 7, undefined, 2, 'a', 4, true, 'b', 'c', 7, false, 8];
const results2 = mixtypes.filter(element => {
    if (typeof element === 'number') {
        return element;
    }
});
console.log(results2);

// // // ARRAY FILTER with Objects
// // // Using .filter() on the cartoons array ensure that it filters all cartoons that are not of type dog.
// // // The return should be an array of objects.
const cartoons = [
    { cartoon: 'Snoopy', type: 'dog' },
    { cartoon: 'Garfield', type: 'cat' },
    { cartoon: 'Scooby Doo', type: 'dog' },
    { cartoon: 'Dafy Duck', type: 'duck' }
];
const cartoonResults = cartoons.filter(element => {
    if (element.type === 'dog') {
        return element;
    }
});
console.log(cartoonResults);

// // // ARRAY - REDUCE
const sumArray = [1, 2, 3, 4, 5];
const results3 = sumArray.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);
console.log(results3);

// // // ARRAY - REDUCE with Objects
// // Using .reduce() on the cartoonIds array return a new object
// // If the cartoon has an id then add the id as a key
// // This id key's value should be an object with only the key name
//  {
//      '123': { name: 'Snoopy' },
//      '456': { name: 'Garfield' },
//      '789': { name: 'Scooby Do' }
//  }
const cartoonIds = [
    { id: 123, name: 'Snoopy' },
    { id: 456, name: 'Garfield' },
    { id: 789, name: 'Scooby Do' },
    { id: null, name: 'Dafy Duck' }
];
const results4 = cartoonIds.reduce((accumulator, item) => {
    if (item.id) {
        accumulator[item.id] = { name: item.name };
    }
    return accumulator;
}, {});
console.log(results4);

// // // OBJECT DESTRUCTURING
const fido = {
    breed: 'border collie',
    colors: ['black', 'white'],
    type: 'dog'
};
const { type = 'cat', breed = 'Lab', colors } = fido;
console.log(breed);
console.log(colors);
console.log(type);

// // OBJECT DESTRUCTING and TEMPLATE LITERALS
// // // Write a function that prints the company details as template literals
// // // The function is able to print details in the format below.
// // // Where the numbers for subsidiaries and games is the count.
// Use Object Destructing
// Company: EA
// Type: Video Games
// Subsidiaries: 3
// Games: 0
const company = {
    name: 'EA',
    type: 'Video Games',
    subsidiaries: ['BioWare', 'DICE', 'PopCap']
};
const printDetails = company => {
    const { name, type, subsidiaries = [], games = [] } = company;

    console.log(`Company: ${name}`);
    console.log(`Type: ${type}`);
    console.log(`Subsidiaries: ${subsidiaries.length}`);
    console.log(`Games: ${games.length}`);
};
printDetails(company);
