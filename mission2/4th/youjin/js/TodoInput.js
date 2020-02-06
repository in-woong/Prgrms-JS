import validator from './validate.js';

function TodoInput(addTodo, customEvent) {
  validator.isValidInstance(this, TodoInput);

  this.addTodo = addTodo;
  this.customEvent = customEvent;

  this.$form = document.querySelector('.form-todo');
  this.$input = document.querySelector('#input-todo');
  this.$btnRemoveAll = document.querySelector('.btn-remove-all');

  this.handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      text: validator.isEmptyText(this.$input.value),
      isCompleted: false
    };

    this.addTodo(todo);
    this.$input.value = '';
    this.$input.focus(); 
  }
  
  this.handleClick = () => {
    const removeAllEvent = new CustomEvent('removeAll');
    this.customEvent(removeAllEvent);
  }

  this.$form.addEventListener('submit', this.handleSubmit);
  this.$btnRemoveAll.addEventListener('click', this.handleClick);
}

export default TodoInput;