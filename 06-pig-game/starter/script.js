// pig game development hour 1 - foundation & dice rolling
'use strict';

console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');


console.log('Pig Game project ready!');

// game state variables
let scores, currentScore, activePlayer, playing;

// element selections

// select player 1
const player0El = document.querySelector('.player--0');

// select player 2
const player1El = document.querySelector('.player--1');

// select score 0 element
const score0El = document.getElementById('score--0');

// select score 1 element
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

// game initialization function
const init = function () {
    //start with both players having 0 score
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // reset all the display
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
};

init();

btnRoll.addEventListener('click', function () {
    if (playing) {
        // dice logic
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
        }
    }
});