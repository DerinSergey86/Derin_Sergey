// Оператор условия if
let accesEnable;
let age = prompt ('Укажите ваш возраст', '');
if (age<18){
    alert ("Доступ запрещён!");
}
else alert ("Доступ разрешён!");

// Тернарный оператор ?
let accesConfirm;
const userAge = prompt ('Укажите ваш возраст', '');
const startfilter = userAge<18 ? 'Доступ запрещён!' : 'Доступ разрешён!';
alert(startfilter);

// конструкция switch
let weekDay = prompt ('Укажите день недели числом от 1 до 7','');
switch (+weekDay) {
    case 1:
        alert ('Понедельник')
        break;
    case 2:
        alert ('Вторник')
        break;
    case 3:
        alert ('Среда')
        break;
    case 4:
        alert ('Чертверг')
        break;
    case 5:
        alert ('Пятница')
        break;
    case 6:
        alert ('Суббота')
        break;
    case 7:
        alert ('Воскресенье')
        break;
        default:
        alert ('Ошибка: такого дня нет!')
}

// цикл while
console.log("вывести числа от 0 до 5 через цикл while");
let numberCycle = 0;
while (numberCycle <= 5) {
console.log(numberCycle);
    numberCycle++
}

// цикл for
console.log("вывести квадраты чисел от 1 до 10 через цикл for");
let numberSquareCycle
for (numberSquareCycle = 1; numberSquareCycle<=10; numberSquareCycle++) {
    console.log(numberSquareCycle**2);
}

// логические операторы
console.log("Напиши код, который определяет, может ли пользователь войти на сайт, если пользователь админ или имеет токен");
const isAdmin = true;
const hasToken = false;
if (isAdmin || hasToken) {
console.log("Доступ разрешён");
}
else console.log("Нет доступа");

// комбинация &&, ||
console.log("Напиши выражение, которое вернёт true , если переменная x находится в диапазоне от 10 до 20 включительно и не равна 15.");
const x = 19;
    console.log(x>= 10 && x<=20 && x != 15);

// цикл с условием
console.log('Пользователь вводит число N. Используя цикл while, выведи все числа от N до 0 в консоль');
let N = prompt ('Введите число', '')
while (N >= 0) {
    console.log(N);
    N--
}

// break и continue
console.log('Используя цикл for , выведи все числа от 1 до 10, но: если число равно 7 — пропусти итерацию ( continue ) если число равно 9 — прерви цикл ( break )');
let conditionNumberCycle;
for (conditionNumberCycle = 1; conditionNumberCycle <= 10; conditionNumberCycle++) {
    if (conditionNumberCycle===7) continue;
    if (conditionNumberCycle===9) break;
    console.log(conditionNumberCycle);
}

// Практика: длина наибольшего отрезка
console.log('Задано три числа a , b , c. Определи и выведи длину наибольшего из трёх отрезков.');
let a = 21;
let b = 105;
let c = 1;
let firstCompare = a < b ? b : a
let secondCompare = b < c ? c : b
let thirdCompare = firstCompare < secondCompare ? secondCompare : firstCompare
console.log(thirdCompare);