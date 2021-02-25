import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import UserList from './UserList.js';
import LoadingUI from './LoadingUI.js';
import { getTargetElement } from './validationUtil.js';
import { getTodos, addTodo, deleteTodo, deleteTodos, toggleTodo, getUsers } from './api.js';

function App() {
  const todoListElement = getTargetElement('#todo-list');
  const todoListCompletedElement = getTargetElement('#todo-list-completed');
  const todoCountElement = getTargetElement('#todo-count');
  const todoInputElement = getTargetElement('#todo-input');
  const removeAllTodoBtn = getTargetElement('#remove-all-todo-btn');
  const userListElement = getTargetElement('#user-list');
  const loadingUIElement = getTargetElement('#loading-ui');

  this.state = {
    todoListData: [],
    todoListDataIsCompleted: [],
    userListData: [],
    currentUser: null,
    isLoading: false,
  }
  
  this.setState = nextState => {
    this.state = {
      ...this.state,
      ...nextState,
    }

    this.todoList.setState(this.state.todoListData);
    this.todoListCompleted.setState(this.state.todoListDataIsCompleted);
    this.userList.setState(this.state.userListData);
    this.todoCount.render(this.state.todoListData);
    this.loadingUI.render(this.state.isLoading);
  }

  this.setUserListData = async () => {
    this.setState({
      isLoading: true,
    });

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
      isLoading: false,
    });

    await this.setTodoListData();
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
      this.setState({
        isLoading: true,
      });

      const initialTodos = await getTodos(this.state.currentUser);
      const unCompletedTodos = initialTodos.filter(item => !item.isCompleted)
      const completedTodos = initialTodos.filter(item => item.isCompleted)
      this.setState({
        todoListData: unCompletedTodos || [],
        todoListDataIsCompleted: completedTodos || [],
        isLoading: false,
      })
    }
  }

  this.addTodo = async newTodo => {
    this.setState({
      isLoading: true,
    });

    await addTodo(this.state.currentUser, newTodo);
    await this.setTodoListData();
  }

  this.toggleTodo = async todoId => {
    this.setState({
      isLoading: true,
    });

    await toggleTodo(this.state.currentUser, todoId);
    await this.setTodoListData();
  }

  this.deleteTodo = async todoId => {
    this.setState({
      isLoading: true,
    });

    await deleteTodo(this.state.currentUser, todoId);
    await this.setTodoListData();
  }

  this.removeAllTodos = async () => {
    this.setState({
      isLoading: true,
    });

    await deleteTodos(this.state.currentUser);
    await this.setTodoListData();
  }

  const removeAllEvent = new CustomEvent('removeAll');
  removeAllTodoBtn.addEventListener('click', function(e) {
    todoListElement.dispatchEvent(removeAllEvent);
  });

  todoListElement.addEventListener('removeAll', this.removeAllTodos)

  this.todoList = new TodoList(todoListElement, this.state.todoListData, this.toggleTodo, this.deleteTodo);
  this.todoListCompleted = new TodoList(todoListCompletedElement, this.state.todoListDataIsCompleted, this.toggleTodo, this.deleteTodo);
  this.todoCount = new TodoCount(todoCountElement, this.state.todoListData);
  this.todoInput = new TodoInput(todoInputElement, this.addTodo);
  this.userList = new UserList(userListElement, this.state.userListData, this.setSpecificUser);
  this.loadingUI = new LoadingUI(loadingUIElement, this.state.isLoading);

  this.setUserListData();
}  

export default App;
