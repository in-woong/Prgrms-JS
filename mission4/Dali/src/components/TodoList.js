function TodoList(params) {
  const $target = params.$target;

  $target.addEventListener('click', e => {
    const id = e.target.closest('li').dataset.id;

    if (e.target.className === 'remove-button') {
      e.stopPropagation();
      this.onRemove(id)
    } else {
      this.onToggleTodoUpdate(id);
    }
  });
  this.setProps = function (props) {
    Object.assign(this, {...props});
    console.log(this);
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
