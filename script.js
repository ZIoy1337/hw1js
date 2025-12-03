function factorial(n) {
    if (n < 0) return "Факторіал не визначений для від'ємних чисел";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const input = prompt("Введіть число:");
const number = parseInt(input);

let output;

if (isNaN(number)) {
    output = "Ви ввели не число!";
} else {
    output = "Факторіал числа " + number + " дорівнює: " + factorial(number);
}

document.getElementById("result").textContent = output;
