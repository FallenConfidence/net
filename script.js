let currentInput = '';
let currentOperator = '';
let prevInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    currentOperator = operator;
    prevInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (currentInput !== '' && prevInput !== '') {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currentInput);
        let result;

        switch (currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        currentInput = result.toString();
        prevInput = '';
        currentOperator = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    prevInput = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}
