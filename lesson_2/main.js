const pi = 3.14;
console.log(pi)
console.log(typeof(pi))
let infinity = 1/0
console.log(infinity)
console.log(typeof(infinity))
let somfingwrong = "now"*pi
console.log(somfingwrong)
console.log(typeof(somfingwrong))
let bigInt = 3n
console.log(bigInt)
console.log(typeof(bigInt))
let username = "Serzh"
let age = 39
console.log(username)
console.log(typeof(username))
let howOldUser = `${username}, ${age} years old`
console.log(howOldUser)
console.log(typeof(howOldUser))
let isgreated = age>18
console.log(isgreated)
console.log(typeof(isgreated))
let codelevel = null
console.log(codelevel)
console.log(typeof(codelevel)) 
let dateOfBirth
console.log(dateOfBirth)
console.log(typeof(dateOfBirth))
let object = {
    name: username,
    age: age
        }
console.log(object)
console.log(typeof(object))
function definition () {}
console.log(definition)
console.log(typeof(definition))
console.log(String(infinity));
console.log(typeof(infinity));

// явное преобразование типов данных

infinity = String(infinity) /* преобразование типа number в string */
console.log(typeof (infinity));

let value = 'five'
value = Number(value) /* преобразование типа string в number */
console.log(typeof(value))

let compare = true
compare = String(compare) /* преобразование типа boolean в string */
console.log(typeof(compare))

// неявное преобразование типов данных

const min = '1'
console.log(3/min) /* преобразование типа string в number, рядом с переменной стоит знак математической операции */

console.log(Number(isgreated)) /* преобразование типа boolean в number со значением 1, т.к. значением boolean является true */

const answer = 0
console.log(Boolean(answer)) /* преобразование типа number в boolean со значением false, т.к. значением number является 0 */

const userID = 'Genrih5'
console.log(Boolean(userID)) /* преобразование типа string в boolean со значением true, т.к. значение string не пустое, т.е. отлично от 0, пустой строки, null, undefined и NaN */

console.log(Number(definition)) /* преобразование типа undefined в Number, всегда становится NaN */

// операторы сравнения

console.log('tasker'>'task') /* true, в первом значении больше букв (элементов значения) */
console.log('Tasker'>'task') /* false, при сравнении первых символов, строчные буквы всегда больше заглавных */
console.log(false===0) /* false, при строгом сравнении сначала сравниваются типы данных */
console.log(false==0) /* true, при сравнении типы данных приводятся к number */
console.log('somfingValue'===0) /* false, сравниваются разные типы данных */