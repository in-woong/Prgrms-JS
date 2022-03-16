import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import { api } from "./api.js";
import Loading from "./Loading.js";
import Users from "./Users.js";

const USER_NAME = "junsungchoi"

export default function App({ $target }) {
  this.$target = $target;
  this.state = {
    todos: [],
    loading: false,
    users: [],
  };

  this.initiate = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });

    const todoList = await api.getTodoList(USER_NAME);
    const users = await api.getUsers();
    this.setState({
      users,
      todos: todoList,
      loading: false,
    });
  }

  const todoList = new TodoList({
    $target: this.$target,
    initialState: this.state.todos,
    deleteTodo: async (id) => {
      if (!id) {
        const errMessage = "삭제할 데이터의 id를 확인 해주세요.";
        alert(errMessage);
        throw new Error(errMessage);
      }

      this.setState({
        ...this.state,
        loading: true,
      });

      await api.deleteTodo(USER_NAME, id);
      const todoList = await api.getTodoList(USER_NAME);
      this.setState({
        ...this.state,
        todos: todoList,
        loading: false,
      });
    },
    toggleTodo: async (id) => {
      if (!id) {
        const errMessage = "토글 할 데이터의 id를 확인 해주세요.";
        alert(errMessage);
        throw new Error(errMessage);
      }

      this.setState({
        ...this.state,
        loading: true,
      });

      await api.toggleTodo(USER_NAME, id);
      const todoList = await api.getTodoList(USER_NAME);
      this.setState({
        ...this.state,
        todos: todoList,
        loading: false,
      });
    },
  });

  const todoCount = new TodoCount({
    $target: this.$target,
    initialState: {
      todoCount: this.state.todos.length,
      completedCount: this.state.todos.filter(item => item.isCompleted).length,
    }
  });

  const todoInput = new TodoInput({
    $target: this.$target,
    addTodo: async (content) => {
      this.setState({
        ...this.state,
        loading: true,
      });
      const newTodo = await api.addTodo(USER_NAME, content);
      
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          newTodo,
        ],
        loading: false,
      });
    },
  });

  const todoLoading = new Loading({
    $target: this.$target,
    initialState: this.state.loading,
  })

  this.$target.addEventListener('removeAll', async () => {
    this.setState({
      ...this.state,
      loading: true,
    });

    await api.deleteAllTodo(USER_NAME);
    this.setState({
      ...this.state,
      todos: [],
      loading: false,
    });
  });

  const users = new Users({
    $target: this.$target,
    initialState: this.state.users,
    onClick: async (username) => {
      this.setState({
        ...this.state,
        loading: true,
      });
      
      const todos = await api.getTodoList(username);
      this.setState({
        ...this.state,
        todos,
        loading: false,
      });

      window.scrollTo({ top: 0 });
    }
  })

  this.setState = function(nextState) {
    this.state = nextState;
    todoList.setState(nextState.todos);
    todoCount.setState({
      todoCount: nextState.todos.length,
      completedCount: nextState.todos.filter(item => item.isCompleted).length,
    });
    todoLoading.setState(nextState.loading);
    users.setState(nextState.users);
  };

  this.initiate();
};
