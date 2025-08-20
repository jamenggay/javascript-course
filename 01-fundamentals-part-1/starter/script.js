// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("SAAN MOO SIYA DALAHIN");

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName)

// let age = 30;
// age = 31; // we can change Let variables
// console.log(age);

// const birthYear = 1991; 
// //birthYear = 2004; //const canot change value
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job); 
// //modern js uses let and const, avoid using it

// age = 51;

// let lastName = "Doe";

// //do not do this

// console.log("=== DATA TYPES ===");

// //NUMBER 
// age =24;
// console.log(age);
// console.log(typeof age);

// //STRING
// let username = "mark";
// console.log(username);
// console.log(typeof username);

// //BOOLEAN
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// //UNDEFINED
// let year;
// console.log(year);
// console.log(typeof year);

// //DYNAMIC VARIABLE
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// //changed into string
// dynamicVariable = "Now I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// //CHANGED INTO STRING
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


//Basic Operators - Math operatos
// console.log("=== MATH OPERATORS ==="); 

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas /10, 2 ** 3);

// console.log("Math Operations");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponential:", 2**3 );

// //string concatenation
// //math with strings
// const firstName = "Jonas";
// const lastName = "Cruz";
// console.log(firstName + " " +  lastName)

// console.log( "Hello " + "World" + "!" );
// console.log("I am " + 25 + " years old" );

// //ASSIGNMENT OPERATORS
// //basic assignment
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x strats as:", x);

// //assignment shorcuts
// x += 10;
// console.log("After x  += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// //Increment and decrement
// x++;
// console.log("AFTER x++:", x);

// x--;
// x--;
// console.log("After x-- twice:", x);

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20); 
// console.log(15 < 10); 
// console.log(18 >= 18); 
// console.log(16 <= 15); 

// //storing comparison result
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// //Complex Comparisons
// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018); 


// console.log("=== OPERATOR PRECEDENCE ===");

// let z, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge #1 - BMI Calculator

// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

//calculte BMIs
let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn ** 2);

//create markHigherBMI variable

let markHigher = (markBMI > johnBMI);
console.log("BMI of Mark: ", markBMI);
console.log("BMI of John: ", johnBMI);
console.log("Is the BMI of Mark higher than John? " + markHigher);

//Test Daata 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

//calculte BMIs
markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

//create markHigherBMI variable

markHigher = (markBMI > johnBMI);
console.log("BMI of Mark: ", markBMI);
console.log("BMI of John: ", johnBMI);
console.log("Is the BMI of Mark higher than John? " + markHigher);


