// 1. Сумма чисел от 1 до N
// Напиши функцию sumTo(n) , которая возвращает сумму всех чисел от 1 до n .

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
sum = sum + i;
    }
    return sum;
}
    let n = prompt ('укажите значение, до которого будет вычеслена сумма чисел начиная с 1', "10");
console.log(sumTo(n));

// 2. Степень числа
// Напиши функцию pow(base, exponent) , которая возводит base в степень exponent
// с помощью цикла.

function pow(base, exponent) {
    base = base ** exponent;
    return base
}
let base = prompt ('укажите значение, которое будет возведено в степень', "2");
let exponent = prompt ('укажите значение, в степень которого будет возведено число', "5");
console.log(pow(base, exponent));

// 3. Подсчёт чётных чисел
// Функция countEven(n) должна вернуть количество чётных чисел от 1 до n.
function countEven(n2) {
    let evenNumbers = 0;
    for (let i = 1; i <= n2; i++) {
        if (i % 2 !== 0)continue;
        evenNumbers ++
    }
    return evenNumbers;
}
let n2 = prompt ('укажите число, до которого будет вычеслено количество чётных чисел начиная с 1', "10");
console.log(countEven(n2));

// 4. Факториал числа
// Реализуй factorial(n) с помощью цикла.
function factorial(n3) {
    let result = 1;
    for (let i = 1; i <= n3; i++) {
    result = result * i;
    }
    return result;
}
let n3 = prompt ('укажите число, до которого будет вычеслен факториал начиная с 1', "");
console.log(factorial(n3));

// 5. Повтор строки
// Напиши функцию repeatText(text, count) , которая возвращает строку,
// повторённую count раз подряд (без String.repeat ).

function repeatText(text, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result = result + text;
    }
    return result;
}
console.log(repeatText(' текст ', 3));

// 6. Числа в диапазоне
// Функция printRange(start, end) выводит все числа от start до end (включительно).

function printRange(start, end) {
    let numberStart = start;
    while (numberStart < end) {
    console.log(numberStart);
        numberStart++;
    }
    return numberStart;
}
console.log(printRange(1, 5));

// 7. Подсчёт цифр
// Функция countDigits(num) возвращает, сколько цифр в числе num .

function countDigits(num) {
    let result = 0;
   while (num > 1) {
    num = num/10;
    result++;
     if (num < 1)
        break;
    }
    return result;
}
console.log(countDigits(55555));

// 8. Сумма цифр числа
// Функция sumDigits(num) находит сумму всех цифр числа (используя % и Math.floor ).

function sumDigits(num) {
    let result =0;
    while (num > 0) {
        let digit = num % 10;
        result = result + digit;
        num = num/10;
        num = Math.floor(num);
    }
    return result;
}
console.log(sumDigits(762));

// 9. Таблица умножения
// Функция printTable(n) выводит таблицу умножения для числа n (от 1 до 10).

function printTable(n) {
    let factor = 1;
    while (factor <= 10) {
    let result = n * factor;
console.log(`${n} x ${factor} = ${result}`);
    factor++;
    }
}
printTable(39);

// 10. Обратный отсчёт
// Функция countdown(from) выводит все числа от from до 1.

function countdown(from) {
    for (from; from >= 1; from--) {
        console.log(from);
    }
}
countdown(5);

// 11. Числа Фибоначчи
// Функция fibonacci(n) возвращает n -е число Фибоначчи.

function fibonacci(n) {
    // let result = (n-1) + (n-2); выводит числа не из ряда
    // return result; 
    /* let result = fibonacci(n-1) + fibonacci(n-2); */ /* ??? превышен максимальный размер стека вызова */
   /*  return result; */
    // вариант через цикл for с жёстким присваиванием начальных значений, подсчётом значений через формулу, и соответствующим значению количеством итераций
    // n = 0 + 1; n = 1 + 1; n = 1 + 2; n = 2 + 3 и т.д.
        let fibonacci1 = 0;
        let fibonacci2 = 1;
        let fibonaccin;
    for (let i = 1; i < n; i++) {
        fibonaccin = fibonacci1 +fibonacci2;
        fibonacci1 = fibonacci2;
        fibonacci2 = fibonaccin;
    }
    return fibonaccin;
}
console.log(fibonacci(6));

// 12. Реверс числа
// Функция reverseNumber(num) возвращает число в обратном порядке цифр.
// задать результат,
//  взять остаток деления числа на 10,
//  прибавить его к результату,
//  перед последующей итерацией умножить остаток на 10, чтобы вернуть число к прежнему порядку
//  в шаге округлить число вниз до целого
// повторять пока число является натуральным

function reverseNumber(num) {
    let result = 0;
 while (num > 0) {
    result = result * 10;
    result = result + num % 10;
    num = num/10;
    num = Math.floor(num);
 }
    return result;
}
console.log(reverseNumber(321));