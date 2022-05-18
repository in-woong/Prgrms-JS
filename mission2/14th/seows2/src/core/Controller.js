import { createNextId } from '../util/helper.js';

export default class Controller {
  constructor(store, views) {
    const { inputFormView, todoListView, todoCountView } = views;

    this.store = store;

    this.inputFormView = inputFormView;
    this.todoListView = todoListView;
    this.todoCountView = todoCountView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.inputFormView
      .on('@submit', (event) => {
        const { text } = event.detail;
        const id = createNextId(this.store.getTodos());

        this.addTodo({ id, text, isCompleted: false });
      })
      .on('@removeAll', () => {
        this.removeAllTodos();
      });

    this.todoListView
      .on('@remove', (event) => {
        const { id } = event.detail;
        this.removeTodo(id);
      })
      .on('@toggle', (event) => {
        const { id } = event.detail;
        this.toggleTodoComplete(id);
      });
  }

  addTodo(todo) {
    this.store.addTodo(todo);
    this.render();
  }

  removeAllTodos() {
    this.store.removeAllTodos();
    this.render();
  }

  removeTodo(id) {
    this.store.removeTodo(id);
    this.render();
  }

  toggleTodoComplete(id) {
    this.store.toggleTodoComplete(id);
    this.render();
  }

  render() {
    this.inputFormView.show();
    this.todoListView.show(this.store.getTodos());
    this.todoCountView.show(this.store.getTodoCounts());
    this.inputFormView.resetInput();
  }
}
