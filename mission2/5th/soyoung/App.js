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
    this.todoInput = new TodoInput($todoInput, {
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
      },
      onReset: () => {
        $target.dispatchEvent(this.removeAll)
      },
    })
    this.todoList = new TodoList($todoList, this.data, {
      onToggle: targetIndex => {
        const nextData = this.data.map((item, index) =>
          index === targetIndex
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        )
        this.setState(nextData)
      },
      onDelete: targetIndex => {
        const nextData = this.data.filter(d => d.index !== targetIndex)
        this.setState(nextData)
      },
    })
    this.todoCount = new TodoCount(
      $todoCount,
      this.data.filter(item => item.isCompleted).length,
      this.data.length
    )
    $target.addEventListener(
      'removeAll',
      () => {
        this.setState([])
        localStorage.removeItem('data')
      },
      false
    )
  }
  this.setState = function(nextData) {
    this.data = nextData
    this.generateIndex()
    localStorage.setItem('data', JSON.stringify(this.data))
    this.todoList.setState(this.data)
    this.todoCount.setState(
      this.data.filter(item => item.isCompleted).length,
      this.data.length
    )
    this.render()
  }
  this.generateIndex()
  this.render()
}
