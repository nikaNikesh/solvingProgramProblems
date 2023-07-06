
console.log('Преобразует строки в целое число: ' + Number.parseInt('726'));

console.log('Возвращает абсолютное значение числа: ' + Math.abs(-9));
console.log('Округляет до целого числа в меньшую сторону: ' + Math.floor(9.9));
console.log('Округляет до целого числа в большую сторону: ' + Math.ceil(9.9));
console.log('Округляет до целого числа: ' + Math.round(5.5));

console.log('Создает строку из последовательности значений Unicode: ' + String.fromCharCode(99, 97, 116));



let num = 3.14159;
let roundedNum = num.toFixed(2);
console.log('Округляет числа до указанного количества знаков после запятой и возвращает строку: ' + roundedNum);

let num2 = 42;
console.log('Возвращает число как строку, можно с указанием с/с: ' + num.toString(2));


let str = 'cat'
console.log('Возвращает символ по указанному индексу в строке: ' + str.charAt(1));
console.log('Объединяет две или более строк и возвращает новую строку: ' + str.concat('dog'));
console.log('Возвращает индекс первого вхождения указанной подстроки в строку : ' + str.indexOf('at'));





