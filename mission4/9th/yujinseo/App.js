import TodoList from './TodoList.js';
import { addTodo, removeTodo, toggleTodo, fetchTodoList, fetchUsers } from './api.js';
import TodoInput from './TodoInput.js';
import Users from './Users.js';
import Loading from './Loading.js';

function App($target, targetUsername) {
  this.state = {
    targetUsername: targetUsername,
    todos: [],
    users : [],
    loading: false 
  }

  const init = async () => {
    this.setState({
      ...this.state,
      loading: true
    })

    const todos = await fetchTodoList(this.state.targetUsername);
    const users = await fetchUsers();

    this.setState({
      ...this.state,
      todos,
      users,
      loading: false
    })
  }

  const $content = document.createElement('div')
  $content.className = 'content'
  $target.appendChild($content)

  const todoList = new TodoList({
    $app: $content,
    initialState: {
      todos: [],
      loading: false
    },
    onRemove: async (todoId) => {
      await removeTodo(this.state.targetUsername, todoId)
      await init();
    },
    onToggle: async (todoId) => {
      await toggleTodo(this.state.targetUsername, todoId)
      await init();
    }
  })

  new TodoInput({
    $app: $content,
    onSubmit : async (todoContent) => {
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          {
            content: todoContent
          }
        ]
      })

      await addTodo(this.state.targetUsername, todoContent)

      const newTodos = await fetchTodoList(this.state.targetUsername);
      this.setState({
        ...this.state,
        todos: newTodos,
        loading: true
      })
    }
  });

  const userList = new Users({
    $app: $target,
    userList: this.state.users,
    onClick: 
      async (selectedUser) => {
        this.setState({
          ...this.state,
          targetUsername : selectedUser
        })
        const todos = await fetchTodoList(this.state.targetUsername)
        this.setState({
          ...this.state,
          todos
        })
      }
  });

  const loading = new Loading({
    $app: $target,
    initialState : { isLoading: false }
  })

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState({
      todos: this.state.todos,
      targetUsername: this.state.targetUsername,
      isLoading: this.state.loading
    })
   
    userList.setState({
      users: this.state.users
    })

    loading.setState({
      isLoading: this.state.loading
    })
  }

  init();
}

export default App;