/* eslint-disable require-jsdoc */
let buttons = document.getElementsByClassName('emptyButton');
console.log(buttons);

let calculatingValue = 0;
let calculatingValueText = "1 + 2 * 7";
let answer = 0;
let currentInput = "";
let previousInput = 0;
let operatorPresent = false;

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
  displayValue = "0";
  calculatedValue = 0;
  currentInput = "0";
  operatorPresent = false;
  return
}


function operate(x, y) {
  if (this.value == "=") {
    currentInput = 0;
    calculatingDisplayed.innerHTML = currentInput;
    return;
  }
  currentInput += this.value;
  console.log(currentInput);
  calculatingDisplayed.innerHTML = currentInput;
}


for (let i = 0; i <= buttons.length; i++) {
    if(buttons[i]) {
        buttons[i].addEventListener('click', operate);
    }
}

function add(total, input) {
  return total + input;
}

function subtract(total, input) {
  return total - input;
}

function multiply(total, input) {
  return total * input;
}

function divide (total, input) {
  return total / input;
}

function percentage (total, input) {
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
