const TodoList = function ({$target, initialState, deleteTodo, toggleTodo}) {
  if (this === window) {
    throw new Error('new 키워드를 이용해 TodoList를 생성하세요');
  }

  this.state = initialState;
  const $section = document.createElement('section');
  
  $section.className = 'todo-list__todos-section';
  $section.addEventListener('click', (event) => {
    const {target} = event;
    const {action} = target.dataset;
    const events = {
      'delete': deleteTodo,
      'toggle': toggleTodo,
    }

    if (!action) {
      return;
    }
    events[action](event);
  })

  this.render = function () {
    const todoListHTMLString = this.state
      .map(({ text, isCompleted }) =>
        isCompleted
        ? `
            <li>
              ${checkBoxHTMLString('checked')}
              <span><s>${text}</s></span> 
              ${deleteTodoButtonHTMLString}
            </li>
          ` 
        : `
            <li>
              ${checkBoxHTMLString()}
              <span>${text}</span>
              ${deleteTodoButtonHTMLString}
            </li>
          `
      )
      .join('');	

    $section.innerHTML = `<ul>${todoListHTMLString}</ul>`;
    $target.appendChild($section);
  };

  this.setState = (nextState) => {
    this.state = nextState;
    
    LocalStorage.set('todos', nextState);
    this.render();
  };

  this.render();
};
