import TodoList from './TodoList.js'
import { data, data2, data3, data4, data5 } from './data.js'

const todolist = new TodoList('#todo-list', data)

const TodoListInputEle = document.querySelector('#input-todo-list')
const TodoListAddEle = document.querySelector('#add-todo-list-button')

// todoList 추가 함수
export function addTodoList(todoListComponent) {
  if (TodoListInputEle.value.length === 0) {
    return alert('내용을 입력해주세요.')
  }
  const todoListItem = {
    text: TodoListInputEle.value,
    isCompleted: false,
  }
  todoListComponent.setState([...todoListComponent.data, todoListItem])
  TodoListInputEle.value = ''
  TodoListInputEle.focus()
}
TodoListAddEle.addEventListener('click', () => {
  addTodoList(todolist)
})
TodoListInputEle.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    addTodoList(todolist)
  }
})
