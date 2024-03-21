// #деструктуризацияОбъекта #ECMAScript2015 #ECMAScript6 #ES6 #2015
// Деструктуризация - способ извлечения значений свойств объекта и присваивание их переменным с помощью упрощённого синтаксиса

//можно создать переменные в фигурных скобках, одноимённые свойства объекта которых запишутся в эти переменные:
/*const Veronika = {
    age: 24,
    city: 'Moscow',
    gender: 'female',
};

const {age, city} = Veronika;
console.log(age, city);*/

//вместо:
/*
const age = Veronika.age;
const city = Veronika.city;
console.log(age, city);
*/

//можно дать и другое название переменным:
const Veronika = {
    age: 24,
    city: 'Moscow',
    gender: 'female',
};
//
const {age: ageVeronika, city: cityVeronika} = Veronika;
console.log(ageVeronika, cityVeronika);

//если в объекте такого свойства нет, его можно добавить по умолчанию:

const { hair = 'brown' } = Veronika;
console.log(hair);


//по умолчанию передаётся пустой объект и применяется деструктуризация объекта со свойствами по умолчанию
function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest' } = {} ) {
    console.log(host, port, user);
}
connect();

//при деструктуризации можно использовать rest элемент

const car = {
    ford: 2.9,
    masda: 2.7,
    chevrolet: 3.4
}

const { ford, ...otherCars } = car;
console.log(otherCars);

// #деструктуризацияМассива #ECMAScript2015 #ECMAScript6 #ES6 #2015

/*const numbers = [1, 15, 18, 3, 4, 7, 12];
const [one, , , three, four] = numbers;
console.log(one, three, four);*/

const pairs = [ [1, 2], [3, 4] ];
const [ [one, two], [three, four] ] = pairs; //есть параметры по умолчанию и rest элементы
console.log(one, two, three, four);

//array функция и деструктуризация массива
//найти всех животных, которые говорят 'squeak'
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};
//получаем сначала все ключи и значения объекта при помощи Object.entries() - принимает объект и возвращает двухмерный массив (массив массивов ключ/значение)
const result = Object.entries(dict)
    .filter(([, value]) => value === 'squeak')
    .map(([key]) => key);
    console.log(result);

//также можно комбинировать деструктуризации объекта и массива.



