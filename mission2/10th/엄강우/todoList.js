function TodoList($target, initialState) {  
    this.$target = $target
    this.initialState = initialState

    this.validation = () => {
      if(!new.target) {
        throw new Error("You need new keyword")
      }
    }
    this.checkData = (data) => {
      if(!data) {
        throw new Error("Your data is wrong")
      }
      if (!data.every(todo => typeof todo.text === 'string' || typeof todo.isCompleted === 'boolean')) {
        throw new Error("Your data has wrong property")
      }
    }

    this.addTodo = (todo) => {
      this.initialState.push({text : todo, isCompleted: false})
      this.setState(this.initialState)
      document.querySelector('#todo-input').focus()
    }

    this.deleteTodo = (todo) => {
      this.initialState = this.initialState.filter((element) => element.text !== todo)
      this.setState(this.initialState)
    }

    this.changeTodoStatus = (todo) => {
      let newData = this.initialState.map((element) => 
        element.text === todo ? {text:element.text, isCompleted : !element.isCompleted} : {text:element.text, isCompleted : element.isCompleted}
      )
      this.setState(newData)
    }

    this.render = () => {
      this.$target.innerHTML = this.initialState.map(({text, isCompleted}) => isCompleted === true  ? `<div><s><span id="todo">${text}</span></s><button id="todo-button"></button></div>` : `<div><span id="todo">${text}</span><button id="todo-button"></button></div>`).join('')
      
      
      this.$target.innerHTML += `<input id="todo-input" type="text"></input>`
      
      let todos = document.querySelectorAll('#todo')
      todos.forEach((todo) => {todo.addEventListener('click', (res) => this.changeTodoStatus(res.target.textContent))})

      let buttons = document.querySelectorAll('#todo-button')
      buttons.forEach((button) => {button.addEventListener('click', (res) => this.deleteTodo(res.path[1].outerText))})

      let todoInput = document.querySelector('#todo-input')
      todoInput.addEventListener('keydown', (res) => {
        if (res.key === 'Enter') {
          this.addTodo(res.target.value)
        }
      })
    }

    
    this.setState = (newData) => {
      this.checkData(newData)
      this.initialState = newData
      this.render()
    }

    try {
      this.validation()
      this.checkData(this.initialState)
      this.render()

    } catch(error) {
      alert(error)
    }
  }