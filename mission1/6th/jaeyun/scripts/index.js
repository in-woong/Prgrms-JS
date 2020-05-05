import { studyTodo, schoolTodo, homeTodo } from './TodoListData.js'
import TodoList from './TodoList.js'

const studyTodoCon = document.getElementById('study-todo-list')
const schoolTodoCon = document.getElementById('school-todo-list')
const homeTodoCon = document.getElementById('home-todo-list')

const studyTodoList = new TodoList(studyTodo)
studyTodoList.render(studyTodoCon)

studyTodoList.setState([
  {
    text: '예습',
    isCompleted: false,
  },
])

const schoolTodoList = new TodoList(schoolTodo)
schoolTodoList.render(schoolTodoCon)

const homeTodoList = new TodoList(homeTodo)
homeTodoList.render(homeTodoCon)
