function App($target) {
  this.$target = $target
  this.username = 'soyoung'
  this.render = async function() {
    this.$target.innerHTML = `
    <div id="todo-input"></div>
    <div id="todo-list"></div>`

    this.data = await getItem(this.username)
    this.todoInput = new TodoInput({
      $target: document.querySelector('#todo-input'),
      onAdd: async todoText => {
        await addItem(this.username, todoText)
        const updatedData = await getItem(this.username)
        this.todoList.setState(updatedData)
      },
    })
    this.todoList = new TodoList({
      $target: document.querySelector('#todo-list'),
      data: this.data,
      onClick: async id => {
        await editItem(this.username, id)
        const updatedData = await getItem(this.username)
        this.todoList.setState(updatedData)
      },
      onRemove: async id => {
        await removeItem(this.username, id)
        const updatedData = await getItem(this.username)
        this.todoList.setState(updatedData)
      },
    })
  }
  this.render()
}
