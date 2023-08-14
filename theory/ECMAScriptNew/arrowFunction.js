// #arrowFunction #стрелочныеФункции #стрелочнаяФункция #функцияСтрелки #ECMAScript2015 #ECMAScript6 #ES6 #2015
function square(x) {
    return x * x;
}

console.log(square(5));

//вместо кода выше пишем arrow function:

let sq = x => x * x;

console.log(sq(5));

//если параметра два, то следует использовать круглые скобки:
let multiplication = (x, y) => x * y;

console.log(multiplication(5, 2));

//метод map принимает функцию обратного вызова и создаёт НОВЫЙ массив результатов вызова функции. В качестве параметра используется текущий элемент массива на текущей итерации.
const array = ['1', '3', '2', '4'];

// #map #.map #filter #.filter #reduce #.reduce
const result = array
    .map((element) => parseInt(element)) //преобразование каждого элемента массива из строки в число
    //метод filter возвращает отфильтрованный новый массив, фильтрация происходит по условиям функции обратного вызова
    .filter((num) => num % 2) //true при остатке от деления != 0, т.е. число нечётное
    //reduce сворачивает массив в одно значение путем применения функции обратного вызова к каждому элементу массива ПОСЛЕДОВАТЕЛЬНО. Сохраняет промежуточный результат после каждой итерации.
    //тут max - промежуточный результат, value - текущий элемент массива, 0 - начальное значение max.
    .reduce((max, value) => Math.max(max, value), 0);
console.log(result);



//arrow функция сохраняет лексическое значение this в объекте
const greeter = {
    greet: function (name) {
        console.log('Hello', name);
    },
    greetAll: function (names) {
        names.forEach((name) => {
            this.greet(name);
        });
    }
};
greeter.greetAll(['Bob', 'Mark', 'Pete']);
//функция стрелки не имеет prototype, т.е. на её основе нельзя создать новые объекты