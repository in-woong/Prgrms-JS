import { data, todoCount, todoListTop, todoRemoveAllBtn } from './App.js'
import { todoList } from './TodoInput.js'

// 삭제버튼 클릭했을때 해당 할일이 삭제됨
const todoDelText = function() {
  todoListTop.addEventListener('click', function(event) {
    // console.log(event.target.id)
    if (event.target.id.substr(0, 15) === 'todo-del-button') {
      let i = Number(event.target.id.substr(15))
      data.splice(i, 1)
      todoList.setState(data)
      todoCount.setState(data)
    }
  })
}
const todoDelAllText = function() {
  todoRemoveAllBtn.addEventListener('click', function(event) {
    data.splice(0, data.length)
    todoList.setState(data)
    todoCount.setState(data)
  })
}
// const todoRemoveAllEvent = document.createEvent('RemoveAll'); // 인스턴스 이벤트 생성
// todoRemoveAllEvent.initEvent('click', false, true); // 클릭 이벤트 정보를 설정함
// todoRemoveAllBtn.dispatchEvent(_customEvent);

export { data, todoDelText, todoDelAllText }
