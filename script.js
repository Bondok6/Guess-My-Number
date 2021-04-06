'use strict';

// Set Initial Values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Select Elments
const body = document.querySelector('body');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const cuurentScore = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const correctNumber = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', () => {
	const guess = Number(input.value);

	// When Guess is null
	if (!guess) {
		message.textContent = '⛔ There is no number !';

		// When Player Wins
	} else if (guess === secretNumber) {
		message.textContent = '🎉 You Won';

		body.style.backgroundColor = '#60b347';
		correctNumber.style.width = '30rem';

		correctNumber.textContent = secretNumber;

		if (score > highScore) {
			highScore = score;
			highscore.textContent = highScore;
		}

		// When Guess is Wrong
	} else if (guess > 0 && guess <= 20) {
		if (score > 1) {
			message.textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
			score--;
			cuurentScore.textContent = score;
		} else {
			message.textContent = '😞 You Lost The Game';
			cuurentScore.textContent = 0;
			body.style.backgroundColor = '#e74c3c';
		}

		// When Guess not between 1 and 20
	} else {
		message.textContent = '🚫 Number must between 1 and 20';
	}
});

// Reset The Game. NOTE don't reset high-score
document.querySelector('.again').addEventListener('click', () => {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	cuurentScore.textContent = score;
	input.value = '';
	message.textContent = 'start guessing...';
	correctNumber.textContent = '?';
	correctNumber.style.width = '15rem';
	body.style.backgroundColor = '#222';
});
