// #parameters #functionParameters  #rest #spread #параметрыПоУмолчанию #параметрыФункции #ECMAScript2015 #ECMAScript6 #ES6 #2015
//параметры по умолчанию указываются через равно после параметров функции
function user(name = 'Veronika', age = 24) {
    console.log('Пользователю ' + name + ' ' + age + ' года/лет');
}
user();
//параметры по умолчанию должны идти после обычных параметров, иначе аргументы придётся записывать через undefined: (undefined, 9)

//можно работать с неизвестным изначально количеством параметров с помощью rest-параметра
function showNum(...numbers) {
    console.log(numbers);
}
showNum(7, 8, 9, 10);
showNum(7); //с одним аргументом вернёт всё равно массив
showNum(); //без аргумента вернёт пустой массив

//можно массив разложить на элементы с помощью spread оператора
const array = [1, 2, 3];
const resultMax = Math.max(...array);
console.log(resultMax);

//spread может разложить несколько массивов на элементы, может быть скомбинирован с другими аргументами
const array2 = [5, 6, 9];
const resultMax2 = Math.max(...array, 7, ...array2, 4);
console.log(resultMax2);