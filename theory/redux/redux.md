#redux #react-redux #reducer 
# Redux

Redux - это библиотека, которая позволяет предсказуемо управлять состоянием благодаря централизованному хранилищу.

Решает:
1. Запутанность кода при использовании props;
2. Сложное отслеживание изменений состояния;

Упрощает:
3. Тестирование за счёт reducer - чистая функция;
4. Перемещение по истории событий

Начало работы: 
1. install:

redux

react-redux - связывает состояние redux с react-компонентами

2. создать:
```js
const store = createStore(reducer);
```
3. создать reducer:
```js
const reducer = (state, action) => {

}
```

4. создать:
```js
action =  {
 type: '',
 payload: ''
}
```
Существует **Naming Convention** для action:

- Отправка запроса: FETCH_..._REQUEST
- Получение успешного ответа: FETCH_..._SUCCESS
- Получение ошибки: FETCH_..._FAILURE


5. осуществить логику в reducer:
```js
const reducer = (state, action) => {
    switch (action.type) {
        
        default: 
            return state
    }
}
```
*reducer - может быть только чистой функцией!!!
6. задать первоначальное состояние:
```js
const defaulrState = {
    cash: 0
}
```
7. указать в reducer первоначальное состояние:
```js
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        
        default: 
            return state
    }
}
```

*State в redux - **неизменяемое**, поэтому каждый раз возвращать нужно новый объект

```js
return {...state, cash: state.cash + action.payload}
```

8. с помощью react-redux обернуть приложение в <Proveder>
```js
<Proveder store={store}>
 <App/>
</Proveder>
```
9. изменять состояние из компонента нужно через dispatch:
```js
const dispatch = useDispatch(); 
dispatch({type: '', payload: })
```
*ранее использовался `bindActionCreators`, который диспатчит события
```js
const { dispatch } = store;

const { inc, dec, rnd } =
  bindActionCreators(actions, dispatch);
```
10. получить состояние можно (useSelector параметром принимает функцию, которая принимает состояние):
```js
const cash = useSelector( state => state.cash)
```
*ранее использовалась функция `connect` как HOC, для которой в отдельной функции описывалось, как именно нужно достать данные для компонента: 
```js
import { connect } from 'react-redux';

const Counter = ({ counter }) => {
  ...
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Counter);
```

Для получения доступа к пропсам, переданным в компонент React извне (из родительского компонента или контейнера) может использоваться `ownProps`. 
Это позволяет компонентам React взаимодействовать с внешним миром и принимать во внимание различные параметры, передаваемые им через пропсы.
### Структура проекта:
1. папка store 
2. папка reducers
3. папка actions

### Контекст:
В react-redux используется **компонент Provider**, который предоставляет контекст Redux store для всего дерева компонентов React в приложении. 

**Provider реализует подписку на изменения store**, тем самым приложение обновляется.
```js
import { Provider } from 'react-redux';
import store from './store'; 
import App from './App'; 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
### Объединить reducer: 
```js
const rootReducer = combineReducers( {
 cash: cashreducer,
 customers: customerReducer

} )
```
*в объект можно передавать как названия reducer, так и давать новые названия по принципу ключ-значение

### redux-devtools-extension

**Инструменты разработчика** представляют собой графический интерфейс и позволяют отслеживать изменения состояния

DevTools доступны при использовании `ComposeWithDevTools()`
```js
const store = createStore(reducer, ComposeWithDevTools());
```
Далее необходимо установить расширение для браузера - **Redux DevTools**.

### Асинхронность в redux
install redux-thunk
```js
const store = createStore(reducer, ComposeWithDevTools(applyMidleware(thunk)));
```
*позволяет внутри сторонних функций использовать dispatch
