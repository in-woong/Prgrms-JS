function TodoList(data, id) {
  if (typeof data === null || undefined) {
    throw new Error('잘못된 형식의 data 입니다.')
  }
  if (!Array.isArray(data)) {
    throw new Error('배열 형태의 data가 아닙니다.')
  }
  if (this === window) {
    throw new Error('new를 활용하여 인스턴스를 생성하세요')
  }

  this.data = data
  this.$todoList = document.createElement('div')
  document.querySelector(`#${id}`).appendChild(this.$todoList)

  const $form = document.querySelector('.todo-form')
  const $input = document.querySelector('.todo-input')
  const $todoList = document.querySelector('#todo-list')

  $form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = $input.value
    if (newTodo !== '') {
      todoList.addTodo(newTodo)
    }
    $input.value = ''
    $input.focus()
  })

  $todoList.addEventListener('click', (e) => {
    if (e.target.className === 'remove-btn') {
      const targetIndex = e.target.getAttribute('idx')
      this.removeTodo(targetIndex)
    }
    if (e.target.getAttribute('type') === 'checkbox') {
      const targetCheckboxIndex = e.target.getAttribute('idx')
      this.toggleCompleted(targetCheckboxIndex)
    }
  })

  this.removeTodo = (idx) => {
    const list = this.data.filter((data, i) => i !== idx * 1)
    this.setState(list)
    this.render()
  }

  this.addTodo = (newTodo) => {
    const todoObj = [
      {
        text: newTodo,
        isCompleted: false,
      },
    ]

    this.setState([...this.data, ...todoObj])
    this.render()
  }

  this.toggleCompleted = (idx) => {
    this.data[idx].isCompleted = !this.data[idx].isCompleted
    this.render()
  }

  this.setState = (nextData) => {
    this.data = nextData
    console.log(this)
    console.log(this.data)
  }

  this.render = () => {
    this.$todoList.innerHTML = `
      <ul>
        ${this.data
          .map(
            ({ text, isCompleted }, index) =>
              `<li id='todo-list-item'>
              <input type='checkbox' ' ${
                isCompleted && 'checked'
              } idx=${index} />
              <label for='${text}'>
                ${isCompleted ? `<s>${text}</s>` : text}
              </label>
                <button class='remove-btn' idx=${index}>
                  삭제
                </button>
              </li>`
          )
          .join('')}
        </ul>`
  }
}
