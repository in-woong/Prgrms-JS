import Controller from './core/Controller.js';
import Store from './core/Store.js';
import TodoPage from './pages/TodoPage.js';
import storage from './storage.js';
import { qs, paintTemplate } from './util/helper.js';
import InputFormView from './views/InputFormView.js';
import TodoCountView from './views/TodoCountView.js';
import TodoListView from './views/TodoListView.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  paintTemplate(qs('#app'), TodoPage());

  const store = new Store(storage);
  const view = {
    inputFormView: new InputFormView(),
    todoListView: new TodoListView(),
    todoCountView: new TodoCountView(),
  };

  new Controller(store, view);
}
