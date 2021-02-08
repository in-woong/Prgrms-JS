const $app = document.querySelector("#app")
const $eleList = document.querySelector("#todo-list")

function TodoList({ data, onClickItem, onRemoveItem, onRemoveAll }) {
  this.state = data
  this.onClickItem = onClickItem
  this.onRemoveItem = onRemoveItem
  this.onRemoveAll = onRemoveAll

  this.render = () => {
    $eleList.innerHTML = this.state
      .map(todo => {
        const content = todo.isCompleted ? `<div><s id="${todo.id}" class="isCompleted" style="color:gray">(완료) ${todo.text}</s></div>`
          : `<div id="${todo.id}" class="isCompleted">${todo.text}</div>`
        const button = `<button  id="${todo.id}" class="remove">삭제</button>`
        return `<div style="display: inline-flex;margin-bottom: 5px;"> ${content}${button} </div>`
      }).join('')
  }

  $app.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all') {
      this.onRemoveAll()
      this.setState(this.state)
    }
  })

  $eleList.addEventListener('click', (e) => {
    if (e.target.className === 'remove') {
      this.onRemoveItem()
    }

    if (e.target.className === 'isCompleted') {
      this.onClickItem(e.target.id)
    }

    this.setState(this.state)
  })

  this.setState = (nextData) => {
    this.state = nextData
    this.render()
  }

  this.render()
}

export default TodoList
