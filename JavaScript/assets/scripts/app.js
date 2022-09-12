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

//function for if else if lader conditions
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput(); // call the user input function and store in a variable
  const initialResult = currentResult;

  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  }else if(calculationType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  }else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  }else{
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
