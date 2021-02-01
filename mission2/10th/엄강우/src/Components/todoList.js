export default function TodoList($target, initialState) {  
    this.$target = $target
    this.state = initialState

    this.validation = (data=this.state) => {
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

    this.deleteTodo = (todoIndex) => {
      let newData = this.state.filter((element, index) => index !== todoIndex)
      this.setState(newData)
    }

    this.changeTodoStatus = (todoIndex) => {
      let newData = this.state.map((element, index) => (
        {...element , isCompleted : todoIndex === index ? !element.isCompleted : element.isCompleted }))
      this.setState(newData)
    }

    this.render = () => {
      this.$target.innerHTML = this.state.map(({text, isCompleted}, index) => isCompleted ? `<div><s><span id="todo" data-index="${index}">${text}</span></s><button id="todo-button" data-index="${index}"></button></div>` : `<div><span id="todo" data-index="${index}">${text}</span><button id="todo-button" data-index="${index}"></button></div>`).join('')     
      
      document.querySelectorAll('#todo').forEach((todo) => {todo.addEventListener('click', (res) => this.changeTodoStatus(res.target.dataset.index*1))})
      document.querySelectorAll('#todo-button').forEach((button) => {button.addEventListener('click', (res) => this.deleteTodo(res.target.dataset.index*1))})
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


