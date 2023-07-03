'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 🍚';

document.querySelector('.number').textContent = '14';
document.querySelector('.score').textContent = '11';
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = '🚩 Input a number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🔥 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent('highscore');
    }
    // When you do not select a number
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Select a number between 1 and 20';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      //or score = score - 1
    } else {
      document.querySelector('.message').textContent = 'You lose !!!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      //or score = score - 1
      score--;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose !!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
