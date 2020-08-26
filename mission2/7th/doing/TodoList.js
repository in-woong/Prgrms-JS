class TodoList {
  constructor(target, data, handleRemoveTodo, handleCompleteTodo) {
    this.target = document.querySelector(target)
    this.validateData(data, target)
    this.todos = data
    this.handleRemoveTodo = handleRemoveTodo
    this.handleCompleteTodo = handleCompleteTodo
  }

  render() {
    const $list = document.createElement('ul')

    $list.addEventListener('click', (e) => {
      e.stopPropagation()

      if (e.target && e.target.nodeName === 'BUTTON') {
        this.handleRemoveTodo(e.target.dataset.id)
      } else if (e.target && e.target.nodeName === 'LI') {
        this.handleCompleteTodo(e.target.dataset.id)
      }
      this.render()
    })

    this.todos.forEach((todo, index) => {
      $list.appendChild(this.makeTodoTag(todo, index))
    })
    this.target.innerHTML = ''
    this.target.appendChild($list)
  }

  setState(nextData) {
    this.validateData(nextData)
    this.todos = nextData

    this.render()
  }

  validateData(data, target) {
    if (!this.target) {
      throw new Error('target Tag가 존재하지 않습니다.')
    }

    if (!data) {
      throw new Error('to do data 를 넣어주세요.')
    }

    if (!Array.isArray(data)) {
      throw new Error('data의 타입은 배열이어야 합니다.')
    }

    const checkDataFormat = data.every(
      (item) => typeof item === 'object' && item.text !== undefined
    )

    const checkDataValueFormat = data.every(
      (item) => typeof item.text === 'string' && item.text.trim().length > 0
    )

    if (!checkDataFormat) {
      throw new Error('data의 내용이 Format과 다릅니다.')
    }

    if (!checkDataValueFormat) {
      throw new Error('data의 내용이 없거나 문자열이 아닙니다.')
    }
  }

  makeTodoTag({ text, isCompleted }, index) {
    const $todo = document.createElement('li')
    $todo.className = 'todo-item'
    $todo.dataset.id = index
    const $removeBtn = document.createElement('button')
    $removeBtn.dataset.id = index
    $removeBtn.innerText = '삭제'

    $todo.innerText = isCompleted ? `(완료) ${text}` : text
    $todo.appendChild($removeBtn)
    return $todo
  }
}

export default TodoList
