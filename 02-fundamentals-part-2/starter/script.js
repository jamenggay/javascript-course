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
// function calcAverage(score1, score2, score3) {
//     const averageScore = (score1 + score2 + score3)/3;
//     return averageScore;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if(avgDolphins >= avgKoalas*2){
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//   }
//   else if(avgKoalas >= avgDolphins*2){
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//   }
//   else{
//     return `No team wins! Dolphins: ${avgKoalas}, Koals: ${avgDolphins})`
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreDolphins);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// // Array creation
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// // Alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //array starts counting at 0
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// //change the value per index
// friends[1] = "Jay";
// console.log(friends);

// const firstName = 'Jamaine';
// const jamaine = [firstName, "Tuazon", 2025-2004];
// console.log(jamaine);

// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// };

// const ages = [calcAge(2004), calcAge(1999), calcAge(1997)];
// console.log(ages);

// //Array Methods - Adding elements
// //add an item at the end of the list
// const newLength = friends.push("Steven");
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push("John");
// console.log(friends);

// //add the first item in a list
// friends.unshift("Maria");
// console.log(friends);

// //removing elements
// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);

// //find an element
// //Indexof
// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf("Maria"));
// console.log(friends.indexOf("John"));

// //includes()
// console.log(friends.includes("Michael"));
// console.log(friends.includes("Maria"));

// //array iteration - Loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// // Calculate average grade
// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(grade => {
//     if(grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students have passed`);


// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     let sum= 0
//   for(let i = 0; i < grades.length; i++){
//     sum += grades[i];
//   }
//   let average = sum/grades.length;
//   return average
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     let highestValue = grades[0];

//     for(let i=1; i<grades.length; i++){
//         if (grades[i] > highestValue){
//             highestValue = grades[i];
//         }
//     }

//     return highestValue;
  
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowestValue = grades[0];

//     for(let i=1; i<grades.length; i++){
//         if (grades[i] < lowestValue){
//             lowestValue = grades[i];
//         }
//     }

//     return lowestValue;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let passedCount = 0;
//     grades.forEach(grade => {
//         if(grade >= passingGrade) {
//             passedCount++;  
//         }
    
// });
//     return passedCount;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

//HOUR 3
//Problems with Arrays
// const jamaineArray = [
//     "Jamaine",
//     "Tuazon",
//     2025-2004,
//     "teacher",
//     ["Jorge", "GLyza", "Denese"],
// ];

// console.log(jamaineArray[0]);
// console.log(jamaineArray[1]);

// const jamaineObject = {
//     firstName: 'Jamaine',
//     lastName: 'Tuazon',
//     age: 2025-2004,
//     job: 'Student',
//     friends: ["Jorge", "Glyza", "Celesse"],
// };
// console.log(jamaineObject);

// //property access methods
// //dot notation
// console.log(jamaineObject.firstName);
// console.log(jamaineObject.lastName);
// console.log(jamaineObject.age);

// //bracket notation
// console.log(jamaineObject['firstName']);
// console.log(jamaineObject['lastName']);
// console.log(jamaineObject['age']);

// const nameKey = "Name";
// console.log(jamaineObject["first" + nameKey]);

// //modify existing properties
// jamaineObject.job = 'Intern';
// jamaineObject["age"] = 20;
// console.log(jamaineObject);

// // add new properties
// jamaineObject.location = "Philippines";
// jamaineObject["LinkedIn"]= "Jamaine Tuazon";
// jamaineObject.hasDriverLicense = true;
// console.log(jamaineObject);

// //when to use dot vs bracker notation
// const property = "job";
// console.log(jamaineObject[property]);

// //  Objects vs Arrays Decision Making
// //Arrays
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// //Objects
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// //objects can contain arrays, arryas can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], // Array inside object
//   address: {
//     // Object inside object
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]); 
// console.log(student.address.city);



/*
1. Property name is in a variable
2. Property name has spaces or special characters
3. Property name is computed/dynamic
Otherwise, prefer dot notation */


// const john = {
//     firstName: "John",
//     lastName: "Doe",
//     birthYear: 1995,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLocense: true,

//     calcAge: function (birthYear){
//         return 2025 - birthYear;
//     },
// };

// console.log(john.calcAge(2000));

// //'this' keyword
// const johnImproved = {
//     firstName: "John",
//     lastName: "Doe",
//     birthYear: 1995,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLicense: true,

//     calcAge: function (){
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function (){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${
//             this.job
//         }, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
//     },
// };
// console.log(johnImproved.calcAge());
// console.log(johnImproved.age);
// console.log(johnImproved.getSummary());

// //complex object with multiple methods (show real-workd pattern - 5 min)
// const bankAccount = {
//     owner: "Jamaine Tuazon",
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2,
//     pin: 1227,

//     //method to calculate balance
//     calcBalance: function () {
//         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//         return this.balance;
//     },

//     //method to add movement
//     deposit: function (amount) {
//         this.movements.push(amount);
//         this.calcBalance();
//     },
    
//     withdraw: function (amount) {
//         this.movements.push(-amount);
//         this.calcBalance();
//     },

//     //method for account summary\
//     getStatement: function (){
//         return `${this.owner}'s account balance: ${this.calcBalance()}`;
//     },
// }

// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());

////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({name, status: status});
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     const activeFriends = this.friends.filter(friend => friend.status === 'active');
//     return activeFriends.length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     const age = this.calcAge();
//     const activeFriends= this.getActiveFriends();
//     const status = this.active ? "active" : "away";

//     return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
//     Currently ${status}
//     ${activeFriends} active out of ${this.friends.length} total
//     Interest: ${this.interests.join(', ')}
//     Connected and sharing life's adventures`;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// //Query Selectors

// const message = document.querySelector(".message");
// //gets us the enture element object with all its properties
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1"); 
// console.log(heading);
// //query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);


// // getElementByID
// const buttOnByID = document.getElementById('btn');
// console.log(buttOnByID);
// console.log(buttOnByID === button);

// //querySelector
// const allParagraphs = document.querySelector("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

// // Modify element content

// const message = document.querySelector('.message');

// console.log(message.textContent);
// message.textContent = "Hello from JavaScript";
// console.log(message.textContent);

// //innerHTML
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// //innerText
// console.log(message.innerText);


// // Input Element values
// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text"; 

// // Changing element styles 
// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"; 
// heading.style.fontSize = "3rem";

// const button = document.querySelector("#btn");
// button.style.padding = "20px";
// button.style.bordedrRadius = "10px";


// // Event Listeners 

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// // addEventListener 
// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });


// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// //input events
// const display = document.querySelector(".message");
// input.addEventListener("input", function () {
//     const userText = input.value;
//     display.textContent = `You typed ${userText}`;
//     display.style.fontSize = `${userText.length + 10}px`;
// });

// // Keyboard events 
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; 
//   }
// });

// Code here