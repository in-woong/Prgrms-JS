import Header from './components/Header.js';
import Users from './components/Users.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import TodoCount from './components/TodoCount.js';
import Loading from './components/Loading.js';
import { fetchTodoAPI
  , addTodoAPI
  , deleteTodoAPI
  , removeAllAPI
  , toggleTodoAPI
  , fetchUsersAPI } from './util/api.js';
import { getTodoList
  , getCompletedTodoList
  , getTodoCount } from './util/getState.js';
import CreateElement from './util/CreateElement.js';
import { APP_ERROR } from './util/Error.js';

export default function ({ $target }) {
  try {
    if(!new.target) throw new Error(APP_ERROR);
    
    this.USER_NAME = prompt('username을 입력해주세요.') || 'wogha95';
    this.users = [];
    this.state = [];
    this.draggedTodo = '';

    const init = async () => {
      this.users = await fetchUsersAPI();
      this.state = await fetchTodoAPI(this.USER_NAME);

      this.header = new Header({
        initialState: this.USER_NAME,
        $target: $Header
      });
  
      this.todoList = new TodoList({
        initialState: getTodoList(this.state),
        $target: $TodoList,
        toggleTodo,
        deleteTodo,
        dragTodo,
        dropTodo
      });

      this.todoListCompleted = new TodoList({
        initialState: getCompletedTodoList(this.state),
        $target: $TodoListCompleted,
        toggleTodo,
        deleteTodo,
        dragTodo,
        dropTodo
      })
      
      this.todoForm = new TodoForm({
        $target: $TodoForm,
        addTodo
      });
  
      this.todoCount = new TodoCount({
        $target: $TodoCount,
        count: getTodoCount(this.state)
      });
  
      this.users = new Users({
        initialState: this.users,
        $target: $Users,
        changeUser
      });

      this.loading = new Loading({
        initialState: false,
        $target: $Loading
      })
    }

    // 유저 목록
    const $fragmentUsers = document.createDocumentFragment();
    const $Users = CreateElement('section', 'id', 'users');
    
    // 유저의 header, form, list, count
    const $fragmentTodo = document.createDocumentFragment();
    const $Todo = CreateElement('section', 'id', 'todo');
    const $Header = CreateElement('div', 'id', 'header');
    const $TodoForm = CreateElement('div', 'id', 'todo-form');
    const $TodoList = CreateElement('div', 'id', 'todo-list');
    const $TodoListCompleted = CreateElement('div', 'id', 'todo-list-completed');
    const $TodoCount = CreateElement('div', 'id', 'todo-count');
    const $Loading = CreateElement('div', 'class', 'loader none');
    $Todo.appendChild($Header);
    $Todo.appendChild($TodoForm);
    $Todo.appendChild($TodoList);
    $Todo.appendChild($TodoListCompleted);
    $Todo.appendChild($TodoCount);
    
    $fragmentUsers.appendChild($Users);
    $fragmentTodo.appendChild($Todo);
    $fragmentTodo.appendChild($Loading);
    $target.appendChild($fragmentUsers);
    $target.appendChild($fragmentTodo);

    const changeUser = async (userId) => {  // 유저 목록 변경
      this.loading.setState(true);
      this.USER_NAME = userId;
      this.state = await fetchTodoAPI(this.USER_NAME);
      this.loading.setState(false);
      this.header.setState(this.USER_NAME);
      changeTodo();
    }

    const changeTodo = () => {  // todo 변경
      this.todoList.setState(getTodoList(this.state));
      this.todoListCompleted.setState(getCompletedTodoList(this.state));
      this.todoCount.render(getTodoCount(this.state));
    }

    const addTodo = async (content) => {
      const newTodo = {
        _id: String(Date.now()),
        content,
        isCompleted: false
      }
      if(await addTodoAPI(this.USER_NAME, newTodo)) {
        this.state = [...this.state, newTodo ];
        changeTodo();
      }
    }

    const toggleTodo = async (todoId) => {
      if(await toggleTodoAPI(this.USER_NAME, todoId)) {
        this.state = this.state.map((todo) => {
          if(todo._id === todoId) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        });
        changeTodo();
      }
    }

    const deleteTodo = async (todoId) => {
      if(await deleteTodoAPI(this.USER_NAME, todoId)) {
        this.state = this.state.filter((todo) => {
          return todo._id !== todoId;
        })
        changeTodo();
      }
    }

    const dragTodo = (todoId) => {  // 드래그 대상
      this.draggedTodo = todoId;
    }

    const dropTodo = (dropId) => {  // 드랍 대상
      this.state = this.state.map((todo) => { // 드래그 대상의 isCompleted 변경
        if(todo._id === this.draggedTodo) {
          if(dropId === 'todo-list') todo.isCompleted = false;
          else if(dropId === 'todo-list-completed') todo.isCompleted = true;
        }
        return todo;
      });
      changeTodo();
    }

    const removeAllEvent = async () => {
      if(await removeAllAPI(this.USER_NAME)) {
        this.state = [];
        changeTodo();
      }
    }

    window.addEventListener('RemoveAllEvent', removeAllEvent);
    
    init();
  } catch (error) {
    console.log(error);
  }
}