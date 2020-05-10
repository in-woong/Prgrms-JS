var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
]

const $target = document.querySelector('#todo-list');
const todoList = new TodoList($target, data);
todoList.render()

const inputElement = document.getElementById("todo-list-input")
inputElement.addEventListener("keypress", function(event){ 
  // 엔터키로 입력 처리
  if (event.keyCode === 13 && inputElement.value){

    const newTodoData = {
      text: inputElement.value,
      isCompleted: false 
    }
    addTodoList(newTodoData)
  }
})
   
const buttonElement = document.getElementById("todo-list-button")
  buttonElement.addEventListener("click", function(){ 
  // 버튼으로 입력처리
  if (!inputElement.value) {
    alert('할일을 입력해 주세요!')
    return false
  }
  const newTodoData = {
    text: inputElement.value,
    isCompleted: false 
  }
  addTodoList(newTodoData)
}) 


function addTodoList(todoData){
  data.push(todoData)
  todoList.setState(data)
  inputElement.value = ''
  inputElement.focus()
}
