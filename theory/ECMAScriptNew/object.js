// #object #ECMAScript2015 #ECMAScript6 #ES6 #2015


const x = 10;
const y = 30;

/*
const point = {
    x: x,
    y: y,
};
*/
//вместо записи выше - упрощённое создание объекта, когда ключ совпадает с именем переменной:

const point = { x, y};
console.log(point);

//упрощённое включение функции как свойство объекта (без ключевого слова function)

const user = 'Veronika';
const age = 24;

const person = {
    user,
    age,
    print() {
       console.log('printFunction');
    }
};

person.print();


//#.assign #Object.assign #ECMAScript2015 #ECMAScript6 #ES6 #2015
//перезаписывание свойств объекта
const defaults = {
    host: 'localhost',
    drName: 'blog',
    user: 'admin',
};

const userData = {
    user: 'Veronika',
    password: 'qwerty',
};

Object.assign(defaults, userData);
console.log(defaults);

//можно перезаписывать свойства в новый объект:
//const result = Object.assign({}, defaults, userData);

//создание поверхностной копии #shallowCopy #shallow #поверхностнаяКопия #ECMAScript2015 #ECMAScript6 #ES6 #2015

const people = {
    name: 'Bob',
    friends: ['Mark', 'Elis']
};
const shallowCopy = Object.assign({}, people);