# Переменные 
**Переменная** – имя места хранения данных. 
Используя имя переменной, можно получить доступ к области памяти, где хранятся данные.

**Объявление** через **let**, **const** (или устр. **var**). 

![данные в памяти](../images/dataInMemmory.png)

### let

Область видимости – блок, в котором let объявлена, и все её подблоки.

### var 
**Область видимости ограничивается:**
- функцией
- скриптом

*var можно переобъявлять.

«hoisting» var – обработка в начале запуска функции.

### const 
– неизменяемая переменная 

*const капсом – для значений, известных заранее

### Именование

- символы только '$' и '_'
- первый символ – НЕ цифра


**Зарезервированные ключевые слова** в ECMAScript 2015

break

case

class

catch

const

continue

debugger

default

delete

do

else

export

extends

finally

for

function

if

import

in

instanceof

let

new

return

super

switch

this

throw

try

typeof

var

void

while

with

yield