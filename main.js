const displayText = document.querySelector('.display');
const numberButton = document.querySelectorAll('.button__num--js');
const operantionButton = document.querySelectorAll('.button__op--js');
const resultButton = document.querySelector('.button__sum--js');
const clearButton = document.querySelector('.button__clr--js');

let previousNumber = 0;
let currentNumber = 0;
let operationType = null;


function clear() {
    display('0');
    console.log('clear');
    previousNumber = 0;
    currentNumber = 0;
    operationType = null;
}

function result() {
    prev = parseFloat(previousNumber);
    current = parseFloat(currentNumber);
    switch (operationType) {
        case '+':
            currentNumber = prev + current;
            break;
        case '-':
            currentNumber = prev - current;
            break;
        case '*':
            currentNumber = prev * current;
            break;
        case '/':
            currentNumber = prev / current;
            break;
    }
    console.log(`result: ${currentNumber}`);
    display(currentNumber);
}

function display(number) {

    displayText.innerHTML = number;
}

clearButton.addEventListener('click', clear);


numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber == 0) currentNumber = button.value;
        else currentNumber += button.value;
        console.log(`button: ${button.value}`);
        display(currentNumber);
        console.log(`value: ${currentNumber}`);

    })
})

operantionButton.forEach(button => {
    button.addEventListener('click', () => {

        previousNumber = currentNumber;
        currentNumber = 0;
        console.log(`previous: ${previousNumber}`);
        operationType = button.value;
        console.log(`operation: ${operationType}`);

    })
})

resultButton.addEventListener('click', result);