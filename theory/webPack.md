# Webpack
 — это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».

### Установка

`npm install --save-dev webpack webpack-cli`

**webpack-cli** — обёртка, позволяющая вызывать webpack из командной строки

### Режим сборки
- development
- production 

`npx install --mode development`


*webpack.config.js исполняется не в браузере, а в среде node.js

### export default: 

module.exports = {
  mode: “development”
};

### Добавление команды npm start:

В файле package.json найти объект “scripts” и в него добавить:
“start”: “webpack”