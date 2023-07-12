
console.log('Преобразует строки в целое число: ' + Number.parseInt('726'));

console.log('Возвращает абсолютное значение числа: ' + Math.abs(-9));
console.log('Округляет до целого числа в меньшую сторону: ' + Math.floor(9.9));
console.log('Округляет до целого числа в большую сторону: ' + Math.ceil(9.9));
console.log('Округляет до целого числа: ' + Math.round(5.5));

console.log('Создает строку из последовательности значений Unicode: ' + String.fromCharCode(99, 97, 116));



let num = 3.14159;
let roundedNum = num.toFixed(2);
console.log('Округляет числа до указанного количества знаков после запятой и возвращает строку: ' + roundedNum);

let num2 = 1024;
console.log('Возвращает число как строку, можно с указанием с/с: ' + num2.toString(2));


let str = 'crazy'
console.log('Возвращает символ по указанному индексу в строке: ' + str.charAt(1));
console.log('Объединяет две или более строк и возвращает новую строку: ' + str.concat('dog'));
console.log('Возвращает индекс первого вхождения указанной подстроки в строку : ' + str.indexOf('at'));
console.log('Возвращает строку в верхнем регистре : ' + str.toUpperCase());
let str2 = 'CRAZY'
st
console.log('Возвращает сроку в нижнем регистре : ' + str2.toLowerCase());
let str3 = ' apple   '
console.log('Возвращает новую строку без пробелов в начале и конце : ' + str3.trim());


let bigNumber = 123939930275656474883229984477373778282229239393932922722737n;
console.log('Возвращает строку с разделением на разряды : ' + bigNumber.toLocaleString());

let newBoolean = Boolean(false);
console.log('Возвращает примитив того же значения объекта: ' + newBoolean.valueOf());

const symbol = Symbol('описание');
console.log('Возвращает строковое представление символа: ' + symbol.toString());









