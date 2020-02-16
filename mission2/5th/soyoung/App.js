function App($target, data) {
  this.$target = $target
  this.data = data.map((d, index) => ({
    ...d,
    index,
  }))
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
    const todoInput = new TodoInput($todoInput)
    const todoList = new TodoList($todoList, this.data)
    const todoCount = new TodoCount($todoCount, this.data)

    // 하위 컴포넌트 이벤트 등록
    todoInput.getInput().addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        const nextData = [
          ...this.data,
          {
            text: todoInput.getInputValue(),
            index: this.data.length,
          },
        ]
        this.setState(nextData)
        todoInput.resetInputValue()
      }
    })
    todoInput.getAddButton().addEventListener('click', () => {
      const nextData = [
        ...this.data,
        {
          text: todoInput.getInputValue(),
          index: this.data.length,
        },
      ]
      this.setState(nextData)
      todoInput.resetInputValue()
    })
    $todoList.addEventListener('click', e => {
      console.log(e.target)
      if (e.target.nodeName === 'LI') {
        const clickedIndex = Number(e.target.id.split('-')[2])
        this.data[clickedIndex].isCompleted = !this.data[clickedIndex]
          .isCompleted
        this.render()
      } else if (e.target.parentNode.nodeName === 'LI') {
        // s 태그일때
        const clickedIndex = Number(e.target.parentNode.id.split('-')[2])
        this.data[clickedIndex].isCompleted = !this.data[clickedIndex]
          .isCompleted
        this.render()
      }

      if (e.target.nodeName === 'BUTTON') {
        const clickedIndex = Number(e.target.id.split('-')[2])
        const nextData = this.data
          .filter(d => d.index !== clickedIndex)
          .map((d, index) => ({
            ...d,
            index,
          }))
        this.setState(nextData)
      }
    })
  }
  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }
  this.render()
}
