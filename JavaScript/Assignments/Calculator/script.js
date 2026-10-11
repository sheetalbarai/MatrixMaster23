
//Calc
const calculator = {
    displayValue: '0',  //what is currently shown on screen
    firstOperand: null, // First Digit
    waitingForSecondOperand: false, //flag to check if user pressed operator
    operator:null // operation to be performed
}
//UPDATE DISPLAY
const updateDisplay = () => {
    const display = document.getElementById('calcScreen');
    display.value = calculator.displayValue;
}
updateDisplay();

//HNDLE KEY_PRESS
const key_press = document.querySelector('.keys');
key_press.addEventListener('click',(e)=>{
  const{target} = e;
 
  if(!target.matches('button')){return;} //ignore clicks outside actual buttons

  if(target.classList.contains('operator')){
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if(target.classList.contains('decimal')){
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if(target.classList.contains('all-clear')){
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value); //default : if nothing above then its Digit
  updateDisplay();
  });

  //Input Digit
  const inputDigit = (digit) =>{
    const {displayValue, waitingForSecondOperand} = calculator;
    
    if(waitingForSecondOperand === true){ //operator is pressed and now 2nd operand to be entered
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false; 
    } else { //typing multidigit number
      calculator.displayValue = displayValue === '0'? digit : displayValue + digit;
    }
  };

  //input decimal
  const inputDecimal = (dot) => {
    if(calculator.waitingForSecondOperand === true){
      calculator.displayValue = '0.';
      calculator.waitingForSecondOperand = false;
      return;
    }
    if(!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  //ALL-CLEAR
  const resetCalculator = () =>{
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  };

  //handle operator
  const handleOperator = (nextOperator) => {
    const{firstOperand, displayValue, operator} = calculator;
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitingForSecondOperand){
      calculator.operator = nextOperator;
      return; 
    }
    if(firstOperand === null && !isNaN(inputValue)){
      calculator.firstOperand = inputValue;
    }else if (operator){
  
      const result = calculate(firstOperand, inputValue, operator);
      calculator.displayValue = `${parseFloat(result.toFixed(6))}`;
      calculator.firstOperand = result; //save the new total as first operand for next operation
    }
    calculator.waitingForSecondOperand = true; //next digit to be entered after operator 
    calculator.operator = nextOperator;
  }
  //calculator logic
  const calculate = (firstOperand, secondOperand, operator) => {
    if(operator === '+'){
      return firstOperand + secondOperand;
    } else if(operator === '-'){
      return firstOperand - secondOperand;
    } else if(operator === '*'){
      return firstOperand * secondOperand;
    } else if(operator === '/'){
      return firstOperand/secondOperand;
    }
    return secondOperand;
  }


