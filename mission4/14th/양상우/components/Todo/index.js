import { TodoCount } from '../TodoCount/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoInput } from '../TodoInput/index.js';
import { REMOVE_ALL } from '../../constant/CustomEventType.js';
import {
  deleteTodo,
  deleteAllTodo,
  postTodo,
  toggleTodo,
} from '../../util/fetchAPI.js';

export function Todo({ $target, initialState, getIsCompletedTodo }) {
  this.state = initialState;

  this.setState = async function (nextState) {
    const todo = await nextState;
    this.state = { data: [...todo] };
    todoList.setState(this.state.data);
    todoCount.setState(this.state.data);
  };

  this.loading = function () {
    const markup = `
    <div class="loading-text">
    불러오는중..
    </div> 
    `;

    $target.querySelector('.todo-list').innerHTML = markup;
  };

  const todoInput = new TodoInput({
    $target,
    onSubmit: async (todoText) => {
      this.loading();
      await postTodo(todoText);
      this.setState(await getIsCompletedTodo());
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: this.state.data,
    onClick: async (id) => {
      this.loading();
      await toggleTodo(id);
      this.setState(await getIsCompletedTodo());
    },
    onRemove: async (id) => {
      this.loading();
      await deleteTodo(id);
      this.setState(await getIsCompletedTodo());
    },
  });

  const todoCount = new TodoCount({ $target, initialState: this.state.data });

  window.addEventListener(REMOVE_ALL, async () => {
    this.loading();
    await deleteAllTodo();
    this.setState(await getIsCompletedTodo());
  });
}
