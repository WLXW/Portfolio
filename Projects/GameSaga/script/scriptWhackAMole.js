const gameBoard = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-button');
let score = 0;
let timer;
let timeLeft = 120;
let gameStarted = false;

// Create mole holes
for (let i = 0; i < 9; i++) {
  const moleHole = document.createElement('div');
  moleHole.className = 'mole-hole';
  moleHole.addEventListener('click', whackMole);
  gameBoard.appendChild(moleHole);
}

startButton.addEventListener('click', startGame);

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    startButton.disabled = true;
    spawnMole();
    timer = setInterval(updateTimer, 1000);
    setTimeout(endGame, timeLeft * 1000);
  }
}

function updateScore() {
  scoreElement.textContent = 'Score: ' + score;
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timeLeft--;
}

function spawnMole() {
  const moleHoles = document.getElementsByClassName('mole-hole');
  const randomHole = moleHoles[Math.floor(Math.random() * moleHoles.length)];
  const mole = document.createElement('div');
  mole.className = `mole ${Math.random() < 0.5 ? 'fast' : ''}`;
  mole.addEventListener('click', whackMole);
  randomHole.appendChild(mole);

  setTimeout(() => {
    mole.remove();
    if (timeLeft > 0) {
      spawnMole();
    }
  }, Math.random() * 2000 + 1000);
}

function whackMole(event) {
  const mole = event.target;
  if (mole.classList.contains('mole')) {
    mole.remove();
    if (mole.classList.contains('fast')) {
      score += 2;
    } else {
      score++;
    }
    updateScore();
  }
}

function endGame() {
  clearInterval(timer);
  alert('Time\'s up! Final score: ' + score);
}
