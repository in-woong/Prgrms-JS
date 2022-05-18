function TodoInput({ todoInputContainer, onCreate, removeAll }) {
  const todoForm = document.createElement('form');
  const inputLabel = document.createElement('label');
  const todoInput = document.createElement('input');
  const inputBtn = document.createElement('button');
  const removeAllBtn = document.createElement('button');

  this.render = function () {
    todoInput.type = 'text';
    todoInput.id = 'todoInput';
    inputBtn.type = 'submit';
    inputBtn.textContent = '추가';
    inputLabel.htmlFor = 'todoInput';
    removeAllBtn.type = 'button';
    removeAllBtn.textContent = '모두삭제';

    inputLabel.append(todoInput);
    todoForm.append(inputLabel);
    todoForm.append(inputBtn);
    todoInputContainer.append(todoForm);
    todoInputContainer.append(removeAllBtn);
    todoInput.focus();

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (todoInput.value !== '') {
        const addTodoData = { text: todoInput.value, isCompleted: false };
        onCreate(addTodoData);
        todoInput.value = '';
      } else {
        throw new TypeError('할일이 없습니다');
      }
    });
    const customEvent = new Event('removeTodoAll');
    removeAllBtn.addEventListener('removeTodoAll', (e) => {
      removeAll();
    });
    removeAllBtn.addEventListener('click', (e) => {
      e.target.dispatchEvent(customEvent);
      todoInput.focus();
    });
  };

  this.render();
}

export default TodoInput;
