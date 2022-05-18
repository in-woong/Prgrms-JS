import App from './App.js';

import { MY_NAME, getTodos, getUsers } from './utils/api.js';

const $root = document.getElementById('root');
$root.innerHTML = `<h1>불러오는 중...</h1>`;

async function initialize() {
  const myTodos = await getTodos(MY_NAME, 1000);
  const users = await getUsers();
  const userTodos = [];
  new App({
    $target: $root,
    initialState: { myTodos, users, selectedUserName: '', userTodos },
  });
}

initialize();
