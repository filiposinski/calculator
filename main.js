const textElement = document.querySelector('.display');
const numberButton = document.querySelectorAll('.button__num--js');
const operantButton = document.querySelectorAll('.button__op--js');
const sumButton = document.querySelector('.button__sum--js');
const clrButton = document.querySelector('.button__clr--js');
let previousNumber = 0;
let currentNumber = 0;
let operationType;


function clear() {
    textElement.innerHTML = '0';
    console.log('clear');
}


function operation(operantButton) {

}

function sum() {
    let compute;
    currentNumber = parseFloat(textElement.innerHTML);
    switch (operationType) {
        case '+':
            compute = previousNumber + currentNumber;
            break;
        case '-':
            compute = previousNumber - currentNumber;
            break;
        case '×':
            compute = previousNumber * currentNumber;
            break;
        case '÷':
            compute = previousNumber / currentNumber;
            break;
    }
    textElement.innerHTML = compute;
}

clrButton.addEventListener('click', clear);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (textElement.innerHTML == '0') textElement.innerHTML = '';
        textElement.innerHTML += button.innerHTML;
        console.log(`value: ${button.innerHTML}`);
    })
})

operantButton.forEach(button => {
    button.addEventListener('click', () => {
        operationType = button.innerHTML;
        console.log(`operation: ${operationType}`);
        previousNumber = parseFloat(textElement.innerHTML);
        console.log(`previous: ${previousNumber}`)
        clear();
    })
})

sumButton.addEventListener('click', sum);