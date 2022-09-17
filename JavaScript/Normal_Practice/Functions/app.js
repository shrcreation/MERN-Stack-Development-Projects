const startGameBtn = document.getElementById('start_game');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULY_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid choice! We choose ROCK for you!!.');
    return DEFAULY_USER_CHOICE;
  }
  return selection;
};

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


startGameBtn.addEventListener('click', function() {
    if(gameIsRunning){
        return;//stop code execution
    }
    gameIsRunning = true;
    console.log('Game is starting....');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
})
