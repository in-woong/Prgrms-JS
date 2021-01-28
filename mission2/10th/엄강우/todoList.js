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
    this.render = () => {
      this.$target.innerHTML += this.initialState.map(({text, isCompleted}) => isCompleted === true  ? `<div><s id="todo">${text}</s></div>` : `<div id="todo">${text}</div>`).join('')
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