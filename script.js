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
// const score0El = 0;
// const score1El = 0;
// const current0El = 0;
// const current1El = 0;


// Rolling the dice functionality
rollBtn.addEventListener('click', function () {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled one; if true switch players

    // Switch to the next player
})
