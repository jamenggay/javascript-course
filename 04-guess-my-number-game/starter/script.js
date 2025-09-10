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
const checkEl = document.querySelector('.check');
const againBtn = document.querySelector('.again');

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

  //check input if our guess input value is empty
  if (!guess) {
    messageEl.textContent = 'Please input a number!';
    return;
  }
  if (guess < 1 || guess > 20) {
    messageEl.textContent = 'The number must be between 1 and 20!!!';
    return;
  }

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    // messageEl.textContent = 'Your guess is correct!';
    numberEl.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    messageEl.textContent = 'You have won!';
    numberEl.textContent = secretNumber;
    guessEl.disabled = true;
    checkEl.disabled = true;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    console.log('Too high!');
    messageEl.textContent = 'Too high!';
    score--;
    scoreEl.textContent = score;
    if (score < 1) {
      messageEl.textContent = 'You have lost, press again!';
      numberEl.textContent = secretNumber;
      guessEl.disabled = true;
      checkEl.disabled = true;
      document.body.style.backgroundColor = 'red';
      messageEl.textContent = 'Game Over!!';
      guessEl.value = ' ';
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    messageEl.textContent = 'Too low!';
    score--;
    scoreEl.textContent = score;
    if (score < 1) {
      messageEl.textContent = 'You have lost, press again!';
      numberEl.textContent = secretNumber;
      guessEl.disabled = true;
      checkEl.disabled = true;
      document.body.style.backgroundColor = 'red';
      messageEl.textContent = 'Game Over!!';
      guessEl.value = ' ';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number: ', secretNumber);
  //restart message display
  messageEl.textContent = 'Start guessing';
  //restart question mark
  numberEl.textContent = '?';
  //restart score
  scoreEl.textContent = score;
  //restart guess input value
  guessEl.value = ' ';
  guessEl.disabled = false;
  checkEl.disabled = false;
  document.body.style.backgroundColor = '#222';
});
