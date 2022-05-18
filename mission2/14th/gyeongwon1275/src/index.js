import TodoList from './modules/TodoList.js';
import TodoInput from './modules/TodoInput.js';
import TodoCount from './modules/TodoCount.js';
import { getLocalStorage, setLocalStorage, useState } from './modules/utils.js';

function App() {
  const initialState = getLocalStorage('todoList') || [];

  const state = new useState(initialState);

  const $container = document.querySelector('#root');

  new TodoInput({
    $container,
    onSubmit: ($input, getTodo) => {
      state.setState([getTodo($input.value.trim()), ...state.getState()]);
      $input.value = '';
    },
  });
  new TodoList({
    $container,
    state,
    onClick: event => {
      const $button = event.target.closest('button');

      if (!$button) return;

      const index = $button.parentNode.getAttribute('key');

      const newTodoList = [...state.getState()];

      newTodoList[index] = { ...newTodoList[index], isCompleted: true };

      state.setState(newTodoList);
    },
    listen: fn => {
      state.listen(fn);
    },
  });

  new TodoCount({
    $container,
    state,
    listen: fn => {
      state.listen(fn);
    },
  });

  window.addEventListener('removeAll', () => {
    state.setState([]);
  });

  state.listen(() => {
    setLocalStorage('todoList', state.getState());
  });
}

App();
