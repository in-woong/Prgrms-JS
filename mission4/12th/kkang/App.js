import TodoList from './TodoList.js';
import Users from './Users.js';
import TodoInput from './TodoInput.js';
import { 
  fetchAddTodo,
  fetchDeleteTodo,
  fetchToggleTodo,
  fetchDeleteAllTodos,
  fetchGetUsers,
  fetchGetUserTodos
} from './api.js';
import { $ } from './helpers.js';
import TodoAllDelete from './TodoAllDelete.js';

export default function App($target, selectedUser) {
  this.target = $target;
  this.state = { 
    selectedUser,
    userList: [],
    todos: [],
  }

  this.onSelect = async (e) => {
    if (!e.target.className === 'user-list__user') {
      return;
    }

    const userId = e.target.dataset.id;
    this.setState({...this.state, selectedUser: userId});

    const newTodos = await this.getUserTodos();
    this.setState({todos: newTodos});
  }

  this.addTodo = async (todo) => {
    const response = await fetchAddTodo(this.state.selectedUser, todo);

    if (!response.ok) {
      return;
    }

    const todoInfo = await response.json();

    this.setState({
      todos: [...this.state.todos, 
        {content: todo, isCompleted: false, _id: todoInfo.id}
      ]
    })
  }

  this.deleteTodo = async (e) => {
    const {id} = e.target.closest('li');

    const response = await fetchDeleteTodo(this.state.selectedUser, id);

    if (!response.ok) {
      return;
    }

    this.setState({
      todos: this.state.todos.filter(todo => todo._id !== id)
    })
  };

  this.toggleTodo = async (e) => {
    const {id} = e.target.closest('li');

    const response = await fetchToggleTodo(this.state.selectedUser, id);

    if (!response.ok) {
      return;
    }

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      }
    )})
  }

  this.onClick = (e) => {
    if (e.target.dataset.action === 'delete') {
      this.deleteTodo(e);

      return;
    }
    if (e.target.dataset.action === 'toggle') {
      this.toggleTodo(e);
    }
  }

  this.onSubmit = (e) => {
    e.preventDefault();
    
    const input = $('input', e.target);
    const {value} = input;

    if (!value) {
      alert('할 일을 입력하세요.');
      input.focus();

      return;
    }
    this.addTodo(value);
    input.value = '';
  }

  this.onAllDelete = async () => {
    const response = await fetchDeleteAllTodos(this.state.selectedUser);

    if (!response.ok) {
      return;
    }

    this.setState({
      todos: [],
    })
  }

  this.users = new Users({
    $target: this.target,
    selectedUser: this.state.selectedUser,
    userList: this.state.userList,
    onSelect: this.onSelect,
  })

  this.todoList = new TodoList({
    $target: this.target,
    selectedUser: this.state.selectedUser,
    onClick: this.onClick,
  })

  this.todoInput = new TodoInput({
    $target: this.target,
    onSubmit: this.onSubmit,
  })

  this.todoAllDelete = new TodoAllDelete({
    $target: this.target,
    onAllDelete: this.onAllDelete,
  })

  this.getUsers = async () => {
    const response = await fetchGetUsers();

    if (response.ok) {
      const users = await response.json();

      return users;
    }
    throw new Error('에러 발생');
  }

  this.getUserTodos = async () => {
    const response = await fetchGetUserTodos(this.state.selectedUser);

    if (response.ok) {
      const users = await response.json();
  
      return users;
    }
    throw new Error('에러 발생');
  }

  this.setState = (nextState) => {
    this.state = {...this.state, ...nextState};
    
    this.users.setState({
      userList: this.state.userList,
      selectedUser: this.state.selectedUser,
      onSelect: this.onSelect
    });
    this.todoList.setState({
      selectedUser: this.state.selectedUser,
      todos: this.state.todos,
    });
    this.todoInput.render();
    this.todoAllDelete.render();
  }

  this.init = async () => {
    const userList = await this.getUsers();

    if (!userList.some((v) => v === this.state.selectedUser)) {
      [this.state.selectedUser] = userList;
    }
    
    const todos = await this.getUserTodos();

    this.setState({...this.state, userList, todos});
  }

  this.init();
}
