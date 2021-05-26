function TodoList({ $app, initialState, onRemove, onToggle }) {
  this.$target = document.createElement('div');
  $app.appendChild(this.$target);
  
  this.state = initialState || {
    targetUsername : null,
    todos: [],
    isLoading: false
  }

  this.$target.addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.id;

    if(e.target.className === 'remove-button') {
      e.stopPropagation();
      onRemove(todoId);
    } else {
      onToggle(todoId);
    }
  })

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    const { todos, targetUsername } = this.state;
    const listHtmlString = todos.map((todo) => {
      const todoContent = todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`;

      return `<li data-id="${todo._id}">${todoContent} <button class="remove-button">삭제</button></li>`;
    })

    this.$target.innerHTML = `<p>${targetUsername}의 할 일</p><ul>${listHtmlString.join('')}</ul>`;
  }
  
  this.render();
}

export default TodoList;