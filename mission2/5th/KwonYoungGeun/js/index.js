const $todoListElement = document.getElementById('todo-list')
const $todoInput = document.getElementById('todo-input')
const todoList = new TodoList(todoData, $todoListElement, $todoInput)

const $toReadListElement = document.getElementById('to-read-list')
const $toReadInput = document.getElementById('to-read-input')
const toReadList = new TodoList(toReadData, $toReadListElement, $toReadInput)

const $toWatchListElement = document.getElementById('to-watch-list')
const $toWatchInput = document.getElementById('to-watch-input')
const toWatchList = new TodoList(
  toWatchData,
  $toWatchListElement,
  $toWatchInput
)
