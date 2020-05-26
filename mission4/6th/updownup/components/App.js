import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import {
  getTodoList,
  postTodoList,
  toggleTodoList,
  deleteTodoList
} from '../api/index.js'

export default function App() {

  this.data = {
    todoList: [],
    todoListDone: []
  }

  let todoListElement = document.querySelector('#todo-list')
  let todoInputElement = document.querySelector('#todo-input')

  // todo list 렌더링
  this.TodoList = new TodoList({
    $target: todoListElement,
    data: this.data.todoList,
    onDelete: async (id) => {
      await deleteTodoList(id)
      this.setState()
    },
    onToggleCompleted: async (id) => {
      await toggleTodoList(id)
      this.setState()
    },
  })

  // todo input 렌더링
  this.TodoInput = new TodoInput({
    $todoInput: todoInputElement, 
    onInput: async (todoText) => {
      if(todoText.length > 0){
        await postTodoList(todoText)
        this.setState()
      }
    },
  })

  this.setState = async () => {
    this.todoListData = await getTodoList()

    this.TodoList.setState(this.todoListData)
  }
  this.setState()
}