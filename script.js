/* eslint-disable require-jsdoc */
let buttons = document.getElementsByClassName('emptyButton');

let calculatingValue = 0;
let calculatingValueText = "1 + 2 * 7";
let answer = 0;
let currentArray = [];
let currentInput = "";
let currentNumber = '';
let previousInput = "";
let previousNumber = '';
let operatorsList = ['+', '-', '*', '/', '%', '.', '='];
let lastOperator = '';
let lastNumber = '';
let signPosition = 0;


let answerDisplayed = document.getElementById('answer');
let calculatingDisplayed = document.getElementById('calculatingValue');
answerDisplayed.innerHTML = answer;
calculatingDisplayed.innerHTML = currentInput;

let addButton = document.getElementById('add');
let subtractButton = document.getElementById('subtract');
let multiplyButton = document.getElementById('multiply');
let divideButton = document.getElementById('divide');
let percentageButton = document.getElementById('percentage');
let inverseButton = document.getElementById('inverse');
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

function clear () {
  calculatedValue = 0;
  currentArray = [];
  currentNumber = "";
  currentInput = "";
  previousInput = "";
  lastOperator = '';
  lastNumber = '';
  calculatingDisplayed.innerHTML = "";
  answer = 0;
  answerDisplayed.innerHTML = answer;
  return
}




function operate(x) {
  
  if (this.value == '|') {
    if (currentNumber < 0 || previousInput == '|') {
      return;
    }
    if (currentNumber != '' || currentNumber != '' && previousInput == '|') {
      currentNumber = inverse(currentNumber);
    }
    else {
      previousInput = '|';
    }

    signPosition = currentArray.lastIndexOf(lastOperator);
    currentArray.splice((signPosition + 1), 0, '-');
    calculatingDisplayed.innerHTML = currentArray.join('');
    return;
  
   
  }
  
  if (operatorsList.includes(this.value) && lastOperator == '') { //Doesn't allow user to enter operator if last input was operator
    lastOperator = this.value;
  }

  if (operatorsList.includes(this.value) && operatorsList.includes(currentInput)) { //Doesn't allow user to enter operator if last input was operator
    return;
  }

  if (operatorsList.includes(this.value) && currentInput == "") { //Doesn't allow first input to be operator
    return;
  }

  if (currentInput == "" && this.value == 0) {  //Doesn't allow first input to be zero
    return;
  }

  if (lastOperator == '=' && !operatorsList.includes(this.value)) {
    currentArray = []; //console.log(currentArray);
    [currentInput, previousInput] = [previousInput, currentInput]; //console.log(previousInput);
    currentInput = this.value; //console.log(currentInput);
    calculatingDisplayed.innerHTML = currentArray.join('');
    answer = 0;
    lastNumber = currentNumber;
    currentNumber = ''; 
    lastOperator = '';
  }

  if (operatorsList.includes(this.value)) {
    
    //currentOperator = this.value;
    if (!lastNumber == '' || this.value == '=') {
      switch(lastOperator) {
        case "+":
          answer = add(currentNumber, lastNumber);
          answerDisplayed.innerHTML = answer;
          break;
        case "-":
          answer = subtract(currentNumber, lastNumber);
          answerDisplayed.innerHTML = answer;
          break;
        case "*":
          answer = multiply(currentNumber, lastNumber);
          answerDisplayed.innerHTML = answer;
          break;
        case "/":
          answer = divide(currentNumber, lastNumber);
          answerDisplayed.innerHTML = answer;
          break;
        case "%":
          answer = percentage(currentNumber, lastNumber);
          answerDisplayed.innerHTML = answer;
          break; 
      }
    lastNumber = answer;
    currentNumber = '';
    lastOperator = this.value;
    }
  
  else {
    lastNumber = currentNumber;
    currentNumber = '';
  }

  }

  if (!operatorsList.includes(this.value)) { //adds digits onto current number
    currentNumber += this.value;
    if (previousInput == '|') {
      currentNumber = inverse(currentNumber);
    }
  }

  if (lastOperator == '=') {
    if (calculatingDisplayed.innerHTML == '') {
      currentArray = [];
      currentArray.push(this.value); //console.log(currentArray);
      [currentInput, previousInput] = [previousInput, currentInput]; //console.log(previousInput);
      currentInput = this.value; //console.log(currentInput);
      calculatingDisplayed.innerHTML = currentArray.join('');
    }
    else {
      currentArray = [];
      currentArray.push(answer);
      calculatingDisplayed.innerHTML = '';
    }
  }

  else {
    currentArray.push(this.value); //console.log(currentArray);
    [currentInput, previousInput] = [previousInput, currentInput]; //console.log(previousInput);
    currentInput = this.value; //console.log(currentInput);
    calculatingDisplayed.innerHTML = currentArray.join('');
  }
}


for (let i = 0; i <= buttons.length; i++) {
    if(buttons[i]) {
        buttons[i].addEventListener('click', operate);
    }
}

function add(total, input) {
  return +total + +input;
}

function subtract(total, input) {
  return +input - +total;
}

function multiply(total, input) {
  return total * input;
}

function divide(total, input) {
  if (total == 0) {
    answer = 'no.';
    return answer;
  }
  return +input / +total;
}

function percentage(total, input) {
    return total / 100 * input;
}

function inverse(x) {
  return +x * -1; 
}


