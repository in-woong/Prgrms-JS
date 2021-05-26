const validateData = (data) => {
  // check if data is null or undefined
  if (!data) {
    throw new Error('data의 형식이 올바르지 않습니다..')
  }
  // type check
  const isValidData = data.every(
    (todo) => typeof todo.content === 'string' && typeof todo.isCompleted === 'boolean')
  if (!isValidData) {
    throw new Error('data의 타입이 올바르지 않습니다.')
  }
}

export default function TodoList({ $app, initialState, onClick }) {

  // generate todoList component
  const $todoListItemComp = document.createElement('ul')
  $todoListItemComp.className = 'TodoList'
  $todoListItemComp.style = 'list-style: none'
  $app.appendChild($todoListItemComp)

  this.state = initialState
  this.onClick = onClick

  this.validation = (data) => {
    validateData(data)
    // check whether function is called via new
    if (!new.target) {
      throw new Error('함수가 new 키워드로 호출되지 않았습니다.')
    }
  }
  this.setState = (nextState) => {
    this.validation(nextState.todoItems)
    this.state = nextState
    this.render()
  }
  this.render = function() {
    $todoListItemComp.innerHTML = this.state.todoItems.map(
      ({ content, isCompleted, _id }, index) => 
        `<li data-index="${index}">${isCompleted ? `<s>${content}</s>` : `${content}`}</li>`).join('')
  }

  $todoListItemComp.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    if ($li) {
      const index = parseInt($li.dataset.index)
      this.onClick(index)
    }
  })

  // initial rendering
  this.validation(this.state.todoItems)
  this.render()
}
