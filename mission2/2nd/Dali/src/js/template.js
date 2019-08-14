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

const todoCountTemplate = (todoCount, completeCount)=> {
  return `<p>
            <span class="todo-count">할일 갯수 : ${todoCount}</span></span>
            <span class="todo-complete-count">완료한 할 일 갯수 : ${completeCount}</span></span>
          </p>`;
};
export {
  todoListTemplate,
  todoCountTemplate
}
