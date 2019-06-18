const getCompletedClass = isCompleted => isCompleted ? 'completed-todo' : '';

const todoListTemplate = (todo)=> {
  return `<li class="todo-item-${todo.id}"
                data-id="${todo.id}"
            >
            <span data-id="todo-text"
                  class="${getCompletedClass(todo.isCompleted)}"  
                >${todo.text}
            </span>
            <button
                data-id="remove-todo" 
                class="remove-todo-btn">삭제
            </button>
          </li>`;
};

const todoCountTemplate = (todoCount)=> {
  return `<span class="todo-count">할일 갯수 : ${todoCount}</span></span>`;
};
export {
  todoListTemplate,
  todoCountTemplate
}
