/* eslint-disable require-jsdoc */
let buttons = document.getElementsByClassName('emptyButton');
console.log(buttons);

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


let answerDisplayed = document.getElementById('answer');
let calculatingDisplayed = document.getElementById('calculatingValue');
answerDisplayed.innerHTML = answer;
calculatingDisplayed.innerHTML = currentInput;

let addButton = document.getElementById('add');
let subtractButton = document.getElementById('subtract');
let multiplyButton = document.getElementById('multiply');
let divideButton = document.getElementById('divide');
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

  if (operatorsList.includes(this.value)) {
    if (!lastNumber == '') {
      switch(this.value) {
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
          console.log(answer);
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
    //console.log(currentNumber);
  }

  currentArray.push(this.value);  //console.log(currentArray);
  [currentInput, previousInput] = [previousInput, currentInput];  //console.log(previousInput);
  currentInput = this.value;  //console.log(currentInput);
  calculatingDisplayed.innerHTML = currentArray.join('');
  
  if (currentInput == "=") {
    clear();
    return;
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
  if (input === 0) {
    return;
  }
  console.log(total, input);
  return +input / +total;
}

function percentage(total, input) {
    return total / 100 * input;
}

function inverse(x) {
  return x * -1; 
}



let testButton = document.getElementById("seven").value;






/* 
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonId = button.id;
    button.addEventListener('click', operate);
  });
  button.addEventListener('click', operate);
});


console.log(buttons);
buttons.forEach(function(elem) {
  elem.addEventListener('click', function() {
    alert('Hello World!');
  });
});
// eslint-disable-next-line require-jsdoc
*/
