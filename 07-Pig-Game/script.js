'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice === 1) {
    // Switch to next player
    currentScore = 0;
    currentScoreBtn.textContent = currentScore;
    switchPlayer();
  } else {
    // Add dice to current score
    currentScore += dice;
    currentScoreBtn.textContent = currentScore;
  }
});

// Current score variables
let currentScoreBtn = document.querySelector('.player--active .current-score');

// Total score variables
let currentTotalBtn;
let totalScore1 = 0;
let totalScore2 = 0;

// Players score
const players = document.querySelectorAll('.player');

function switchPlayer() {
  players.forEach(player => {
    player.classList.toggle('player--active');
    currentScoreBtn = document.querySelector('.player--active .current-score');
  });
}

function clearCurrentScore() {
  const activePlayer = document.querySelector('.player--active');
  activePlayer.querySelector('.current-score').textContent = 0;
  currentScore = 0;
}

// handle hold button
btnHold.addEventListener('click', () => {
  // update total score to active player
  const activePlayer = document.querySelector('.player--active');

  if (activePlayer.classList.contains('player--0')) {
    totalScore1 += currentScore;
    activePlayer.querySelector('.score').textContent = totalScore1;
  } else {
    totalScore2 += currentScore;
    activePlayer.querySelector('.score').textContent = totalScore2;
  }

  // clear current score
  clearCurrentScore();

  switchPlayer();
});

// handle new game button
btnNew.addEventListener('click', () => {
  // clear current score
  clearCurrentScore();

  // clear total score
  totalScore1 = 0;
  totalScore2 = 0;
  players.forEach(player => {
    player.querySelector('.score').textContent = 0;
  });

  // clear dice image
  diceEl.style.display = 'none';
});
