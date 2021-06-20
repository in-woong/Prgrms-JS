export default function ($parent, initialTodoList){
  const $count = Object.assign(document.createElement('span'), {className: 'todo-count'});
  
  const buildDOM = () => $parent.appendChild($count);

  const render = todoList => { 
    const count = todoList.reduce((acc, item) => {
      return acc + (item.isCompleted ? 1 : 0);
    }, 0);
    $count.innerHTML = `완료 된 todo : <span class="count">${count}</span>`;
  }
  
  this.setState = newTodoList => {
    render(newTodoList);
  }

  buildDOM();
  render(initialTodoList);
}
