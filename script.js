'use strict'

// Selecting Elements
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0El = document.getElementById('score0El');
const score1El = document.getElementById('score1El');
const current0El = document.querySelector('.current-0El');
const current1El = document.querySelector('.current-1El');
const diceEl = document.querySelector('.dice')
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// Starting Values
// let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

// Switching Players
const switchPlayer = function () {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
};

// Rolling the dice functionality
rollBtn.addEventListener('click', function () {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled one; if true switch players
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
        // Switch to the next player    
        switchPlayer();
    }


})
