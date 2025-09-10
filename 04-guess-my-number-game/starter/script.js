'use strict';

// DOM Element Selection
const messageEl = document.querySelector('.message');
// console.log(messageEl);
// console.log(messageEl.textContent);
// messageEl.textContent = "Hello from JavaScript";

const scoreEl = document.querySelector('.score');
// console.log('Score element: ', scoreEl);
// scoreEl.textContent =  '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 17;
// console.log(numberEl);

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 150;

const guessEl = document.querySelector('.guess');
// guessEl.value = 15;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//track the current score
let score = 20;
let highscore = 0;

//change the value of score UI dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialiazed');

//basic game logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button is clicked');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed: ', guess);

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    messageEl.textContent = 'Your guess is correct!';
    numberEl.textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    messageEl.textContent = 'Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    messageEl.textContent = 'Too low!';
  }
});
