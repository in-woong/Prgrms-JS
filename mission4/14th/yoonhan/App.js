'use strict';

import TodoList from './components/TodoList.js';
import errorMessages from './errorMessages.js';
import { DELETE_ALL_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './customEventTypes.js';
import { fetchTodoListData, addTodoItem, deleteTodoItem, deleteAllTodoItem } from './api.js';

export default function App($target) {
  // new keyword 동반하여 호출했는지 체크
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(errorMessages.DOM_TARGET_ERROR);
  }

  this.todoListComponents = [];
  this.state = {
    allTodoItems: [],
    completedTodoItems: [],
    incompletedTodoItems: [],
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.todoListComponents[0].setState(this.state.completedTodoItems)
    this.todoListComponents[1].setState(this.state.incompletedTodoItems)
  };

  this.render = async function () {
    this.todoListComponents.push(
      // 완료된 Todo List
      new TodoList(
        $target,
        this.state.completedTodoItems,
        this.todoListComponents.length
      )
    );
    this.todoListComponents.push(
      // 미완료된 Todo List
      new TodoList(
        $target,
        this.state.incompletedTodoItems,
        this.todoListComponents.length
      )
    );
    await this.setTodoListData();
  };

  // Todo 추가
  this.addTodo = async function (todoInputText) {
    if (todoInputText === '') {
      window.alert('할 일 텍스트를 입력해주세요!');
      return;
    }

    await addTodoItem(todoInputText);
    await this.setTodoListData();
  };

  this.setTodoListData = async function () {
    const data = await fetchTodoListData();
    this.setState({
      allTodoItems: data,
      completedTodoItems: data.filter((todoItem) => todoItem.isCompleted),
      incompletedTodoItems: data.filter((todoItem) => !todoItem.isCompleted),
    });
  };

  this.attachEventHandler = function () {
    $target.addEventListener(DELETE_ALL_TODO_ITEM, async () => {
      await deleteAllTodoItem();
      await this.setTodoListData();
    });

    $target.addEventListener(ADD_TODO_ITEM, (e) => {
      const {
        detail: { todoInputText },
      } = e;
      this.addTodo(todoInputText);
    });

    $target.addEventListener(DELETE_TODO_ITEM, async (e) => {
      const {
        detail: { todoItemId },
      } = e;
      await deleteTodoItem(todoItemId);
      await this.setTodoListData();
    })
  };

  this.render();

  // 이벤트 핸들러 부착
  this.attachEventHandler();
}
