// 1. Сумма чисел от 1 до N
// Напиши функцию sumTo(n) , которая возвращает сумму всех чисел от 1 до n .

function sumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
sum = sum + i;
    }
    return sum;
}