let myFavoriteFilm = {
    name: "Good, Bad, Evil",
    director: "Sergio Leone",
    "release date": '1966',
    country: "USA",
}
myFavoriteFilm['box office'] = '$25 000 000';
console.log(myFavoriteFilm['name']);
delete myFavoriteFilm['release date'];
console.log(myFavoriteFilm);

// Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

// function randomRangeNum (min, max) {
//     let range = max - min;
//     return Math.floor((Math.random()) * range + min)
// }
// min = prompt('Введите минимальное число диапазона рандомного числа', '');
// max = prompt('Введите максимальное число диапазона рандомного числа', '');
// alert(`Рандомное число из вашего диапазона - ${randomRangeNum(min, max)}`);

// Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

function compareElement (str,n) {
    let element = str[n-1];
    let elementUp = element.toUpperCase(0);
    return element.codePointAt(0) == elementUp.codePointAt(0);
}
console.log(compareElement('jsfun', 2));
console.log(compareElement('JSPAIN', 2));