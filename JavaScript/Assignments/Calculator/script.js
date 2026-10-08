
//Calc
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator:null
}
//
const updateDisplay = () => {
    const display = document.getElementById('calcScreen');
    display.value = calculator.displayValue;
}
updateDisplay();

const key_press = document.querySelector('.keys');
key_press.addEventListener('click',(e)=>{
  const{target} = e;
  console.log(target);

  if(!target.matches('button')){return;}
  
  
});


