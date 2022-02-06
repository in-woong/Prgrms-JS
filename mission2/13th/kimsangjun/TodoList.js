let data = [{
    text: 'todo text',  // 할 일 이름
    isCompleted: false, // 완료 여부
  }]

  function TodoList({ initialState, $target }) {
    this.state = initialState

    this.render = () => {
      $target.innerHTML = `
        ${this.state.map((todo) => `<li>${todo.text}</li>`).join('')}
      `
    }

    this.setState = (nextState) => {
      this.state = nextState
      this.render()
    }
    this.render()
  }

  const todoList = new TodoList({
    initialState: data,
    $target: document.querySelector('#todo-list'),
  })

  document.querySelector('.todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target,    e.currentTarget);

    const $input = e.target.querySelector('input[name=todo]')

    todoList.setState([
      ...todoList.state,
      {
        text: $input.value,
      },
    ])

    $input.value = ''
  })