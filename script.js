let display = document.getElementById('display');

// Dodawanie znaków do wyświetlacza
function appendToDisplay(value) {
display.value += value;
}

// Czyszczenie wyświetlacza
function clearDisplay() {
display.value = '';
}

// Usuwanie ostatniego znaku z wyświetlacza
function deleteLast() {
display.value = display.value.slice(0, -1);
}

// Obliczanie wyniku
function calculate() {
let input = display.value;

// Zamiana wyświetlanych symboli na operatory
input = input.replace(/×/g, '*').replace(/÷/g, '/');

let operators = ['+', '-', '*', '/'];
let numbers = [];
let operations = [];
let currentNumber = '';

// Rozdzielenie liczb i operatorów
for (let i = 0; i < input.length; i++) {
let char = input[i];
if (operators.includes(char)) {
numbers.push(parseFloat(currentNumber));
operations.push(char);
currentNumber = '';
} else {
currentNumber += char;
}
}
numbers.push(parseFloat(currentNumber));

// Mnożenie i dzielenie
for (let i = 0; i < operations.length; i++) {
if (operations[i] === '*' || operations[i] === '/') {
let result;
if (operations[i] === '*') {
result = numbers[i] * numbers[i + 1];
} else {
result = numbers[i] / numbers[i + 1];
}
numbers.splice(i, 2, result);
operations.splice(i, 1);
i--;
}
}

// Dodawanie i odejmowanie
for (let i = 0; i < operations.length; i++) {
let result;
if (operations[i] === '+') {
result = numbers[i] + numbers[i + 1];
} else {
result = numbers[i] - numbers[i + 1];
}
numbers.splice(i, 2, result);
operations.splice(i, 1);
i--;
}

display.value = numbers[0]; // Wyświetlenie wyniku
}
