// Event Loop YouTube
// https://youtu.be/8aGhZQkoFbQ

// // TIMERS
console.log('Before');
setTimeout(() => {
    console.log('inside set timeout');
}, 2000); // ms
console.log('After');

console.log('Before');
let count = 0;
const id = setInterval(() => {
    if (count === 5) {
        clearInterval(id);
    } else {
        console.log('repeat');
    }

    count++;
}, 1000);
console.log('After');

// // Callback, Promises, Async/Await
const foods = [
    {
        name: 'pizza',
        time: 3000
    },
    {
        name: 'spaghetti',
        time: 2000
    },
    {
        name: 'sandwich',
        time: 1000
    },
    {
        name: 'ice cream',
        time: null
    }
];

// CALLBACKS
// Creating a function that accepts a Callback
const cookingWithCallbacks = (food, callback) => {
    const { name, time = 0 } = food;
    setTimeout(function() {
        const error = !time ? `cannot cook ${name}` : null;
        callback(error, { success: `${name} is ready.` });
    }, time);
};

// Using the Callback
cookingWithCallbacks({ name: 'popcorn', time: 2000 }, (err, result) => {
    console.log(result);
});

// Looping with Callbacks
const makeFoodCallbacks = foods => {
    foods.forEach(food => {
        cookingWithCallbacks(food, (err, result) => {
            if (!err) {
                console.log(result);
            } else {
                console.log(err);
            }
        });
    });
};
//makeFoodCallbacks(foods);

// PROMISES
// Creating a function with a Promise
const cookingWithPromises = food => {
    const { name, time = 0 } = food;
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const error = !time ? `cannot cook ${name}` : null;

            if (error) {
                reject({ error });
            } else {
                resolve({ success: `${name} is ready ` });
            }
        }, time);
    });
};

// Using a Promise
cookingWithPromises({ name: 'popcorn', time: 2000 }).then(result => {
    console.log(result);
});

// Lopping with Promises
const makeFoodPromises = foods => {
    foods.forEach(food => {
        cookingWithPromises(food)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    });
};
// makeFoodPromises(foods);

// Promise.all with Promises (Special Error Cases)
const makeFoodPromisesAll = foods => {
    const promises = foods.map(food => {
        return cookingWithPromises(food).catch(error => {
            return error;
        });
    });

    // Promise.all iterate promises in order and stops at the first reject
    Promise.all(promises).then(results => {
        console.log(results);
    });
};
// makeFoodPromisesAll(foods);

// // ASYNC/AWAIT
// Using a Promise function with async/await
const makeFoodsAsync = foods => {
    foods.forEach(async food => {
        try {
            const cooked = await cookingWithPromises(food);
            console.log(cooked);
        } catch (error) {
            console.log(error);
        }
    });
};
makeFoodsAsync(foods);
