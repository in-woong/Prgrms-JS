'use strict';

import Todo from './Todo/Todo.js';

export default class App {
  constructor() {
    const targets = ['yesterday-todo', 'today-todo', 'tommorow-todo'];
    const main = document.getElementById('main');
    const h1 = document.createElement('h1');
    h1.textContent = '문건우의 투두리스트';
    main.appendChild(h1);

    targets.forEach((target) => {
      new Todo(target);
    });
  }
}
