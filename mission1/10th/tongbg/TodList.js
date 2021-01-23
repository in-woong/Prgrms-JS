import validateData from './validateData.js'

/**
 * todoList 의 fucntion contructor
 * @param {array} todoData 배열로 내부에는 {string text, boolean isCompleted} 프로퍼티로 구성된 오브젝트가 존재
 * @param {string} eleId todoList 의 부모가 될 DOM객체의 id값
 */
function TodoList(todoData, eleId) {
  // new 호출된 여부 확인
  if (validateData(new.target, todoData)) {
    this.todoData = todoData
    this.parentDOM = document.getElementById(eleId)
  }

  /**
   * todoList 를 부모 DOM 객체에 innerHTML 로 할당하는 함수
   */
  this.render = function () {
    this.parentDOM.innerHTML = this.todoData
      .map((todo) => {
        if (todo.isCompleted) return `<div><s>${todo.text}</s></div>`
        else return `<div>${todo.text}</div>`
      })
      .join('')
  }

  /**
   * todoList 의 데이터를 변경하는 함수
   * @param {array} nextData 배열로 내부에는 {string text, boolean isCompleted} 프로퍼티로 구성된 오브젝트가 존재
   */
  this.setState = function (nextData) {
    // 데이터만 변경되므로 new 호출여부는 미검사
    validateData(null, todoData)
    this.todoData = nextData
    this.render()
  }

  this.render()
}

export default TodoList
