import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import UserList from './UserList.js';
import { getTargetElement } from './validationUtil.js';
import { getTodos, addTodo, deleteTodo, deleteTodos, toggleTodo, getUsers } from './api.js';

function App() {
  const todoListElement = getTargetElement('#todo-list');
  const todoCountElement = getTargetElement('#todo-count');
  const todoInputElement = getTargetElement('#todo-input');
  const removeAllTodoBtn = getTargetElement('#remove-all-todo-btn');
  const userListElement = getTargetElement('#user-list');

  this.state = {
    todoListData: [],
    userListData: [],
    currentUser: null,
    loading: false,
  }
  
  this.setState = nextState => {
    this.state = {
      ...this.state,
      ...nextState,
    }

    if (this.state.todoListData) {
      this.todoList.setState(this.state.todoListData);
    }
    if (this.state.userListData) {
      this.userList.setState(this.state.userListData);
    }
    if (this.state.todoListData) {
      this.todoCount.render(this.state.todoListData);

    }
  }

  this.setUserListData = async () => {
    const initialUsers = await getUsers() || [];
    let currentUser = null;
    const mappedUsers = initialUsers.map((user, index) => {
      if (index === 0) {
        currentUser = user;
      }
      return {
        isSelected: index === 0,
        name: user,
      }
    });
    this.setState({
      userListData: mappedUsers,
      currentUser,
    })
  }

  this.setSpecificUser = userName => {
    const mappedUsers = this.state.userListData.map(user => ({
      isSelected: user.name === userName,
      name: user.name,
    }));
    this.setState({
      userListData: mappedUsers,
      currentUser: userName,
    })
    this.setTodoListData();
  }

  this.setTodoListData = async () => {
    if (this.state.currentUser) {
      const initialTodos = await getTodos(this.state.currentUser);
      this.setState({
        todoListData: initialTodos || [],
      })
    }
  }

  this.addTodo = async newTodo => {
    const response = await addTodo(this.state.currentUser, newTodo);
    const newTodos = [...this.state.todoListData, response];
    this.setState({
      todoListData: newTodos,
    })
  }

  this.toggleTodo = async todoId => {
    await toggleTodo(this.state.currentUser, todoId);
    const newTodos = this.state.todoListData.map(todo => {
      if (todoId === todo._id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    this.setState({
      todoListData: newTodos,
    })
  }

  this.deleteTodo = async todoId => {
    await deleteTodo(this.state.currentUser, todoId);
    const newTodos = this.state.todoListData.filter(todo => todo._id !== todoId);
    this.setState({
      todoListData: newTodos,
    })
  }

  this.removeAllTodos = async () => {
    await deleteTodos(this.state.currentUser);
    this.setState({
      todoListData: [],
    })
  }

  const removeAllEvent = new CustomEvent('removeAll');
  removeAllTodoBtn.addEventListener('click', function(e) {
    todoListElement.dispatchEvent(removeAllEvent);
  });

  todoListElement.addEventListener('removeAll', this.removeAllTodos)

  this.todoList = new TodoList(todoListElement, this.state.todoListData, this.toggleTodo, this.deleteTodo);
  this.todoCount = new TodoCount(todoCountElement, this.state.todoListData);
  this.todoInput = new TodoInput(todoInputElement, this.addTodo);
  this.userList = new UserList(userListElement, this.state.userListData, this.setSpecificUser);

  this.setUserListData();
  this.setTodoListData();
}  

export default App;
