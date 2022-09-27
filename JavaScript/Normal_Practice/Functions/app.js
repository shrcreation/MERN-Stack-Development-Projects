const startGameBtn = document.getElementById('start_game');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULY_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  //arrow function
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid choice! We choose ROCK for you!!.');
    return DEFAULY_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

//function as declaration/statement
// function startGame() {
//   console.log('Game is Started.......');
// }
//function as expression use it in a variable
// const startGame = function startGame() {
//     console.log('Game is Started.......');
// }
//function method
// const person = {
//   greet: function greet() {
//     console.log('Function Method!');
//   },
// };

// person.greet();

//console.dir(startGame);
//startGameBtn.addEventListener('click', startGame);

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return; //stop code execution
  }
  gameIsRunning = true;
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  let message = `You picked ${playerChoice} and computer picked ${computerChoice} and therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'win!';
  } else {
    message = message + 'lost.';
  }

  alert(message);
  gameIsRunning = false;
});

//rest parameters
// const sumUp = (...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   console.log(numbers);
//   return sum;
// };

//cal back function
const sumUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  console.log(numbers);
  return resultHandler(sum);
};

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  console.log(numbers);
  return resultHandler(sum);
};

const showResult = (resultMessage, result) => {
  alert(resultMessage + ' ' + result);
};

sumUp(showResult.bind(this, 'Addition: '), 2, 3, 44, 15, 151);
subtractUp(showResult.bind(this, 'Subtraction: '), -458, 200, -100, 50);
