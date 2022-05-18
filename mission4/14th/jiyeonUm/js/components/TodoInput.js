import { addTodoAPI, deleteTodoListAPI } from '../api/api.js';

function TodoInput({ initialState, todoInputContainer, onCreate, removeAll }) {
  this.user = initialState.selectUser;
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
      try {
        if (todoInput.value !== '' && this.user === 'jiyeonUm') {
          const addTodoData = { content: todoInput.value, isCompleted: false };
          const addTodoAPIResultData = addTodoAPI({
            addTodoData,
            addTodo: (result) => {
              onCreate(result);
            },
          });
          todoInput.value = '';
        } else {
          throw new Error('사용자를 확인해주세요');
        }
      } catch (error) {
        console.log(error);
      }
    });
    const customEvent = new Event('removeTodoAll');
    removeAllBtn.addEventListener('removeTodoAll', (e) => {
      try {
        if (this.user === 'jiyeonUm') {
          deleteTodoListAPI({
            deleteTodoList: (result) => {
              const message = result.message.split(' ');
              removeAll(message);
            },
          });
        } else {
          throw new Error('삭제할 수 없는 사용자 입니다.');
        }
      } catch (error) {
        console.log(error);
      }
    });
    removeAllBtn.addEventListener('click', (e) => {
      e.target.dispatchEvent(customEvent);
      todoInput.focus();
    });
  };
  this.setUserState = (user) => {
    this.user = user;
  };
  this.render();
}

export default TodoInput;
