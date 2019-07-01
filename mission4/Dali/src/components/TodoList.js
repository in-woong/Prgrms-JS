function TodoList(params) {
  const $target = params.$target;
  let onRemove = null;
  let onToggleTodoUpdate = null;



  $target.addEventListener('click', function(e) {
    const id = e.target.closest('li').dataset.id;

    if (e.target.className === 'remove-button') {
      e.stopPropagation();
      onRemove(id)
    } else {
      onToggleTodoUpdate(id);
    }
  });

  this.setProps = function(props){
    onRemove = props.onRemove;
    onToggleTodoUpdate = props.onToggleTodoUpdate;
  };

  this.render = function(data) {
    console.log('data', data);
    const htmlString = data.map(function(todo) {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`;

      return `<li data-id="${
        todo._id
      }">${contentHTML} <button class="remove-button">Remove</button></li>`
    });

    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  };
}
export default TodoList;
