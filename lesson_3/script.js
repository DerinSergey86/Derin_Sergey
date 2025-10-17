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

// Система рекомендаций по погоде
let temperature = prompt ('Укажите температуру в градусах Цельсия','');
if (temperature < -30) {
        alert ('Оставайтесь дома!');
} else if (temperature <= -10) {
    alert ('Сегодня холодно');
} else if (temperature <= 5) {
    alert ('Не холодно');
} else if (temperature <= 15) {
    alert ('Тепло');
} else if (temperature <= 25) {
    alert ('Очень тепло');
} else if (temperature <= 35) {
    alert ('Жарко');
} else if (temperature > 35) {
    alert ('Пекло!');
}

// Роль пользователя  (switch)
// Пусть есть переменная role , принимающая одно из значений:
// "admin" , "manager" , "user" , "guest" .
// С помощью switch выведи персонализированное сообщение, например:
// admin → "Добро пожаловать, администратор!"
// manager → "Привет, менеджер!"
// user → "Рады видеть вас снова!"
// guest → "Пожалуйста, войдите в систему"
let role = prompt ('Пожалуйста, войдите в систему', '')
switch (role) {
    case 'admin':
    alert ('Добро пожаловать, администратор!');
    break

    case 'manager':
    alert ('Привет, менеджер!');
    break

    case 'user':
    alert ('Привет, юзер!');
    break

    case 'guest':
    alert ('Рады видеть вас снова!');
    break
    default:
    alert( 'Что-то пошло не так. Попробуйте ещё раз.' );
}

// Подсчёт дней до окончания
// В автосалоне есть N автомобилей. Каждый день количество машин уменьшается в 2
// раза.
// Определи, на какой день количество автомобилей станет меньше M .
// Выведи результат в виде:
// "На X-й день количество машин стало меньше M"
let Ncars = prompt ('Количество автомобилей в наличии', '')
let Mcars = prompt ('Минимально допустимое количество автомобилей в наличии', '')
for ( let X = 0; Ncars>Mcars; X++) {
    Ncars=Ncars/2
    if (Ncars<Mcars) {
    console.log (`На ${X}-й день количество машин стало меньше ${Mcars}`)
    }
}

// Поиск годов (for + логика)
// Найди:
// 1. Год первого полёта человека в космос (1961).
let YuriGagarin = 0
for (; YuriGagarin = 1961; YuriGagarin++) {
    console.log(YuriGagarin);
    break;
}

// 2. Количество високосных лет между 1800 и 2020 годами.
// Используй цикл for и счётчик итераций.

let MaxYearsLimit = 2020;
let MinYearsLimit = 1800;
let range = MaxYearsLimit - MinYearsLimit;
let leapYears = 0;
for (range; range > 0; range--) {
  if (range % 4 == 0) continue;
    leapYears++;
}
console.log(leapYears);
// выводит странное число???

// let MaxYearsLimit = 2020;
// let MinYearsLimit = 1800;
// let range = MaxYearsLimit - MinYearsLimit;
// let leapYears = 0;
// for (range; range < 0; range-4) {
//     leapYears++;
// }
// console.log(leapYears);
// выводит 0