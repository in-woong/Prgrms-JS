import TodoList from './TodoList.js';

import {
  todos, sports, languages, newTodos,
} from './data.js';

import { TODO_LIST_ID, LANGUAGE_LIST_ID, SPORT_LIST_ID } from './constants.js';

const todosData = {
  [TODO_LIST_ID]: todos,
  [LANGUAGE_LIST_ID]: languages,
  [SPORT_LIST_ID]: sports,
};

const elementIds = [
  TODO_LIST_ID,
  LANGUAGE_LIST_ID,
  SPORT_LIST_ID,
];

elementIds.forEach((id) => {
  const todoList = new TodoList(todosData[id], id);

  todoList
    .createTodosWrapperElement()
    .render();

  setTimeout(() => todoList.setState(newTodos), 3000);
});
