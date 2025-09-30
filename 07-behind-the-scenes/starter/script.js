'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');



// global execution context
console.log('Starting program');

function alpha() {
    console.log('alpha:start');
    beta();
    console.log('alpha:end');
}

function beta() {
    console.log('beta');
}

alpha();

// global scope
const globalVar = 'I am global';
function anyFunction() {
    console.log(globalVar);
}

// function scope
function myFunction() {
    const functionVar = 'I am local to myFunction';
    console,log(functionVar); 
}

// block scope
if (true) {
    let blockVar = 'I am block-scoped';
    const alsoBlockVar = 'Me too!';
    var notBlockScoped = 'I leak out of the block'; 
}



console.log(varX); 
// console.log(letX); 
// console.log(constX); 

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(7, 8)); 

function addDecl(a, b) {
    return a + b;
}

console.log(addDecl(7, 8)); // like this too


// console.log(addExpr(7, 8)); 

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

const apiUrl = 'https://example.com';
console.log(apiUrl); 
// behind the scenes development hour 2 - this keyword & arrow functions

console.log('=== BEHIND THE SCENES: THIS KEYWORD & ARROW FUNCTIONS ===');

const person = {
    name: 'Hyewon',
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    },
};

person.greet();

// borrowing method or greet function
const anotherPerson = { name: 'Daniela' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

// detached function
const greetFunction = person.greet;
// greetFunction(); 

// arrow functions
const obj = {
    name: 'Object',
    regularMethod: function() {
        console.log('Regular:', this.name);
    },

    arrowMethod: () => {
        console.log('Arrow:', this.name);
    },
};

obj.regularMethod(); 
obj.arrowMethod(); 


const timer = {
    name: 'Timer',

    // old approach with self = this
    start: function() {
        console.log(`${this.name} starting...`);
        const self = this; 

        setTimeout(function() {
            console.log(`${self.name} finished`);
        }, 1000);
    },

    // modern approach with arrow function
    startModern: function() {
        console.log(`${this.name} starting modern...`);

        setTimeout(() => {
            console.log(`${this.name} finished modern`);
        }, 1500);
    },
};

timer.start();
timer.startModern();


// arguments keywords & advanced scenarios
const functionTypes = {
    regularFunction: function() {
        console.log('Arguments length:', arguments.length);
        console.log('First argument:', arguments[0]);
    },

    arrowFunction: () => {
        // console.log(arguments); 
        console.log('Arrow function called');
    },

    modernFunction: (...args) => {
        console.log('Args length:', args.length);
        console.log('First arg:', args[0]);
    },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test'); 
functionTypes.modernFunction('modern', 'approach');


console.log('=== BEHIND THE SCENES: PRIMITIVES VS OBJECTS, COPYING & STRICT MODE ===');

// how primitive types work

let age = 20;
let oldAge = age; 
age = 21;
console.log('age', age);
console.log('oldAge', oldAge);

// objects in heap
const me = {name: 'Aisle', age: 20,};
const friend = me; 

friend.name = 'Chaye';
friend.age = 20;

console.log('me:', me);
console.log('friend:', friend);

// shallow copy vs deep copy 
const original = {
    name: 'Minho',
    age: 33,
    hobbies: ['running', 'singing'],
};

// spread operator shallow copy
const shallowCopy = { ...original };
shallowCopy.name = 'Seungyeon';

console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

shallowCopy.hobbies.push('walking'); 
console.log(original.hobbies);
console.log(shallowCopy.hobbies);


// deep copy
const deepOriginal = {
    name: 'Maraiah',
    age: 24,
    address: { city: 'Cebu', country: 'Philippines'},
    hobbies: ['traveling', 'running'],
};

// modern deep copy with structuredClone
const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = 'Taguig';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Queen';

console.log(deepOriginal);
console.log(deepCopy);