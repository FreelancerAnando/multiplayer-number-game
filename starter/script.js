'use strict';
// document.querySelector('.message').textContent = 'Guess Correct Number !';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.number').textContent = '25';
// document.querySelector('.guess').value = '5';
// console.log(document.querySelector('.guess').value);
let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //  No input given
  if (!guess) {
    displaymessage(' ✂ Not Number !');

    // winner decleared
  } else if (guess === secretnumber) {
    document.querySelector('.number').textContent = secretnumber;

    displaymessage(' 🎈 Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when not matching number
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? ' 👆 Too High !' : ' 👇 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 😆 You Lost The Game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' Start guessing...!';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
