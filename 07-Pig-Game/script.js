'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');

const diceImg = document.querySelector('.dice');
let currentScoreBtn = document.querySelector('.player--active .current-score');
let currentTotalBtn;
const players = document.querySelectorAll('.player');
// const activePlayer = document.querySelector('.player--active');
const currScorePlayer1 = document.getElementById('current--0');
const currScorePlayer2 = document.getElementById('current--1');
const totalScorePlayer1 = document.getElementById('score--0');
const totalScorePlayer2 = document.getElementById('score--1');

const dices = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

let currentScore = 0;
let totalScore1 = 0;
let totalScore2 = 0;

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

// handle roll dice button
rollDiceBtn.addEventListener('click', () => {
  // roll dice
  const dice = Math.floor(Math.random() * 6) + 1;

  // change dice img
  diceImg.src = dices[dice - 1];

  // change active player's current score
  if (dice === 1) {
    currentScore = 0;
    currentScoreBtn.textContent = currentScore;
    switchPlayer();
  } else {
    currentScore += dice;
    currentScoreBtn.textContent = currentScore;
  }
});

// handle hold button
holdBtn.addEventListener('click', () => {
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
resetBtn.addEventListener('click', () => {
  // clear current score
  clearCurrentScore();

  // clear total score
  totalScore1 = 0;
  totalScore2 = 0;
  players.forEach(player => {
    player.querySelector('.score').textContent = 0;
  });

  // clear dice image
  diceImg.style.display = 'none';
});
