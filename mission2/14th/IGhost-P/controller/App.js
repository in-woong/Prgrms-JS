import { TodoList } from '../views/TodoList.js';
import { TodoInput } from '../views/TodoInput.js';
import { TodoCount } from '../views/TodoCount.js';
import * as model from '../model/model.js';
import { $ } from '../helpers.js';

const $target = $('#todo-list');
const input = new TodoInput();
const todoList = new TodoList({ $target });
const todoCount = new TodoCount();
const controlLoadData = function () {
  // 1) Get init Todo
  model.loadData();

  // 2) Rendering Todo
  if (model.getState() == []) return;
  todoList.setState(model.getState());

  // 3) Count Todo
  const { allData, completedData } = model.countData();
  todoCount.render(allData, completedData);
};

const controlSubmitData = function () {
  // 1) Get Value
  const inputValue = input.getValue();
  // Guard Clause
  if (inputValue.trim() === '') return;

  // 2) add Data
  model.addData(inputValue);

  // 3) Data render

  todoList.setState(model.getState());
};

const controlCount = function () {
  const { allData, completedData } = model.countData();
  todoCount.render(allData, completedData);
  model.setLocalStorge();
};

const removeBtn = function (removeId) {
  model.removeTodo(removeId);
  todoList.render(model.getState());
};

const cutText = function (cutId) {
  model.makeIsCompleted(cutId);
  todoList.render(model.getState());
};

const removeAll = function () {
  model.clearData();
  todoList.clear();
};

const init = function () {
  todoList.addHandlerLoad(controlLoadData);
  input.addHandlerSubmit(controlSubmitData);
  input.addHandlerRemoveAll(removeAll);
  todoList.addHandlerBtn(removeBtn);
  todoList.addHandlerText(cutText);
  todoCount.addHandlerWhenDataMutate(controlCount);
};
init();
