function App($target) {
  this.$target = $target
  this.username = 'soyoung'
  this.setUserName = function(currentUserName) {
    this.username = currentUserName
  }
  this.render = async function() {
    this.$target.innerHTML = `
    <div style="width: 50%; border-right:1px solid gray; float:left;">
      <div id="user-list"></div>
    </div>
    <div style="float:left; padding:10px;">
      <div id="todo-input"></div>
      <div id="todo-list"></div>
    </div>`

    this.data = await getItem(this.username)
    this.userListData = await getUserList()
    this.userList = new UserList({
      $target: document.querySelector('#user-list'),
      username: this.username,
      data: this.userListData,
      onClick: async username => {
        this.setUserName(username)
        const updatedData = await getItem(this.username)
        this.todoList.setState(updatedData)
        this.userList.setUser(this.username)
      },
    })
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
