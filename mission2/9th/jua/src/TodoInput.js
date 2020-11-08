export default function TodoInput($todoInput, $todoForm, data, todoList) {
  this.checkInitialization = () => {
    if (!$todoInput || !$todoForm) {
      throw new Error('DOM is not valid');
    }
  };

  this.checkInitialization();
  this.todoInput = $todoInput;
  this.todoForm = $todoForm;

  this.addTodo = (e) => {
    const { value } = this.todoInput;
    data.push({ text: value, isCompleted: false });
    todoList.setState(data);
    this.todoInput.value = '';
    e.preventDefault();
    this.todoInput.focus();
  };

  this.todoForm.addEventListener('submit', this.addTodo);
}
