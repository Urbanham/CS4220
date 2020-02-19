// #### 1.  Write a function called removeLetters. (10 pts)
// - The removeLetters function accepts two string arguments.
// - The first argument is a phrase and the second is a letter.
// - This function removes letter in the phrase and returns the cleaned phrase.
console.log('\n ----- Question 1 -----');
const phrase = 'helxlo x worxxld';
const letter = 'x';

// For Loop Approach
const removeLettersV1 = (phrase, letter) => {
    let cleaned = '';

    for (let i = 0; i < phrase.length; i++) {
        const current = phrase[i];

        if (current !== letter) {
            cleaned = cleaned + current;
        }
    }

    return cleaned;
};
const hw1a = removeLettersV1(phrase, letter);
console.log(hw1a);

// Split/Join Approach
const removeLettersV2 = (phrase, letter) => {
    const cleaned = phrase.split(letter);
    return cleaned.join('');
};
const hw1b = removeLettersV2(phrase, letter);
console.log(hw1b);

// inefficient Approach O(n^2)
// const inefficientRemove = (phrase, letter) => {
//     let cleaned = '';
//     for (let i = 0; i < phrase.length; i++) {
//         cleaned = phrase.split(letter); // O(n)
//         cleaned = cleaned.join(''); // O(n)
//     }

//     return cleaned;
// };

// #### 2.  Write a function called flattenArray. (10 pts)
// - The flattenArray function accepts a nested array as an argument.
// - This function will turn the nested array of arrays and return the flat array.
// - **DO NOT** Array.flat().
console.log('\n ----- Question 2 -----');
const nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];
const flattenArray = arr => {
    const flatten = [];

    for (let i = 0; i < arr.length; i++) {
        const subarr = arr[i];

        for (let j = 0; j < subarr.length; j++) {
            const n = subarr[j];
            flatten.push(n);
        }
    }

    return flatten;
};
const hw2 = flattenArray(nested);
console.log(hw2);

// #### 3.  Write a function called adjustName. (10 pts)
// - The adjustName function accepts an object as an argument.
// - This function will remove the key 'name' and add two new keys 'firstName' and 'lastName' and return the object.
// - It will set the values of 'firstName' and 'lastName' correctly based on the values in the 'name' array.
// - You may assume that the first item in the 'name' array is the first name and that the last item is the last name.
// - Consider some people have multiple middle names so the last item in the array **MUST** be accessed dynamically.
// - **DO NOT** use iterations.
console.log('\n ----- Question 3 -----');
const dc = {
    name: ['Bruce', 'Wayne'],
    hero: 'Batman'
};

const marvel = {
    name: ['Peter', 'Benjamin', 'Parker'],
    hero: 'SpiderMan'
};

// O(1) Solution
const adjustName = obj => {
    const first = obj.name[0];
    const last = obj.name[obj.name.length - 1];

    obj.firstName = first;
    obj.lastName = last;
    delete obj.name;

    return obj;
};

const hw3DC = adjustName(dc);
const hw3Marvel = adjustName(marvel);
console.log(hw3DC);
console.log(hw3Marvel);


const marvel2 = {
    hero: 'Mockingbird',
    name: ['Barbara', 'Bobbi', 'Morse', 'Barton']
};
// O(n) Solution because of .shift()
const inefficientAdjustName = obj => {
    const first = obj.name.shift(); // O(n)
    const last = obj.name.pop(); // O(1)

    obj.firstName = first;
    obj.lastName = last;
    delete obj.name;

    return obj;
};

// HOMEWORK
// #### 4. Write a function called countingLetters. (15 pts)
// - The countingLetters function accepts a string argument.
// - The return should be an object with the only keys that are lowercase letters and the count as the value.
// - It should not count spaces or punctuation.
// - There should not be duplicate letter counts for capital letter versus lowercase letters (T and t) should just be t.
console.log('\n ----- Question 4 -----');
const quote =
    'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];

