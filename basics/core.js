//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let y;
    y=n&n;
    if (y==n)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let mas=[];
    let i=0;
    while (i<20)
    {
        i+=2;
        mas.push(i);
    }
    return mas;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
