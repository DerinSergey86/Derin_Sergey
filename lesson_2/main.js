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

infinity = String(infinity) /* преобразование типа из number в string */
console.log(typeof (infinity));

let value = 'five'
value = Number(value) /* преобразование типа из string в number */
console.log(typeof(value))

let compare = true
compare = String(compare) /* преобразование типа из boolean в string */
console.log(typeof(compare))

// неявное преобразование типов данных