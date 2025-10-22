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