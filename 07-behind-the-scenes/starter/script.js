'use strict';

'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

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



console.log(varX); // undefined
// console.log(letX); // reference error in TDZ
// console.log(constX); // reference error in TDZ

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(7, 8)); 
function addDecl(a, b) {
    return a + b;
}

console.log(addDecl(7, 8)); 

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

const apiUrl = 'https://example.com';
console.log(apiUrl);