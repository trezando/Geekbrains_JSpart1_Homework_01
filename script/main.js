let generatedNumber = 0;
let numberOfTries = 0;


function generateNumber() {
    generatedNumber = getRandomInt(1000, 9999);
    document.getElementById("forTest").innerHTML = generatedNumber;
    document.getElementById("numOfTries").innerHTML = "Число попыток: " + numberOfTries;
}

function restartGame() {
    numberOfTries = 0;
    generatedNumber = getRandomInt(1000, 9999);
    document.getElementById("forTest").innerHTML = generatedNumber;
    document.getElementById("prevTry").innerHTML = "Предыдущая попытка: ";
    document.getElementById("numOfTries").innerHTML = "Число попыток: " + numberOfTries;
    document.getElementById("stateOfTheGame").innerHTML = "Результат: ";
}

function tryGame() {
    let tryNumber = parseInt(document.getElementById("tryNumber").value);
    document.getElementById("numOfTries").innerHTML = "Число попыток: " + ++numberOfTries;
    document.getElementById("prevTry").innerHTML = "Предыдущая попытка: " + tryNumber;
    if (tryNumber > generatedNumber) {
        document.getElementById("stateOfTheGame").innerHTML = "Результат: Ваше число больше загаданного";
    } else if (tryNumber < generatedNumber) {
        document.getElementById("stateOfTheGame").innerHTML = "Результат: Ваше число меньше загаданного";
    } else {
        document.getElementById("stateOfTheGame").innerHTML = "Результат: БИНГО!";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function HW02_task2() {
    let a = 2;
    let x = 1 + (a *= 2);
    alert("Значение переменной x:" + x);
}

function HW02_task3() {
    let a = parseInt(document.getElementById("varA").value);
    let b = parseInt(document.getElementById("varB").value);
    let result;

    if (a >= 0 && b >= 0) {
        result = a - b;
    } else if (a < 0 && b < 0) {
        result = a * b;
    } else {
        result = a + b;
    }

    alert("Результат: " + result);
}

function HW02_task6() {
    let arg1 = parseFloat(document.getElementById("arg1").value);
    let arg2 = parseFloat(document.getElementById("arg2").value);
    let op = document.getElementById("op").value;
    alert("Результат: " + mathOperation(arg1, arg2, op));
}

function HW02_task7() {
    alert(null < 0);
}

function HW02_task8() {
    let base = parseInt(document.getElementById("base").value);
    let pow = parseInt(document.getElementById("pow").value);
    let result = power(base, pow);
    alert("Результат: " + result);
}


function power(base, pow) {
    let result = base;
    if (pow === 0) {
        result = 1;
    } else if (pow < 0) {
        result = "Неверное значение степени, степень должна быть больше нуля."
    }
    if (pow > 1) {
        result *= power(base, --pow);
    }
    return result;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "plus":
            return plus(arg1, arg2);
        case "minus":
            return minus(arg1, arg2);
        case "mult":
            return mult(arg1, arg2);
        case "div":
            return div(arg1, arg2);
        default:
            return ("Название операции может быть plus, minus, mult или div")

    }
}


function plus(op1, op2) {
    return op1 + op2;
}

function minus(op1, op2) {
    return op1 - op2;
}

function mult(op1, op2) {
    return op1 * op2;
}

function div(op1, op2) {
    return op1 / op2;
}


function myFunction01() {
    let C = document.getElementById("tempC").value;
    let F = (9 / 5) * C + 32;
    alert("Температура по Фаренгейту: " + F);
}


function myFunction02() {
    let name = document.getElementById("name").value;
    let admin = name;
    document.getElementById("admin").value = admin;
    alert("Имя админа: " + admin);
}

function myFunction03() {
    let left = 1000;
    let right = "108";
    let result = left + right;
    alert("Результат: " + result);
}



