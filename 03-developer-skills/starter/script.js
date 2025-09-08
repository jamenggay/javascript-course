// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return 'Hello ' + name + ', you are an adult';
//   } else {
//     return 'Hello ' + name + ', you are a minor';
//   }
// };

// console.log('Current messy code example:', messyExample('John', 25));
// console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// //Extension Installation Test
// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);

// //Testing Prettier Formatting
// const prettierTest = {
//   firstName: 'Sarah',
//   lastName: 'Johnson',
//   skills: ['JavaScript', 'React', 'Node.js'],
//   isActive: true,
// };
// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );

// //Live Server Setup and Testing

// // Test 1: Basic live reload
// let liveServerTest = "Initial message - change #1";
// console.log("Live Server test:", liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;
// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ["red", "blue", "green", "purple", "orange"][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// //Execise
// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log("Current time:", now);
//   return now;
// }

// showCurrentTime();

// //Code Snippets Testing
// console.log("Testing snippet functionality - cl + Tab created this!");

// function testSnippets() {
//   console.log("Function created with snippet - func + Tab!");
//   return "Snippets working perfectly!";
// }

// testSnippets();

// const snippetTest = (message) => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest("Snippets save so much typing time!");

// //Final verification
// //environment setup verification
// console.log("🎉 Professional Development Environment Complete!");
// console.log("✅ Prettier: Automatic code formatting");
// console.log("✅ Live Server: Automatic browser refresh");
// console.log("✅ Snippets: Fast code generation");
// console.log("✅ Extensions: Enhanced productivity");
// console.log("Ready for professional JavaScript development!");

// // Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

// console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// console.log(
//   "Key insight: Professional developers think systematically, not just code"
// );
// console.log("Goal: Transform from beginner to professional problem-solver");

// // The 4-Step Problem-Solving Framework

// /*
// STEP 1: UNDERSTAND THE PROBLEM
// - Ask the right questions until 100% clear
// - Key questions:
//   * What exactly needs to be accomplished?
//   * What are the inputs and expected outputs?
//   * What are the edge cases and constraints?
//   * Are there any special requirements?
// */

// /*
// STEP 2: DIVIDE AND CONQUER
// - Break big problem into small sub-problems
// - Strategy:
//   * Identify the main components
//   * Find dependencies between components
//   * Order sub-problems logically
//   * Ensure each piece is solvable independently
// */

// /*
// STEP 3: RESEARCH SOLUTIONS
// - Find answers for sub-problems you cannot solve
// - Best sources: MDN Documentation, Stack Overflow, Google
// - Research tips: Be specific, understand before implementing
// */

// /*
// STEP 4: IMPLEMENT AND TEST
// - Code the solution step by step with testing
// - Start simple, test each piece, combine gradually
// */
// console.log("4-Step Framework: Understand → Divide → Research → Implement");

// //Real-word problem
// //PROBLEM STATEMENT:
// /*Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]*/

// //implementation
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// //extended problem: two arrays
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log(amplitudeNew);

// console.log(
//   "Problem-solving framework applied successfully to extended challenge!"
// );

// ////////////////////////////////////
// // PROBLEM-SOLVING FRAMEWORK MASTERY

// /*
// FRAMEWORK SUCCESS ANALYSIS:
// - ✅ Solved complex problems systematically
// - ✅ Broke problems into manageable pieces
// - ✅ Applied research when needed
// - ✅ Implemented and tested successfully
// - ✅ Adapted to changing requirements efficiently
// */

// // console.log("🎯 Framework mastered - ready for independent problem solving!");

// console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

// console.log(
//   'Goal: Master research and debugging like a professional developer'
// );
// console.log(
//   'Strategic research builds lasting knowledge, not just quick fixes'
// );

// // Research challenge

// function demonstrateArrayMax(numbers) {
//   // Method 1
//   const method1 = Math.max(...numbers);
//   // Method 2
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }
//   // Method 3
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }
// //test
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log('Multiple approaches from research:', maxResults);

