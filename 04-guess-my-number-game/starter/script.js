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

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    // messageEl.textContent = 'Your guess is correct!';
    numberEl.textContent = secretNumber;
    if (score > highscore){
        highscore = score;
        highscoreEl.textContent = highscore;
    }
    messageEl.textContent = "You have won!"
    guessEl.disabled = true;
    checkEl.disabled = true;
    
  } else if (guess > secretNumber) {
    console.log('Too high!');
    messageEl.textContent = 'Too high!';
    score--;
    scoreEl.textContent = score;
    if(score < 1){
        messageEl.textContent = "You have lost, press again!";
        guessEl.disabled = true;
        checkEl.disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    messageEl.textContent = 'Too low!';
    score--;
    scoreEl.textContent = score;
    if(score < 1){
        messageEl.textContent = "You have lost, press again!";
        guessEl.disabled = true;
        checkEl.disabled = true;
    }
  }
});

againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    //restart message display
    messageEl = 'Start guessing';
    //restart question mark
    numberEl.querySelector.textContent = "?";
    //restart score
    scoreEl.textContent = score;
    //restart guess input value
    guessEl.value = "";
    guessEl.disabled = false;
    checkEl.disabled = false;

});

