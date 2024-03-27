# Webpack
 — это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».

НЕ разделяет на ресурсы (HTML, CSS, картинки, шрифты) и модули (динамические файлы), а всё считает модулем.
### Установка

`npm install --save-dev webpack webpack-cli`

**webpack-cli** — обёртка, позволяющая вызывать webpack из командной строки

### Режим сборки
- development
- production 

`npx install --mode development`


*webpack.config.js исполняется не в браузере, а в среде node.js

### export default: 

```js
module.exports = {
  mode: "development"
};
```

### Добавление команды npm start:

В файле package.json найти объект “scripts” и в него добавить:

`“start”: “webpack”`

## Loader

`npm install --sev-dev file-loader`

**Коллекция правил, как обрабатывать модули** находится в webpack.config.js (module, rules):


```js
module.exports = {
  mode: "development",
  
  module: {
    rules: [{
        test: /\.png$/
    ],
    use: [{
        loader: "file-loader"
        }
    }]
  }
};
```
где:
- **test** позволяет выбрать только те файлы, которые нужно обработать этим loader
- **use** указывает, какой лоудер необходимо использовать


### Конфигурация loader

Чтобы вместо кешированных названий файлов лоудер были кастомные названия и папки, необходимо добавить в объект `options`:


```js
module.exports = {
  mode: "development",
  
  module: {
    rules: [{
        test: /\.png$/
    ],
    use: [{
        loader: "file-loader",
        options: {
            outputPath: "images",
            name: "[name]-[sha1:hash:7].[ext]"
        }
        }
    }]
  }
};
```
где:
- `[name]` - оригинальное имя файла без расширения
- `saha1` - алгоритм хэша
- `hash:7` - первые семь символов


### babel loader

Чтобы не изменять сами библиотеки, необходимо указать их в исключениях `exclude`:

```js
module.exports = {
    mode: "development",

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}
```
*если нет `options`, то можно опустить `use`:

```js
module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
```

## webpack plugins

### Добавление index.html в сборку:

`npm install --save-dev html-webpack-plugin`

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

...

plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World',
      buildTime: new Date().toISOString(),
      template: 'public/index.html'
    })
  ]
```

### Работа с css в продакшн
`npm install --save-dev mini-css-extract-plugin`

В этом случае **style-loader** необходимо заменить на `MiniCssExtractPlugin.loader`

## webpack dev server

— отдельная утилита, которая запускает webpack build