// //stack overflow
// function reverseStringMethods(str) {
//   // Method 1
//   const method1 = str.split('').reverse().join('');

//   // Method 2
//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3
//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// // Test
// const reverseResults = reverseStringMethods('hello');
// console.log('Stack Overflow research results:', reverseResults);

// //MDN Research
// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);
//   const multiple = array1.concat(array2, array3);

//   console.log('Original array1 unchanged:', array1);

//   return { simple, multiple };
// }

// const concatResults = demonstrateConcat();
// console.log('MDN documentation applied:', concatResults);

// //systematic debugging

// function calculateAverageScore(scores) {
//   let total = 0;
//   for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
//   }
//   return total / scores.length;
// }

// // Test function
// const testScores = [85, 92, 78, 96, 88];
// const buggyResult = calculateAverageScore(testScores);
// console.log('Buggy result:', buggyResult);

// function demonstrateConsoleDebugging(data) {
//   console.group('Debugging Session');

//   console.log('Input data:', data);

//   if (typeof data !== 'object') {
//     console.warn('Warning: Expected object, got', typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: 'John', age: 30, city: 'New York' };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger;

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value = ${currentNumber}`);

//     if (typeof currentNumber === 'number') {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log('Final results:', { sum, count, average });

//   return average;
// }

// //test
// const mixedNumbers = [10, 20, 'error', 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log('Debug session result:', debugResult);

// //comprehensive testing
// console.group('Debugging Verification Tests');

// //Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log('Normal case result:', normalResult);

// //edge case with invalid data
// const mixedScores = [85, 'invalid', 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log('Mixed data result:', mixedResult);

// //error case with invalid input
// const errorResult = calculateAverageScoreFixed('not an array');
// console.log('Error case result:', errorResult);

// //edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log('Empty array result:', emptyResult);

// console.groupEnd();

// console.log('Systematic debugging process successfully applied!');
// console.log(
//   'All bugs identified, isolated, investigated, fixed, and prevented'
// );

console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

console.log("Ready to tackle complex problems using systematic approaches");
console.log("Challenge: Build solutions that work under pressure");

//WEATHER FORECAST CHALLENGE
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr){
  let string = "";

  for (let i=0; 1<arr.length; i++){
    string += `${arr[i]}°C in ${i + 1} days`;
  }
  console.lolg("..." + string);
}

printForecast(data1);
printForecast(data2);

console.log("Weather forecast formatter working correctly!");


//Job interview simulation
function analyzeWorkWeek(dailyHours){
  const dayNames = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]

  let total = 0;
  let daysWorked = 0;
  let maxHours = dailyHours[0];
  let maxIndex = 0;

  for(let i=0; i<dailyHours; i++){
    const hours = dailyHours;

    total += hours;

    if(hours > 0){
      daysWorked ++;
  }
    if (hours > maxHours){
      maxHours = hours;
      maxIndex = i;
    }
  }

  const averageDailyHours = total /dailyHours.length;
  const isFullTimeWeek = total >= 35;

  return{
    totalHours: total,
    averageDailyHours: averageDailyHours,
    dayWithMostHours: {
      day: dayNames[maxIndex],
      index: maxIndex + 1, // 1-based
      hours: maxHours
    },
    daysWorked: daysWorked,
    isFullTimeWeek: isFullTimeWeek
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(`Work week analysis: ${analyzeWorkWeek(weeklyHours)}`);

console.log("Challenge completed under time pressure!");

//Debug and Enhance legacy Code fixed ver

function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }

  const { unit = "°C", separator = "...", includeIndex = true } = options;

  let result = "";

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  return separator + result.slice(0, -separator.length);
}

console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log(
  "Enhanced function (custom):",
  enhancedForecastFunction(testData, {
    unit: "°F",
    separator: " | ",
    includeIndex: true,
  })
);

console.log("Legacy code debugged, fixed, and enhanced systematically");

