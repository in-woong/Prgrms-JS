const TodoInput = function ($target, {addTodo, removeAllTodos}) {
  const $section = document.createElement('section');
  $section.className = 'todo-list__input-section';

  $section.addEventListener('click', (event) => {
    const {target} = event;
    const {action} = target.dataset;
    const events = {
      'create': addTodo,
      'remove-all': removeAllTodos
    }

    if (!action) {
      return;
    }
    events[action](event);
  })

  $section.addEventListener('keyup', (event) => {
    const {target} = event;

    if (event.key !== 'Enter') {
      return;
    }
    if (target.id === 'todo-list__input') {
      addTodo(event);
    }
  })

  this.render = () => {
    $section.innerHTML = `
      ${todoInputHTMLString}
      ${createTodoButtonHTMLString}    
      ${removeAllTodosButtonHTMLString}
    `
    $target.appendChild($section);
    $('input', $section).value = '';
    $('input', $section).focus();
  }

  this.render();
}
