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

// // Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// //calculte BMIs
// let markBMI = massMark / (heightMark ** 2);
// let johnBMI = massJohn / (heightJohn ** 2);

// //create markHigherBMI variable

// let markHigher = (markBMI > johnBMI);
// console.log("BMI of Mark: ", markBMI);
// console.log("BMI of John: ", johnBMI);
// console.log("Is the BMI of Mark higher than John? " + markHigher);

// //Test Daata 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// //calculte BMIs
// markBMI = massMark / (heightMark ** 2);
// johnBMI = massJohn / (heightJohn ** 2);

// //create markHigherBMI variable

// markHigher = (markBMI > johnBMI);
// console.log("BMI of Mark: ", markBMI);
// console.log("BMI of John: ", johnBMI);
// console.log("Is the BMI of Mark higher than John? " + markHigher);

// old way: string concatenation
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// //the modern way - ES6 Template Literals

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equal five`);
// console.log(`Comparisons too: ${5 > 3}`);
// //alsi use for any string
// console.log(`Just a regular string....`);

// //multiline strings
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// // new way natural
// console.log(`String
// multiple
// lines`);

// //if else statement
// const age = 15;
// if (age >= 18 ) {
//   console.log(`Sarah can start a driving license`);
// }
// else{
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// //Truthy & Falsy Values
// console.log(Boolean(0));//falsy values
// console.log(Boolean(undefined));//falsy values
// console.log(Boolean("Jonas"));//truthy values
// console.log(Boolean({}));//truthy values
// console.log(Boolean(""));//falsy values


//Coding Challenge #2
// Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// //calculte BMIs
// let markBMI = massMark / (heightMark ** 2);
// let johnBMI = massJohn / (heightJohn ** 2);

// //create markHigherBMI variable

// if(markBMI > johnBMI){
//   console.log(`Mark’s BMI (${markBMI}) is higher than John’s (${johnBMI})`)
// }
// else{
//   console.log(`John’s BMI (${johnBMI}) is higher than Mark’s (${markBMI})`)
// }

// Type Conversion and Coercion
//manual type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// //automatic type coercion
// console.log('I am ' + 20 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' * '2');

// let n = '1' + 1;
// console.log(n);

// n = n -1;
// console.log(n);

// type conversion = explicit/manual (recommended)
// type coercion = implicit/automatic

// Equality - Strict
// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult (loose)');

// console.log('18' === 18);
// console.log('18' == 18); //coercion happens
// console.log(18 === 18);

//== checks only the values
//=== checks the value and the type

//why == can be dangerous
// console.log('0' == 0);
// console.log(0 == false);
// console.log('0' == false);
// console.log(null == undefined); //special case

// console.log('' == 0);
// console.log('    ' == 0);

// //best practice
// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23){
//   console.log("Coll! 23 is an amazing number");
// }
// else if (favourite == 23){
// console.log("23 is also a cool number");
// }
// else if (favourite === 9){
// console.log("9 is also a cool number");
// }
// else{
//   console.log('Number is not 23 or 7 or 9');
// }

// if(favourite !== 23) console.log('Why not 23?');

//Logical operators

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(`AND OPERATOR: ${hasDriverLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriverLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriverLicense}`);

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && !isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log(`Aiken is able to drive`);
// } else{
//   console.log(`Someone else should drive`);
// }

// //more complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 19; // Try different values
// const hasID = true; // Try different values
// const isVIP = false; // Try different values

// // Your logic here:
// if ((age >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }


// //The Conditional (Ternary) Operator

// const age = 23;

// //basic ternary:  condition ? valueiftrue : valueiffalse

// const drink = age >= 18 ? `wine` : `water`;
// console.log(drink);

// //if else statement
// let drink2;
// if (age >= 18) {
//   drink2 = `wine`;
// }else{
//   drink2 = `water`;
// }
// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

//Final Challenge: Tip Caalculator

// Coding Challenge #4

const bill = 430;// Test with 275, 40, and 430

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"




