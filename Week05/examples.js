// // TIMERS
console.log('Before');
setTimeout(() => {
    console.log('inside set timeout');
}, 10); // ms
console.log('After');

console.log('Before');
let count = 0;
const id = setInterval(() => {
    if (count === 5) clearInterval(id);
    else console.log('repeat');

    count++;
});
console.log('After');



// // Callback, Promises, Async/Await
const foods = [
    {
        food: 'pizza',
        time: 3000
    },
    {
        food: 'spaghetti',
        time: 2000
    },
    {
        food: 'sandwich',
        time: 1000
    },
    {
        food: 'ice cream',
        time: null
    }
];

// CALLBACKS

// Creating a function that accepts a Callback

// Using the Callback

// Looping with Callbacks


// PROMISES

// Creating a function with a Promise

// Using a Promise

// Lopping with Promises

// Promise.all with Promises (Special Error Cases)


// // ASYNC/AWAIT

// Using a Promise function with async/await
