import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import Users from './components/Users.js';

import {
  MY_NAME,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteAllTodos,
  getUsers,
} from './utils/api.js';

export default function App({ $target, initialState }) {
  $target.innerHTML = '';

  this.state = initialState;

  this.setState = async (nextState) => {
    this.state = nextState;

    const { myTodos, users, selectedUserName, userTodos } = this.state;

    this.todoList.setState(myTodos);
    this.todoCount.setState({
      totalCount: myTodos.length,
      completeCount: myTodos.filter((todo) => todo.isCompleted).length,
    });
    this.users.setState({ users, selectedUserName, userTodos });
  };

  this.updateMyTodos = async () => {
    this.todoList.renderLoader();
    const myTodos = await getTodos(MY_NAME, 1000);
    this.setState({ ...this.state, myTodos });
  };

  this.todoInput = new TodoInput({
    $target,
    onSubmit: async ({ content }) => {
      await addTodo(MY_NAME, content);
      this.updateMyTodos();
    },
  });

  this.todoList = new TodoList({
    $target,
    initialState: this.state.myTodos,
    onStatusChange: async (id) => {
      await toggleTodo(MY_NAME, id);
      this.updateMyTodos();
    },
    onDelete: async (id) => {
      await deleteTodo(MY_NAME, id);
      this.updateMyTodos();
    },
  });

  $target.addEventListener('removeAll', async (event) => {
    await deleteAllTodos(MY_NAME);
    this.updateMyTodos();
  });

  this.todoCount = new TodoCount({
    $target,
    initialState: {
      totalCount: this.state.myTodos.length,
      completeCount: this.state.myTodos.filter((todo) => todo.isCompleted)
        .length,
    },
  });

  this.users = new Users({
    $target,
    initialState: {
      users: this.state.users,
      selectedUserName: '',
      userTodos: [],
    },
    getUserTodos: async (selectedUserName) => {
      this.users.renderLoader();
      const users = await getUsers(1000);
      const userTodos = await getTodos(selectedUserName);
      this.setState({ ...this.state, users, selectedUserName, userTodos });

      document.body.scrollTop = document.body.scrollHeight;
    },
  });
}
