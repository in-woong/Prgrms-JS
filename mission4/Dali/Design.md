## Design 

0. Scaffolding

```typescript

src
- Design.md - doc
- index.html  - template
- main.js - main application 
- src 
-- api 
--- index.js
-- components 
--- TodoForm.js 
--- TodoApp.js
--- TodoList.js
- utils 
-- dom.js
``` 

1. API Refactor

1.1 API Refactor  

각각의 crud 함수들을 빼냄 
함수중에서 중복들이 있을 수 있는 요소들 
common
- fetch로 
* baseUrl + url 
* option 
인자를 받아서 실행하는 부분이 대체로 같다.

- fetch 
-- option -> method ,headers ,body ...


1.2 고민한 부분 
1.2.1 커먼으로 빠질 떄  

baseUrl/${username}은 비슷하나 
${baseUrl}/${username}/${id}/toggle 이런 부분이 있어서 어떻게 헤야 할지 

1.2.2  Error Handling 

 
export default {
  fetchData,
  toggleTodoComplete,
  deleteTodo,
  addTodo
}

