const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //array

function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //back tick for print a value as a string
  outputResult(currentResult, calcDescription); //from vendor file
}

//write the log data
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  nextResult
) {
  //objects
  const logEntry = {
    oparation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: nextResult,
  };
  //array
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput(); // call the user input function and store in a variable
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);

  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput(); // call the user input function and store in a variable
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);

  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput(); // call the user input function and store in a variable
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);

  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput(); // call the user input function and store in a variable
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);

  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
