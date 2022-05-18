import { $ } from './util/selector.js';
import { getTodo, getUsers } from './util/fetchAPI.js';
import { Users, Todo } from './components/index.js';
import { createEl } from './util/createEl.js';

export default function App({ $target }) {
  const $Todo = createEl('div', 'Todo');
  const $Users = createEl('div', 'Users');
  $target.appendChild($Todo);
  $target.appendChild($Users);

  const $TodoDone = createEl('div', 'todoDone');
  const $TodoUnDone = createEl('div', 'todoUndone');
  $Todo.appendChild($TodoDone);
  $Todo.appendChild($TodoUnDone);

  this.getIsCompletedTodo = async (boolean) => {
    return [...(await getTodo())].filter(({ isCompleted }) => {
      return isCompleted === boolean;
    });
  };

  this.init = async () => {
    const users = new Users({
      $target: $Users,
      users: await getUsers(),
    });

    const todo1 = new Todo({
      $target: $TodoDone,
      initialState: {
        data: [...(await getTodo())].filter(({ isCompleted }) => {
          return isCompleted === true;
        }),
      },
      getIsCompletedTodo: async () => {
        todo2.setState(await this.getIsCompletedTodo(false));
        return await this.getIsCompletedTodo(true);
      },
    });

    const todo2 = new Todo({
      $target: $TodoUnDone,
      initialState: {
        data: [...(await getTodo())].filter(({ isCompleted }) => {
          return isCompleted === false;
        }),
      },
      getIsCompletedTodo: async () => {
        todo1.setState(await this.getIsCompletedTodo(true));
        return await this.getIsCompletedTodo(false);
      },
    });
  };

  this.init();
}
