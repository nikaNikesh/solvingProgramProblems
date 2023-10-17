# #render and commit
# #рендеринг и фиксация в реакт
**Рендеринг** — это вызов ваших компонентов в React.
Причина рендеринга:
1. Первоначальный рендер компонента (реакт вызывает корневой компонент);
- использует `appendChild()` DOM API
2. Обновление состояния компонента или его родителя (реакт вызывает функцию-компонент, стейт которого и вызывает рендер).
- применит минимально необходимые операции, чтобы DOM соответствовал последнему результату рендеринга.