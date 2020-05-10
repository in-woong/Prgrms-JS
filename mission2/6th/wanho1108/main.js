import Todo from './component/Todo.js'

const todo = new Todo(document.querySelector('#todo'), 'todo')
const todoAnimal = new Todo(
  document.querySelector('#todo-animal'),
  'todo-animal'
)
const todoFood = new Todo(document.querySelector('#todo-food'), 'todo-food')

todo.render()
todoAnimal.render()
todoFood.render()
