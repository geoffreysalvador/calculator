let num1 = 0;

let num2 = 0;

let operator = '';

function operate(num1, num2, operator) {
let result = 0;

console.log(num1, operator, num2);


    switch (operator) {
        case '+': //addition
          result = parseInt(num1) + parseInt(num2);
          break;
        case '-': //subtraction
          result = parseInt(num1) - parseInt(num2);
          break;
        case '×': //multiplication
          result = parseInt(num1) * parseInt(num2);
          break;
        case '÷': //division
          result = parseInt(num1) / parseInt(num2);
          break;
    }

    return result;
}

let numPress = document.querySelectorAll(".key");
numPress.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);

// checks if button pressed is a number
    if (/^\d+$/.test(e.target.innerHTML)) {
        let display = document.getElementById("result");
    // checks if the previous key pressed was an operator    
        if (/^\d+$/.test(display.innerHTML)) {
            display.innerHTML = parseInt(display.innerHTML + e.target.innerHTML);
        } else {
            display.innerHTML = e.target.innerHTML;
        }

        if (operator === '') {
            num1 = display.innerHTML;
        } else {
            num2 = display.innerHTML;
        }
    }

// checks for operators
    if (e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '×' || e.target.innerHTML === '÷') {
        if (/^\d+$/.test(num1) && num2 === 0) {
            operator = e.target.innerHTML;
            let display = document.getElementById("result");
            display.innerHTML = e.target.innerHTML;
        } else if (/^\d+$/.test(num1) && /^\d+$/.test(num2) && !(operator === '')) {
            let display = document.getElementById("result");
            display.innerHTML = operate(num1, num2, operator) + e.target.innerHTML;
            num1 = operate(num1, num2, operator);
            num2 = 0;
            operator = e.target.innerHTML;            
        }
    }

// checks for the equal sign
    if (e.target.innerHTML === '=') {
        let display = document.getElementById("result");
        display.innerHTML = operate(num1, num2, operator);
    }

// checks for clear sign
    if (e.target.innerHTML === 'AC') {
        let display = document.getElementById("result");
        display.innerHTML = 0;
        num1 = 0;
        num2 = 0;
        operator = '';        
    }
  })
);

