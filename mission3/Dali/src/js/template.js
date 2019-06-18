const todoListTemplate = (todo)=> {
  return `<li class="todo-item-${todo.id}"
                data-id="${todo.id}"
            >
            <span data-id="todo-text">${todo.text}</span>
            <button
                data-id="remove-todo" 
                class="remove-todo-btn">삭제
            </button>
          </li>`;
};
export {
  todoListTemplate,
}
