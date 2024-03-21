# #props #пропс

Пропс - это информация, передаваемая в тег JSX, для взаимодействия компонентов друг с другомю

Чтение пропс (у дочернего элемента):

````jsx
function Avatar({ person, size = 100 }) {

}
```` 
* у `size` указано значение по умолчанию (используется ТОЛЬКО при отсутствии `size` или `size={undefined}`, А НЕ `size={null}` или `size={0}`)

Пример передачи сразу всех реквизитов: 
```jsx
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```
