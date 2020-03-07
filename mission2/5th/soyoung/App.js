function App($target, removeAll) {
  this.$target = $target
  this.data = JSON.parse(localStorage.getItem('data')) || []
  this.removeAll = removeAll
  this.generateIndex = function() {
    this.data = this.data.map((item, index) => ({
      ...item,
      index,
    }))
    this.nextIndex = this.data.length
  }
  this.render = function() {
    this.$target.innerHTML = `
      <div>
        <div id="todo-input"></div>
        <ul id="todo-list"></ul>
        <div id="todo-count"></div>
      </div>
      `
    const $todoInput = document.querySelector('#todo-input')
    const $todoList = document.querySelector('#todo-list')
    const $todoCount = document.querySelector('#todo-count')

    // 하위 컴포넌트 생성
    const todoInput = new TodoInput($todoInput, {
      onEnter: todoText => {
        const nextData = [
          ...this.data,
          {
            text: todoText,
            index: this.nextIndex,
            isCompleted: false,
          },
        ]
        this.setState(nextData)
        this.nextIndex++
        todoInput.resetInputValue()
      },
      onAdd: todoText => {
        const nextData = [
          ...this.data,
          {
            text: todoText,
            index: this.nextIndex,
            isCompleted: false,
          },
        ]
        this.setState(nextData)
        this.nextIndex++
        todoInput.resetInputValue()
      },
      onReset: () => {
        $target.dispatchEvent(this.removeAll)
      },
    })
    const todoList = new TodoList($todoList, this.data, {
      onClick: e => {
        if (e.target.nodeName === 'BUTTON') {
          const clickedIndex = Number(e.target.id.split('-')[2])
          const nextData = this.data.filter(d => d.index !== clickedIndex)
          this.setState(nextData)
        } else if (e.target.parentNode.nodeName === 'LI') {
          // s 태그일때
          const clickedIndex = Number(e.target.parentNode.id.split('-')[2])
          const nextData = this.data.map((item, index) =>
            index === clickedIndex
              ? { ...item, isCompleted: !item.isCompleted }
              : item
          )
          this.setState(nextData)
        } else if (e.target.nodeName === 'LI') {
          const clickedIndex = Number(e.target.id.split('-')[2])
          const nextData = this.data.map((item, index) =>
            index === clickedIndex
              ? { ...item, isCompleted: !item.isCompleted }
              : item
          )
          this.setState(nextData)
        }
      },
    })
    const todoCount = new TodoCount(
      $todoCount,
      this.data.filter(item => item.isCompleted).length,
      this.data.length
    )
  }
  this.setState = function(nextData) {
    this.data = nextData
    this.generateIndex()
    localStorage.setItem('data', JSON.stringify(this.data))
    this.render()
  }
  this.generateIndex()
  this.render()
  $target.addEventListener(
    'removeAll',
    () => {
      this.setState([])
      localStorage.removeItem('data')
    },
    false
  )
}
