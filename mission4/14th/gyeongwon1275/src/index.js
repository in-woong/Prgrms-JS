import TodoList from './modules/TodoList.js';
import TodoInput from './modules/TodoInput.js';
import TodoCount from './modules/TodoCount.js';
import Users from './modules/Users.js';
import { useState } from './utils.js';
import {
  addTodo,
  completeTodo,
  deleteAllTodo,
  getTodo,
  getUsers,
  USER_NAME,
} from './api.js';

async function App($container) {
  const initialTodo = (await getTodo()) || [];

  const state = new useState({ userName: USER_NAME, todo: initialTodo });

  const updateTodo = async (userName = USER_NAME) => {
    state.setState({ userName, todo: await getTodo(userName) });
  };

  const users = await getUsers();

  Users({
    $container: document.querySelector('section.users'),
    users: users.filter(user => user !== USER_NAME),
    defaultUser: USER_NAME,
    onSelect: async event => {
      await updateTodo(event.target.value);
    },
  });

  TodoInput({
    onSubmit: async event => {
      event.preventDefault();
      const $form = event.target;
      const $input = $form.querySelector('input');

      const { userName } = state.getState();
      await addTodo(userName, $input.value);
      await updateTodo(userName);

      $input.value = '';
    },
    onClick: event => {
      event.target.dispatchEvent(new CustomEvent('removeAll'));
    },

    handleRemoveAll: async () => {
      const { userName } = state.getState();
      await deleteAllTodo(userName);
      await updateTodo(userName);
    },
  });

  const todolist = new TodoList({
    $container: document.querySelector('section.todo-list'),
    state,
    onClick: async event => {
      const $button = event.target.closest('button');

      if (!$button) return;

      const id = $button.parentNode.getAttribute('key');
      const { userName } = state.getState();

      await completeTodo(userName, id);
      await updateTodo(userName);
    },
  });

  const todoCount = new TodoCount({
    $container,
    state,
  });

  state.listen(() => {
    todolist.render(state);
  });

  state.listen(() => {
    todoCount.render(state);
  });
}

App(document.querySelector('#root'));
