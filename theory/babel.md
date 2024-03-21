`init` - команда , которая инициирует процесс создания нового проекта. 

 Задает несколько вопросов о вашем проекте (например: имя, версия, описание и т. д.) и затем создает файл package.json в корне вашего проекта с введенными данными.

**package.json** - это основной файл конфигурации для Node.js проекта. В нем содержится метаинформация о проекте (например, имя, версия, автор), а также список зависимостей (библиотек и модулей), необходимых для работы проекта.
 
### Установка Babel
`npm install --save-dev @babel/core @babel/cli`

**--save-dev** указывает, что библиотека будет использоваться только для разработки

@babel - это namespace

npx - это инструмент, позволяющий запускать пакеты Node.js без необходимости устанавливать их глобально или добавлять их в зависимости проекта.

### Плагины Babel

например, для преобразования шаблонных строк:

`npm install --save-dev @babel/plugin-transform-template-literals`

**запуск:**

`npx babel src --out-dir build --plugins  @babel/plugin-transform-template-literals`
 
ИЛИ при наличии конфигурационного файла с плагинами 

`npx babel src --out-dir build`



### Конфигурационный файл 

название: .babelrc

формат: JSON

пример:
```json
{
  "plugins": [
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-block-scoping"
  ]
}

```

#### Универсальные предопределённые настройки (presets):

**babel-preset-env**

содержит все плагины для поддержания самого свежего стандарта ECMAScript

`npm install --save-dev @babel/preset-env`

формат JSON: 

```json
{
  "presets": [
    "@babel/env"
  ]
}
```

**Проверка браузера на поддержку частей языка:**

caniuse.com

### Автоматическая поддержка браузера

```json
"presets": [[
    "@babel/env",
    {
      "targets": {
        "edgi": "18",
        "chrome": "74"
      }
    }
]],
```
**поддержка нескольких версий браузера:**

```json
"presets": [[
    "@babel/env",
    {
      "targets": [
        "last 2 chrome versions"
      ]
    }
]],
```
по количеству пользователей:

`"targets": [
        "> 0.3%"
      ]`
кроме (например, internet explorer):

`"targets": [
        "not ie > 0"
      ]`


Список браузеров может быть указан и в package.json:

```json
"browserslist": [
        "last 2 chrome versions"
      ]
```
или в отдельном текстовом файле `.browserslistrc `

### Полифиллы. Corejs*

*core js содержится в babel-preset-env

```json
"presets": [[
    "@babel/env",
    {
      "corejs": 3,
      "useBuiltIns": "usage",
      "debug": true,
      "modules": false
    }
]],
```

`"useBuiltIns": "usage"` находит те места в коде, которые используют новые функции и подключает конкретные полифиллы

`"entry"` - добавит все полифиллы, необходимые браузеру

`"modules": false` означает, что при импорте файла будет использоваться стандартный синтаксис


### Работа с React 

npm install --save-dev @babel/preset-react








