function TodoList({ $todoList, data }) {
  this.render = () => {
    $todoList.innerHTML = `${
      data && data.map(({ content }) => `<div>${content}</div>`).join('')
    }`
  }

  this.setState = (nextData) => {
    data = nextData
    console.log('todo list', data)
    this.render()
  }

  this.render()
}

export default TodoList
