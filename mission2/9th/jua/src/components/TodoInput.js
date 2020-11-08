import { checkNewKeyword, checkTarget } from '../validation.js'

export default function TodoInput($todoInput, $todoForm, app) {
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
    if (value) {
      app.addTodo(value);
    }
    this.$todoInput.value = '';
    // submit 이후에도 막힘없이 추가할 수 있도록
    e.preventDefault();
    this.$todoInput.focus();
  };

  this.$todoForm.addEventListener('submit', this.addTodo);
}
