// console.log("Part 2 is now working");

// //functions - Declarations and Expressions
// console.log(`=== FUNCTIONS ===`);

// function logger(){
//     console.log("My name is Aiken");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2)
// console.log(juice1);

// //Functions expression
// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// }

// console.log(calcAge(2004));
// console.log(calcAge(1997));

// function introduce(firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce('Jamaine Grace', 'Tuazon', '20'));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
    
//     if(retirement > 0){
//         return `${firstName} retires in ${retirement} years`;
//     }
//     else{
//         return `${firstName} has already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "Aiken"));

// //global scope
// const globalVar = 'I am global';

// function testScope() {
//     const localVar = 'I am local';
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(localVar);
// console.log(globalVar);


// Coding Challenge #1
// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
    const averageScore = (score1 + score2 + score3)/3;
    return averageScore;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if(avgDolphins >= avgKoalas*2){
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
  }
  else if(avgKoalas >= avgDolphins*2){
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
  }
  else{
    return `No team wins! Dolphins: ${avgKoalas}, Koals: ${avgDolphins})`
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