const countingLetters = (quote, punctuations) => {
    const counts = {};

    for (let i = 0; i < quote.length; i++) {
        const character = quote[i];

        if (!punctuations.includes(character)) {
            const lowerCharacter = character.toLowerCase();

            if (counts[lowerCharacter]) {
                counts[lowerCharacter] = counts[lowerCharacter] + 1;
            } else {
                counts[lowerCharacter] = 1;
                // after the first iteration: { t: 1 }
            }
        }
    }

    return counts;
};
const hw4 = countingLetters(quote, punctuations);
console.log(hw4);

// #### 5.Write a Function called compareArrays. (15 pts)
// - The function takes two arrays as arguments.
// - The function compares the contents of each array to determine if they are equal and return a boolean.
// - The array is considered equal if the values and types are equal at the same index position
// - **DO NOT** us JSON.stringify()
console.log('\n ----- Question 5 -----');
const a1 = [1, 2, 3];
const a2 = [1, 2, 3];

const b1 = [1, 2, 3];
const b2 = ['1', '2', '3'];

const c1 = [1, 2, 3, 4];
const c2 = [1, 2, 3];

const d1 = [1, 2, 3];
const d2 = [3, 2, 1];

const compareArray = (arr1, arr2) => {
    // check the length before iterating
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];

        // strict equals checks both value and type
        if (element1 !== element2) {
            return false;
        }
    }

    return true;
};
const hw5a = compareArray(a1, a2);
const hw5b = compareArray(b1, b2);
const hw5c = compareArray(c1, c2);
const hw5d = compareArray(d1, d2);
console.log(hw5a);
console.log(hw5b);
console.log(hw5c);
console.log(hw5d);

// #### 6.Write a Function called convertToObject. (20 pts)
// - The function takes a 2D array as an argument and returns an object.
// - Each nested array contains the key, value pair that should be added to the object.
// - The first item in the nested array always the key and the second is the value.
console.log('\n ----- Question 6 -----');
const game_array = [
    ['developer', 'Respawn'],
    ['producer', 'EA'],
    ['game', 'Star Wars Jedi: Fallen Order'],
    ['year', 2019]
];

const convertToObject = gameArr => {
    const gameObj = {};

    for (let i = 0; i < gameArr.length; i++) {
        const set = gameArr[i];

        const key = set[0];
        const value = set[1];

        gameObj[key] = value;
        // after first iteration: { developer: 'Respawn' }
    }

    return gameObj;
};
const hw6 = convertToObject(game_array);
console.log(hw6);


// #### 7. Write a function called buildObject. (20 pts)
// - The function takes a 2D array of objects and returns a nested object with a start key of 1.
// - Each item in the nested array contains an object with the key 'property' and the value 'assign'
// - These property and assigns are used to build key/value pairs in the return object.
console.log('\n ----- Question 7 -----');
const products = [
    [
        {
            property: 'product',
            assign: 'PS4'
        },
        {
            property: 'company',
            assign: 'Sony'
        },
        {
            property: 'release',
            assign: '2013'
        }
    ],
    [
        {
            property: 'product',
            assign: 'Xbox One X'
        },
        {
            property: 'company',
            assign: 'Microsoft'
        },
        {
            property: 'release',
            assign: '2016'
        }
    ],
    [
        {
            property: 'product',
            assign: 'Switch'
        },
        {
            property: 'company',
            assign: 'Nintendo'
        },
        {
            property: 'release',
            assign: '2017'
        }
    ]
];

const buildObject = products => {
    const productsObj = {};

    for (let i = 0; i < products.length; i++) {
        const nested = products[i];

        productsObj[i + 1] = {};
        // first iteration: { '1': {} }

        for (let j = 0; j < nested.length; j++) {
            const obj = nested[j];
            productsObj[i + 1][obj.property] = obj.assign;
            // after first iteration: { '1': { product: 'PS4' } }
        }
    }

    return productsObj;
};
const hw7 = buildObject(products);
console.log(hw7);
