import { ENTER_KEY_CODE } from '../utils/constant.js'

function TodoInput(props) {

  this.addTodoList = props.addTodoList

  const buttonElement = document.getElementById('todo-list-button')
  buttonElement.addEventListener('click', () => {
    // 버튼으로 입력처리
    if (!inputElement.value) {
      alert('할일을 입력해 주세요!')
      return
    }
    const newTodoData = {
      text: inputElement.value,
      isCompleted: false 
    }
    this.addTodoList(newTodoData)
  })
  
  const inputElement = document.getElementById('todo-list-input')
  inputElement.addEventListener('keypress', (event) => {
    // 엔터키로 입력 처리
    if (event.keyCode === ENTER_KEY_CODE && inputElement.value){
  
      const newTodoData = {
        text: inputElement.value,
        isCompleted: false 
      }
      this.addTodoList(newTodoData)
    }
  })
}

export default TodoInput