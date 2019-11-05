import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import { apiHandler } from './api.js'

function App(target) {
  this.data = []
  this.isLoading = false

  const fetchData = async () => {
    const data = await apiHandler({ url: 'http://todo-api.roto.codes' })
    this.setState(data)
  }

  fetchData()

  this.todoList = new TodoList({
    data: this.data,
    isLoading: this.isLoading,
  })

  this.setState = updateData => {
    this.data = updateData
    this.todoList.setState(this.data)
  }

  const onClick = async () => {
    this.isLoading = true
    const $todoInput = document.querySelector('#todo-input')

    const data = await apiHandler({
      url: 'http://todo-api.roto.codes',
      method: 'POST',
      body: JSON.stringify({
        content: $todoInput.value,
      }),
    })

    if (data) {
      this.isLoading = false
      $todoInput.focus()
      $todoInput.value = ''
    }

    if (!data) {
      this.isLoading = false
      // TODO: api 통신 외 에러일경우 모달이나 메시지로 띄워주기.
      alert('할일 추가가 안되었습니다. 이유: api 통신 실패')
    }

    fetchData()
  }

  this.todoInput = new TodoInput({
    onClick,
  })
}

export default App
