// The last data type: Object
console.log(typeof new Object());
console.log(typeof new Array());
console.log(typeof new Function()); // because the ECMASpec says if it's callable then type is function


// Built In Prototypes
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Function.prototype));


// ES5 Classes
// **changes to that prototype propagate to the new object, even after instantiation


// Dangers of Prototypes


// ES6 CLASSES SLIDES
class Bear {
    constructor(type) {
        this.type = type;
    }

    speak(word) {
        console.log(`The ${this.type} bear says '${word}'`);
    }
}

class Polar extends Bear {
    constructor(type) {
        super(type);
    }

    speak(word) {
        super.speak(word);
        console.log(`${this.type} it is too cold.`);
    }
}


// ES6 CLASSES DEMO


// CLASSES WITH INHERITANCE


// ES6 CLASSES WITH DOT CHAINING

