/*
    Run this file by using the command: node examples.js

*/

// --- Logging to the console and Comments ----------------------------------

console.log('hello');
console.log('hello' + ' ' + 'world');
console.log(1);
console.log(1 + 1);
console.log(false);
console.log(null);
console.log(undefined);

// the below will display an error because something was never defined
// console.log(something);

// // --- Declarations (let vs const) ---------------------------------------
const hello = 'hello';
// the below will display an error when executed because the variable hello is being re-assigned when it is a constant
// hello = 'hey'
console.log(hello);

let count = 1;
count++;
console.log(count);

let hey = 'hey';
hey = 'hello';
console.log(hey);

// // --- Setting Empty -----------------------------------------------------
let x;
console.log(x);
x = 1;
console.log(x);
x = null;
console.log(x);

// // --- Comparison Operators ----------------------------------------------
// Double Equals
console.log('2' == 2);
console.log(false == 0);
console.log(undefined == null);

// Triple Equals
console.log('2' === 2);
console.log(false === 0);
console.log(undefined == null);

console.log(2 > 1);
console.log(2 >= 2);
console.log(1 < 2);

// // --- Unary Operators ---------------------------------------------------
// typeof
console.log(typeof 'CS42200');
console.log(typeof 2020);

// ++ (increment)
let a = 7;
a++;
console.log(a);

// -- (decrement)
let b = 7;
b--;
b--;
console.log(b);

// // --- Logical Operators -------------------------------------------------
// &&
console.log(true && true); // true
console.log(true && false); // false

// ||
const value = 10;
console.log(value || 5);

// !
console.log(!true);
console.log(!false);

// // --- Conditional and Indentation ---------------------------------------
const number = 3;

if (true) {
    if (number === 1) {
        console.log('print number is 1');
    } else if (number === 2) {
        console.log('print number is 2');
    } else {
        console.log('print number is not 1 or 2');
    }
}
