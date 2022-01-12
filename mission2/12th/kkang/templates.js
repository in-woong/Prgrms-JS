const todoInputHTMLString = `
  <input id="todo-list__input" 
    type="text" placeholder="할 일을 입력하세요" />
`;

const createTodoButtonHTMLString = `
  <button class="todo-list__button todo-list__button--create-todo"
    data-action="create">
    할 일 추가
  </button>
`;

const removeAllTodosButtonHTMLString = `
  <button class="todo-list__button todo-list__button--remove-all-todos"
   data-action="remove-all">
    할 일 모두 삭제
  </button>
`;

const deleteTodoButtonHTMLString = `
  <button class="todo-list__button todo-list__button--delete-todo" data-action="delete">
    삭제
  </button>
`

const checkBoxHTMLString = (checked = '') => `
  <input type="checkbox" class="todo-list__checkbox" data-action="toggle" ${checked} />
`
