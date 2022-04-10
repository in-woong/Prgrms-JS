'use strict';

import TodoList from './components/TodoList.js';
import errorMessages from './errorMessages.js';
import { fetchTodoListData } from './api.js';

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
  };
  this.render = async function () {
    await this.setTodoListData();
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
  };

  this.setTodoListData = async function () {
    const data = await fetchTodoListData();
    this.state.allTodoItems = data;
    this.state.completedTodoItems = data.filter((todoItem) => todoItem.isCompleted);
    this.state.incompletedTodoItems = data.filter((todoItem) => !todoItem.isCompleted);
  };

  this.attachEventHandler = function () {
    $target.addEventListener('removeAll', (e) => {
      const {
        detail: { targetIdx },
      } = e;
      this.todoListComponents[targetIdx].clearAllTodo();
    });
  };

  this.render();

  // 이벤트 핸들러 부착
  this.attachEventHandler();
}
