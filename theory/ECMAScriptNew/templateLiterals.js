// #templateLiterals #ECMAScript2015 #ECMAScript6 #ES6 #2015
// #шаблонныеСтроки

const user = 'Veronika';

console.log(`Hello, I'm ${user} I'm ${4 + 20} years old`);

//в фигурных скобках могут быть: переменная, выражение или код, который будет вычислен во время интерпретации строки (в т.ч. операции и вызовы функций)
//вложенные выражения шаблона
const x = 5;
const y = 3;
const result = `Результат выражения ${x} * (${y} + 2) равен ${x * (y + 2)}.`;
console.log(result);

//можно использовать `` для вставки html-кода (сохраняются отступы и пробелы) и комбинировать его с JS-кодом