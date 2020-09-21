import TodoList from './TodoList.js';
import DoneTodoList from './DoneTodoList.js';
import TodoInput from './TodoInput.js';
import TodoRemoveAllButton from './TodoRemoveAllButton.js';

import isStrValidation from '../util/validation.js';
import debounce from '../util/debounce.js';
import { getTodo, updateTodoState, addTodo } from '../util/api.js';
import generateRandomStr from '../util/randomString.js';

export default function TodoContainer(appElement) {
  this.init = async () => {
    this.element = document.createElement('aside');
    this.element.id = 'todo-container';
    this.todoUser = 'dimsss';

    appElement.appendChild(this.element);

    const initData = await getTodo(this.todoUser);

    if (initData) {
      const [todoData, doneTodoData] = this.splitTodoData(initData);

      this.state = initData;
      this.todoList = new TodoList(this.element, todoData);
      this.doneTodoList = new DoneTodoList(this.element, doneTodoData);
    }

    this.todoInputComponent = new TodoInput(this.element);
    this.todoRemoveAllButtonComponent = new TodoRemoveAllButton(this.element);

    this.addEvent();
  }

  this.render = ({todoData, doneTodoData}) => {
    if (todoData) {
      this.todoList.render(todoData);
    }
    
    if (doneTodoData) {
      this.doneTodoList.render(doneTodoData);
    }
  }

  this.setState = (operation, {todoData, doneTodoData}) => {
    if (todoData) {
      this.todoList.setState(operation, todoData);
    }

    if (doneTodoData) {
      this.doneTodoList.setState(operation, doneTodoData);
    }
  }

  this.addEvent = () => {
    this.element.addEventListener('input', (e) => {
      if (e.target.id === 'todo-input' && isStrValidation(e.target.value)) {
        const todoData = {
          _id: generateRandomStr(),
          content: e.target.value,
          isCompleted: false
        }

        const addTodoResult = debounce(addTodo.bind(this, this.todoUser, todoData.content));

        if (addTodoResult) {
          this.setState('add', {todoData: addTodoResult})
        }
      }
    });

    this.element.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.effectAllowed = 'move';
    })

    this.element.addEventListener('drop', (e) => {
      e.preventDefault();

      const todoListDataId = e.dataTransfer.getData('todo-list');
      const doneTodoListDataId = e.dataTransfer.getData('done-todo-list');

      if (doneTodoListDataId === '' && e.toElement.id === 'todo-list') return;
      if (todoListDataId === '' && e.toElement.id === 'done-todo-list') return;

      if (todoListDataId) {
        const todoData = this.todoList.setState('get', todoListDataId);

        updateTodoState(this.todoUser, todoListDataId)
        todoData.isCompleted = true;

        this.todoList.setState('delete', todoData);
        this.doneTodoList.setState('add', todoData)
      } else {
        const todoData = this.doneTodoList.setState('get', doneTodoListDataId);

        updateTodoState(this.todoUser, doneTodoListDataId)

        todoData.isCompleted = false;
        this.doneTodoList.setState('delete', todoData);
        this.todoList.setState('add', todoData);
      }
    })

    this.element.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'LI') {
        const key = e.target.parentNode.id;

        e.dataTransfer.setData(key, e.target.id);
        e.dataTransfer.dropEffect = 'move';
      }
    })
  }

  this.splitTodoData = (data) => {
    const todoData = [];
    const doneTodoData = [];

    data.forEach(element => {
      if (element.isCompleted) {
        doneTodoData.push(element);
      } else {
        todoData.push(element);
      }
    });
    return [todoData, doneTodoData];
  }

  this.init();
}
