
# Типы данных

Типы данных в JavaScript определяют тип данных, которые может хранить переменная.
Существует 8 типов данных (7 из них - примитивные).

## Примитивные:

Примитив — одна из простейших форм данных.

Ключевой характеристикой примитивов является то, что к ним не привязаны никакие свойства/методы.

Однако с помощью **механизма автоматического преобразования типов** boxing типы данных могут оборачиваться в соответствующий объект-обёртку, чтобы иметь возможность вызвать метод.
То есть объекты-обёртки типов предоставляют методы и свойства для работы с соответствующими примитивными значениями.

### Number 
Числа. Можно выполнять математические операции.

**Infinity** - математическую бесконечность. Больше любого числа.

**NaN** означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции.

### BigInt
Тип данных для безопасной работы с целыми числами за пределами диапазона ±(253-1). 

Создать значение типа BigInt: добавить "n" в конец числового литерала.

### String
Строка должна быть заключена в двойные либо одинарные кавычки, между ними нет разницы.

Обратные кавычки позволяют встраивать выражения в строку, заключая их в ${…}. 

Например:

```
let name = "Иван";

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
```

### Boolean

Логический тип, принимает и хранит только **true** или **false**.

### Null

В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках.


Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

Ещё используется для присвоения переменной «пустого» или «неизвестного» значения. 

### Undefined

Означает «значение не было присвоено». 

Ещё используется для проверок, была ли переменная назначена.

### symbol
Символы являются нововведением JavaScript начиная с ECMAScript 2015.
Используется для уникальных идентификаторов.

## Typeof
Оператор typeof возвращает тип аргумента.

```javascript
// Обычный синтаксис
typeof 5 // Выведет "number"
// Синтаксис, напоминающий вызов функции (часто для выражений)
typeof (50 + " Квартир"); // Выведет "string"
```

Pезультатом вызова typeof null является "object". Это официально признанная ошибка в typeof

*Вызов typeof alert возвращает "function", потому что alert является функцией. Мы изучим функции в следующих главах, где заодно увидим, что в JavaScript нет специального типа «функция». Функции относятся к объектному типу. Но typeof обрабатывает их особым образом, возвращая "function". Так тоже повелось от создания JavaScript. Формально это неверно, но может быть удобным на практике.


## Объекты:
Объекты представляют собой коллекции свойств, где каждое свойство состоит из пары "ключ-значение",  и используются для хранения и манипулирования данными.
Объекты имеют присвоенные им методы и свойства.

- array
- function
- object
- date
- regExp
- set

## Встроенные объекты (встроенные классы/типы)

Это объекты, которые предоставляются самим языком и встроены в его исполнительную среду.

**Object:** Этот объект является базовым для всех объектов в JavaScript и предоставляет функциональность для создания и манипуляции объектами.

**Array:** Объект Array представляет упорядоченную коллекцию элементов. Он предоставляет методы для работы с массивами, такие как добавление, удаление и изменение элементов, а также множество встроенных свойств и методов.

**String:** Объект String представляет последовательность символов и предоставляет методы для работы со строками, такие как поиск подстроки, извлечение символов, замена и т. д. 

**Number:** Объект Number предоставляет функциональность для работы с числами. Он предоставляет методы для выполнения математических операций, таких как сложение, вычитание, умножение и деление, а также для форматирования чисел и работы с числовыми значениями.

**Boolean:** Объект Boolean представляет логическое значение true или false и предоставляет методы для работы с логическими операциями.

**Date:** Объект Date используется для работы с датами и временем. Он предоставляет методы для получения, установки и форматирования даты и времени.

**Math:** Объект Math предоставляет математические методы и константы для выполнения различных математических операций, таких как округление чисел, вычисление тригонометрических функций, генерация случайных чисел и др.

## Статические и нестатические методы объектов

**Статические** методы определены непосредственно в самом классе или конструкторе. Используются для выполнения операций, не зависящих от конкретных значений свойств экземпляров.
Часто называют статические методы "методами класса".

**Нестатические** методы определены внутри прототипа объекта и связаны с каждым созданным экземляром. Часто нестатические метода называют "методами объекта".

