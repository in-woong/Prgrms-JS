export default class TodoList {
  constructor(data) {
    this.data = data
    this.prerender()
    console.log(localStorage)
  }
  prerender() {
    this.div = document.createElement('div')
    this.div.id = 'todo-list'
  }

  render(target, todoCount) {
    target.appendChild(this.div)
    this.todoCount = todoCount
    this.todoCount.prerender(target)
    
    this.div.addEventListener('click', (e) => {
      const todo = e.target.textContent
      if(e.target.tagName === 'S' ){
        e.target.parentNode.innerHTML = todo;
        e.target.remove()
        this.data.filter(datum => datum.text === todo)[0].isCompleted = !this.data.filter(datum => datum.text === todo)[0].isCompleted
      }
      else if(e.target.tagName === 'SPAN'){
        e.target.innerHTML = `<s>${todo}</s>`
        this.data.filter(datum => datum.text === todo)[0].isCompleted = !this.data.filter(datum => datum.text === todo)[0].isCompleted
      }
      else if(e.target.tagName === 'BUTTON'){
        e.target.parentNode.remove()
      }
      this.todoCount.render()
    })

    this.h1 = this.div.appendChild(document.createElement('h1'))
    this.h1.innerHTML = `<h1>${this.div.id}</h1>`
    this.ul = this.div.appendChild(document.createElement('ul'))
    this.data.forEach((todo) => this.createTodo(todo))
    this.todoCount.render()
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }

  addTodoData(todo) {
    if (!todo) return
    this.data.push({
      text: todo,
      isCompleted: false,
    })
    this.updateTodoList()
    localStorage.setItem('todo', JSON.stringify(this.data))
    this.todoCount.render()
  }

  updateTodoList() {
    const todo = this.data[this.data.length - 1]
    this.createTodo(todo)
  }

  createTodo(todo) {
    const li = this.ul.appendChild(document.createElement('li'))
    li.innerHTML += `${
      todo.isCompleted
        ? `<span><s>${todo.text}</s></span> <button>X</button>`
        : `<span>${todo.text}</span> <button>X</button>`
    }`
    
    // this.handleButtonEvent(li)
    // this.handleToggleEvent(li)
  }
}
