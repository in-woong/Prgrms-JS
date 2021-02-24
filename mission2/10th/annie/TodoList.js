const validateTodos = (todos) => {
  // data가 null 혹은 undefined인 경우
  if (todos === null || todos === undefined) {
    throw new Error('data is null or undefined')
  }

  // data가 array가 아닌 형태로 넘어올 경우
  if (!Array.isArray(todos)) {
    throw new Error('data is not a array')
  }
  // data가 array이지만 array의 내용이 이상할 경우
  if (Array.isArray(todos)) {
    todos.forEach((value) => {
      if (typeof value.text !== 'string') {
        throw new Error('The contents of the data are invalid')
      }
    })
  }

  // data의 데이터 타입이 맞지 않을 경우
  const invalidData = todos.some((todo) => typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean')
  if (invalidData) {
    throw new Error('The type of the data are invalid')
  }
}

function TodoList({ $app, todos, onClick }) {
  const $target = document.createElement('ul')
  $target.className = 'TodoList'
  $app.appendChild($target)

  this.todos = todos
  this.$target = $target

  this.validation = (todos) => {
    // new 키워드를 안 붙이고 함수 실행시 에러 발생
    if (!new.target) {
      throw new Error('TodoList instantiated with new')
    }
    validateTodos(todos)
  }

  this.setState = (nextTodos) => {
    validateTodos(nextTodos)
    this.todos = nextTodos
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.todos.map(({ text, isCompleted }, index) => `<li data-index="${index}">${isCompleted ? `<s>${text}</s>` : text}</li>`).join('')

    const $lis = this.$target.querySelectorAll('li')

    $lis.forEach(($li) => {
      $li.addEventListener('click', (e) => {
        // 클릭한 li의 위치를 찾아라!
        const index = parseInt(e.target.closest('li').dataset.index, 10)
        onClick(index)
      })
    })
  }
  this.validation(todos)
  this.render()
}
