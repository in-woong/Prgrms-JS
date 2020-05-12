function App(selector, title) {
  if (!(this instanceof App)) throw new Error('new 키워드를 사용해주세요.')
  checkSelector(selector)
  this.$target = document.querySelector(selector)

  const todoInputSeletor = 'todo-input'
  const todoListSelector = 'todo-list'

  this.init = () => {
    this.componentDidMount()
    this.$target.innerHTML = `<h1>${title}</h1>
                              <div class=${todoInputSeletor}></div>
                              <ul class=${todoListSelector}></ul>`
    this.$todoInput = new TodoInput({
      selector: `.${todoInputSeletor}`,
      onInput: handleInput,
    })
    this.$todoList = new TodoList({
      todos: this.data,
      selector: `.${todoListSelector}`,
    })
  }

  this.setState = (newData) => {
    this.data = newData
    this.$todoList.setState(this.data)
  }

  this.componentDidMount = () => {
    this.data = []
  }

  const handleInput = (value) => {
    const newData = [...this.data, {
      text: value,
      isCompleted: false,
    }]
    this.setState(newData)
  }

  this.init()
}
