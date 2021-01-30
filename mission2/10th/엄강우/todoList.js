function TodoList($target, initialState) {  
    this.$target = $target
    this.state = initialState

    this.validation = () => {
      if(!new.target) {
        throw new Error("You need new keyword")
      }
      if(!data) {
        throw new Error("Your data is wrong")
      }
      if (!data.every(todo => typeof todo.text === 'string' || typeof todo.isCompleted === 'boolean')) {
        throw new Error("Your data has wrong property")
      }
    }

    this.addTodo = (todo) => {
      this.state.push({text : todo, isCompleted: false})
      this.validation(this.state)
      this.render()
      document.querySelector('#todo-input').focus()
    }

    this.deleteTodo = (todoIndex) => {
      this.state = this.state.filter((element, index) => index !== todoIndex)
      this.setState(this.state)
    }

    this.changeTodoStatus = (todoIndex) => {
      let newData = this.state.map((element, index) => (
        {...element , isCompleted : todoIndex === index ? !element.isCompleted : element.isCompleted }))
      this.setState(newData)
    }

    this.render = () => {
      this.$target.innerHTML = this.state.map(({text, isCompleted}, index) => isCompleted ? `<div><s><span id="todo" data-index="${index}">${text}</span></s><button id="todo-button" data-index="${index}"></button></div>` : `<div><span id="todo" data-index="${index}">${text}</span><button id="todo-button" data-index="${index}"></button></div>`).join('')     
      this.$target.innerHTML += `<input id="todo-input" type="text"></input>`
      
      document.querySelectorAll('#todo').forEach((todo) => {todo.addEventListener('click', (res) => this.changeTodoStatus(res.target.dataset.index*1))})

      document.querySelectorAll('#todo-button').forEach((button) => {button.addEventListener('click', (res) => this.deleteTodo(res.target.dataset.index*1))})

      document.querySelector('#todo-input').addEventListener('keydown', (res) => {
        if (res.key === 'Enter') {
          this.addTodo(res.target.value)
        }
      })
    }

    
    this.setState = (newData) => {
      this.validation(newData)
      this.state = newData
      this.render()
    }

    try {
      this.validation(this.state)
      this.render()

    } catch(error) {
      alert(error)
    }
}
