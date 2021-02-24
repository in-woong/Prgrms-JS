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

  this.todoListData = [];
  this.userListData = [];
  this.currentUser = null;

  this.setUserListData = async () => {
    const initialUsers = await getUsers() || [];
    const mappedUsers = initialUsers.map((user, index) => {
      if (index === 0) {
        this.currentUser = user;
      }
      return {
        isSelected: index === 0,
        name: user,
      }
    });
    this.userList.setState(mappedUsers);
    this.userListData = mappedUsers;
    this.setTodoListData();
  }

  this.setSpecificUser = userName => {
    const mappedUsers = this.userListData.map(user => ({
      isSelected: user.name === userName,
      name: user.name,
    }));
    this.userList.setState(mappedUsers);
    this.userListData = mappedUsers;
    this.currentUser = userName;
    this.setTodoListData();
  }

  this.setTodoListData = async () => {
    const initialTodos = await getTodos(this.currentUser);
    this.todoListData = initialTodos;
    this.updateTodos(initialTodos);
  }

  this.addTodo = async newTodo => {
    const response = await addTodo(this.currentUser, newTodo);
    this.todoListData = [...this.todoListData, response];
    this.updateTodos(this.todoListData);
  }

  this.toggleTodo = async todoId => {
    await toggleTodo(this.currentUser, todoId);
    const newTodos = this.todoListData.map(todo => {
      if (todoId === todo._id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    console.log(newTodos)

    this.updateTodos(newTodos);
  }

  this.deleteTodo = async todoId => {
    await deleteTodo(this.currentUser, todoId);
    const newTodos = this.todoListData.filter(todo => todo._id !== todoId);
    this.updateTodos(newTodos);
  }

  this.removeAllTodos = async () => {
    await deleteTodos(this.currentUser);
    this.updateTodos([]);
  }

  this.updateTodos = (newTodos = []) => {
    this.todoListData = newTodos;
    this.todoList.setState(newTodos);
    this.todoCount.render(newTodos);
  }

  const removeAllEvent = new CustomEvent('removeAll');
  removeAllTodoBtn.addEventListener('click', function(e) {
    todoListElement.dispatchEvent(removeAllEvent);
  });

  todoListElement.addEventListener('removeAll', this.removeAllTodos)

  this.todoList = new TodoList(todoListElement, this.todoListData, this.toggleTodo, this.deleteTodo);
  this.todoCount = new TodoCount(todoCountElement, this.todoListData);
  this.todoInput = new TodoInput(todoInputElement, this.addTodo);
  this.userList = new UserList(userListElement, this.userListData, this.setSpecificUser);
  this.setUserListData();
  this.setTodoListData();
}  

export default App;
