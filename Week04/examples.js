// The last data type: Object (JavaScript non-primative datatype)
console.log(typeof new Object());
console.log(typeof new Array());
console.log(typeof new Function()); // because the ECMA Spec says if it's callable object then type is function


// Built In Prototypes
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Function.prototype));


// ES5 Classes (a look back at how class used to be written in JS)
// **changes to that prototype propagate to the new object, even after instantiation
function Dog(type, name) {
    this.type = type;
    this.name = name;
}
const puppy = new Dog('dalmatian', 'Snoopy');
Dog.prototype.speak = function(word) {
    console.log(`The ${this.type} says ${word}`);
};
puppy.speak('wroof');


// Dangers of Prototypes - DO NOT TOUCH built-in attributes/properties on the Prototype
// Array.prototype.pop = function() {
//     return 'not popping';
// };
// const arr = [1, 2, 3];
// console.log(arr.pop());


// ES6 CLASSES
// ES6 Classes only creates syntactical sugar to writing classes
// ES6 Classes are still prototype based
class Bear {
    constructor(type) {
        this.type = type;
    }

    speak(word) {
        console.log(`The ${this.type} bear says '${word}.'`);
    }
}
const bear = new Bear('panda');
bear.speak('hello');

class Polar extends Bear {
    constructor(type) {
        super(type);
    }

    speak(word) {
        super.speak(word);
        console.log(`The ${this.type} bear says it is too cold.`);
    }
}
const polar = new Polar('polar');
polar.speak('hi');


// ES6 CLASSES DEMO
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }

    // get syntax
    get area() {
        return this.height * this.width;
    }
}
const rectangle = new Polygon(10, 15);
console.log(rectangle.area); // when using the method with the get syntax the () are not needed


// CLASSES WITH INHERITANCE
class Square extends Polygon {
    constructor(side) {
        super(side, side);
    }

    getArea() {
        return super.getArea();
    }
}
const square = new Square(10);
console.log(square.getArea());


// ES6 CLASSES WITH DOT CHAINING
// By returning this on add/subtract each function is aware of the other and thus chaining can be used
class Calculator {
    constructor(number = 0) {
        this.number = number;
    }

    add(n) {
        this.number = this.number + n;
        return this;
    }

    subtract(n) {
        this.number = this.number - n;
        return this;
    }

    get total() {
        return this.number;
    }
}
const calc = new Calculator(); // start the calculator at 0
const total = calc
    .add(2)         // add 2:       0 + 2 = 2
    .add(3)         // add 3:       2 + 3 = 5
    .subtract(4)    // subtract 4:  5 - 4 = 1
    .subtract(5)    // subtract 5:  1 - 5 = -4
    .add(6)         // add 6:       -4 + 6 = 2
    .total;         // get the total with the get syntax
console.log(total);
