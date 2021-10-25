import TodoList from './TodoList.js'

const TODOS = [
  {
    text: 'todo text',
    isCompleted: false,
  },
]

const NEW_TODOS = [
  {
    text: '[ new ] todo text',
    isCompleted: false,
  },
]

const todoListOne = new TodoList({
  selector: '#todo-list-one',
  data: TODOS,
})

todoListOne.setState(NEW_TODOS)
