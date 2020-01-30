class TodoList {
  constructor(todoListId, parentId, todoItems) {
    this.todoData = [];
    this.todoStore = todoItems;
    this.$todoList = document.querySelector(todoListId);

    const $parent = document.querySelector(parentId);
    $parent.addEventListener('click', this.onClick.bind(this), false);
    $parent.addEventListener('delete-all', this.onPurge.bind(this), false);
  }

  setState(todos) {
    this.todoData = todos
    this.render();
  }

  render() {
    const buildHtml = (todo, idx) => {
      return `<div data-id=${idx}>
                <span data-cmd=del-${idx} ${todo.done ? 'class=done' : ''}>
                  ${todo.text}</span>
                <button data-cmd=done-${idx}>done</button>
              </div>`;
    };

    this.$todoList.innerHTML = this.todoData.map(buildHtml).join('');
  }

  onClick(e) {
    const action = e.target.dataset.cmd || '-';
    const [cmd, idx] = action.split('-'); //  #78 PR 을 참조했습니다.

    switch (cmd) {
      case 'done': this.todoStore.doneItem(idx); break;
      case 'del': this.todoStore.removeItem(idx); break;
    }
  }
  
  onPurge() {
    this.todoStore.purgeAll();
  }
}
