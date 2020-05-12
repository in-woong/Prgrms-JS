function App(selector, title) {
  if (!(this instanceof App)) throw new Error('new 키워드를 사용해주세요.')
  checkSelector(selector)
  this.$target = document.querySelector(selector)

  const todoInputSeletor = 'todo-input'
  const todoListSelector = 'todo-list'
  const todoCountSelector = 'todo-count'

  this.init = () => {
    this.componentDidMount()
    this.$target.innerHTML = `<h1>${title}</h1>
                              <div class=${todoInputSeletor}></div>
                              <ul class=${todoListSelector}></ul>
                              <div class=${todoCountSelector}></div>
                              <div><button class="remove-all-btn">Remove ALL</button></div>`

    this.$todoInput = new TodoInput({
      selector: `.${todoInputSeletor}`,
      onInput: handleInput,
    })
    this.$todoList = new TodoList({
      todos: this.data,
      selector: `.${todoListSelector}`,
      onToggle: handleToggle,
      onDelete: handleDelete,
    })
    this.$todoCount = new TodoCount({
      todos: this.data,
      selector: `.${todoCountSelector}`,
    })
    this.$removeAllBtn = document.querySelector('.remove-all-btn')
    this.$target.addEventListener('removeAll', () => {
      this.setState([])
    })
    this.$removeAllBtn.addEventListener('click', (e) => {
      e.target.dispatchEvent(removeAllEvent)
    })
  }
  const removeAllEvent = new CustomEvent('removeAll', { bubbles: true })

  this.setState = (newData) => {
    this.data = newData
    this.$todoList.setState(this.data)
    this.$todoCount.setState(this.data)
    saveDataToLocalStorage(newData)
  }

  this.componentDidMount = () => {
    const storageData = JSON.parse(window.localStorage.getItem('SAVED_DATA'))
    if (storageData) {
      checkData(storageData)
      this.data = storageData
    } else {
      this.data = []
    }
  }

  const handleInput = (value) => {
    const newData = [...this.data, {
      id: this.data.length === 0 ? 0 : Math.max(...this.data.map((element) => element.id)) + 1,
      text: value,
      isCompleted: false,
    }]
    this.setState(newData)
  }
  const handleToggle = (id) => {
    const targetIndex = this.data.findIndex((element) => element.id === id)
    this.setState([
      ...this.data.slice(0, targetIndex),
      {
        ...this.data[targetIndex],
        isCompleted: !this.data[targetIndex].isCompleted,
      },
      ...this.data.slice(targetIndex + 1, this.data.length),
    ])
  }

  const handleDelete = (id) => {
    this.setState(this.data.filter((element) => element.id !== id))
  }

  const saveDataToLocalStorage = (data) => {
    window.localStorage.setItem('SAVED_DATA', JSON.stringify(data))
  }

  this.init()
}
