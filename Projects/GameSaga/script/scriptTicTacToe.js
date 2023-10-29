let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;

    if (checkForWin()) {
      document.getElementById('current-player').textContent = currentPlayer + ' Wins!';
      gameActive = false;
    } else if (checkForDraw()) {
      document.getElementById('current-player').textContent = 'It\'s a Draw!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('current-player').textContent = currentPlayer;
    }
  }
}

function checkForWin() {
  for (let combination of winningCombinations) {
    if (
      board[combination[0]] !== '' &&
      board[combination[0]] === board[combination[1]] &&
      board[combination[0]] === board[combination[2]]
    ) {
      return true;
    }
  }
  return false;
}

function checkForDraw() {
  return !board.includes('');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;

  Array.from(document.getElementsByClassName('cell')).forEach((cell) => {
    cell.textContent = '';
  });

  document.getElementById('current-player').textContent = currentPlayer;
}