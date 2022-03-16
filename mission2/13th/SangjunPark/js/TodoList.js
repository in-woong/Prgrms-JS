import TodoCount from './TodoCount.js'

export default function TodoList($target, data) {
  // 에러 처리
  try {
    if (!new.target) throw new Error('this function must be called with "new"')
    if (data == null) throw new Error('there are no value in data')
    if (!Array.isArray(data)) throw new Error('the data is not an array!')
    if (Array.isArray(data)) {
      data.forEach((obj) => {
        if (!(obj instanceof Object)) {
          throw new Error('There are some element which is not an object')
        } else {
          if (obj.text == null)
            throw new Error('There are no text property in this object')
          if (obj.isCompleted == null)
            throw new Error(
              "There are no 'isCompleted' property in this object"
            )
        }
        if (typeof obj.isCompleted !== 'boolean')
          throw new Error('"isComplete" property must be a boolean')
        if (typeof obj.text !== 'string')
          throw new Error('text property must be a string')
      })
    }
  } catch (error) {
    console.error(error)
  }

  // 프로퍼티 설정
  this.$target = $target
  this.data = data

  // 랜더링 함수
  this.render = function () {
    this.data = []
    // localStorage (#91)
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        this.data.push(JSON.parse(localStorage.getItem(i)))
      }
    }
    this.$target.innerHTML = this.data
      .map(
        (todo) =>
          // 'todo' 제거 버튼 작성 (#75)
          `<li>${todo.text}${todo.isCompleted ? '(완료)' : ''}${
            !todo.isCompleted
              ? '<button class="delete-button">삭제하기</button>'
              : ''
          }</li>`
      )
      .join('')
    this.addDeleteButton(this.data) // 'todo' 제거 버튼 작성 (#75)
    TodoCount(this.data) // 'TodoCount' 컴포넌트 작성하기 (#77)
    this.removeAll(this.data)
  }

  // setState 함수
  this.setState = function (nextData) {
    localStorage.clear()
    nextData.forEach((obj, idx) =>
      localStorage.setItem(idx, JSON.stringify(obj))
    )
    this.render()
  }

  // 'todo' 제거 버튼 작성 (#75)
  // Event delegation (#81)
  this.addDeleteButton = () => {
    const todoListEventDelegationParent = document.querySelector('#todo-list')
    todoListEventDelegationParent.addEventListener(
      'click',
      function ({ target }) {
        if (!target.matches('#todo-list > li > button')) return
        const grandParentNode = target.parentNode.parentNode
        const targetIndex = Array.prototype.indexOf.call(
          grandParentNode.children,
          target.parentNode
        )
        const targetObject = JSON.parse(localStorage.getItem(targetIndex))
        targetObject.isCompleted = true
        // localStorage (#91)
        localStorage.setItem(targetIndex, JSON.stringify(targetObject))
        this.render()
      }.bind(this)
    )
  }

  //'todo' 전부 제거하기 (커스텀 이벤트) (#90)
  this.removeAll = () => {
    const deleteAllTodoButton = document.querySelector(
      '#delete-all-todo__button'
    )
    deleteAllTodoButton.addEventListener(
      'click',
      function () {
        // localStorage (#91)
        localStorage.clear()
        this.render()
      }.bind(this)
    )
  }

  // 초기 랜더링, 삭제 버튼 추가 (#75)
  this.render()
  this.addDeleteButton(this.data)
}
