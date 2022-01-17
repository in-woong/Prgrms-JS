export default function TodoList({$target, selectedUser, onClick}) {
  this.target = $target;
  this.selectedUser = selectedUser;
  this.$todoList = document.createElement('ul');
  this.$todoList.id = 'todo-list';

  this.state = {
    todos: [],
    selectedUser: this.selectedUser
  }

  this.render = async () => {
    this.$todoList.innerHTML = this.state.todos
      .map(({content, isCompleted, _id}) => `
        <li class="todo-list__item" id=${_id}>
          <input type="checkbox" class="todo-list__checkbox" data-action="toggle" ${isCompleted ? 'checked' : ''} />
            <span>${isCompleted ? `<s>${content}</s>`: content}</span>
            <button class="todo-list__button todo-list__button--delete-todo" data-action="delete">
              삭제
            </button>
          </li>
        `)
      .join('');
    
    this.target.appendChild(this.$todoList);
  }

  this.bindEvents = () => {
    this.$todoList.addEventListener('click', onClick);
  }
  
  this.setState = (nextState) => {
    this.state = {...this.state, ...nextState};

    this.render();
  }

  this.render();
  this.bindEvents();
}
