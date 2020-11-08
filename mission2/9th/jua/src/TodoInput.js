import { checkNewKeyword, checkTarget } from './validation.js'

export default function TodoInput($todoInput, $todoForm, data, todoList) {
  this.validation = () => {
    checkNewKeyword();
    checkTarget($todoInput);
    checkTarget($todoForm);
  };

  this.validation();
  this.$todoInput = $todoInput;
  this.$todoForm = $todoForm;

  this.addTodo = (e) => {
    const { value } = this.$todoInput;
    data.push({ text: value, isCompleted: false });
    todoList.setState(data);
    this.$todoInput.value = '';
    e.preventDefault();
    this.$todoInput.focus();
  };

  this.$todoForm.addEventListener('submit', this.addTodo);
}
