/* eslint-disable require-jsdoc */
let buttons = document.getElementsByClassName('calcButton');
console.log(buttons);

const displayValue = 0;

console.log(buttons.length);

function myAlert() {
  console.log(this);
}



for (let i = 0; i <= buttons.length; i++) {
    if(buttons[i]) {
        buttons[i].addEventListener('click', myAlert);
    }
}
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
