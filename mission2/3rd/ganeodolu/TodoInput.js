import {
  data,
  todoList,
  todoAdd,
  todoAddText,
  todoCount,
  todoListTop,
} from './App.js'
import { todoDelText } from './index.js'

// 텍스트 클릭시 true false 변환 기능
const todoChangeText = function() {
  todoListTop.addEventListener('click', function(event) {
    let i = -1
    if (event.target.nodeName === 'SPAN') {
      i = Number(event.target.id.substr(4))
    } else if (event.target.parentNode.nodeName === 'SPAN') {
      i = Number(event.target.parentNode.id.substr(4))
    }
    if (data[i]) {
      data[i].isCompleted = data[i].isCompleted ? false : true
    }
    todoList.setState(data)
    todoCount.setState(data)
    // todoChangeText();
    // todoDelText();
  })
}

// 할일 추가 텍스트 창을 클릭시 기본문구로 지정되게 하는 기능
todoAddText.addEventListener('click', function(event) {
  document.getElementById('todo-input').value = 'JS '
})

// 엔터키를 누르면 클릭된 것과 동일한 효과를 주는 기능 엔터키코드는 13 keydown은 누를때 keyup은 띌때 효과
todoAddText.addEventListener('keyup', function(event) {
  const ENTER_KEY_CODE = 13 // 상수는 가독성을 높이기 위해서 const 선언을 해줌
  if (event.keyCode === ENTER_KEY_CODE) {
    // event.preventDefault();
    todoAdd.click()
  }
})

// 할일추가버튼 클릭했을 때 텍스트상자 내용이 추가되도록 하는 기능
todoAdd.addEventListener('click', function(event) {
  const todoInput = document.getElementById('todo-input').value
  let addData = {
    text: `${todoInput}`,
    isCompleted: false,
  }
  data.splice(data.length, 0, addData)
  todoList.setState(data)
  todoCount.setState(data)
  document.getElementById('todo-input').value = '' // value를 초기화를 해야지 placeholder 내용이 들어갈 수 있음
  document.getElementById('todo-input').placeholder = 'JS 할일 입력바람' // value가 아닌 기본내용 입력

  // todoDelText();
  // todoChangeText();
})
todoDelText()
todoChangeText()

export { todoList }
