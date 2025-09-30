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

console.log(addDecl(7, 8)); 

// console.log(addExpr(7, 8)); 

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

const apiUrl = 'https://example.com';
console.log(apiUrl); 


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