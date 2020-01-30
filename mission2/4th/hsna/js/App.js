const TODODATAS_LS = "todoDatas"

class App {
  constructor(todoListTargetId, todoCountTargetId, todoInputTargetId) {
    this.data = this.loadToDos()
    this.todoList = new TodoList(todoListTargetId, this.data, 
    (index) => {
      const nextData = [ ...this.data ]
      nextData[index].isCompleted = !nextData[index].isCompleted
      this.setState(nextData)   
    },
    (index) => {
      const nextData = [...this.data]
      nextData.splice(index, 1)
      this.setState(nextData)
    })

    const $todoCountTarget = document.querySelector(`#${todoCountTargetId}`)
    this.todoCount = new TodoCount($todoCountTarget, {
      totalCount: this.data.length,
      completedCount: this.data.filter(todo => todo.isCompleted).length
    })

    const $todoInputTarget = document.querySelector(`#${todoInputTargetId}`)
    this.todoInput = new TodoInput($todoInputTarget, 
    (text) => {
      const nextData = [...this.data]
      nextData.push({
        text,
      })
      this.setState(nextData)
    })

    this.render()
  }

  saveToDos(toDos){
    localStorage.setItem(TODODATAS_LS, JSON.stringify(toDos));
  }

  loadToDos(){
    let parsedToDos = []
    const loadedToDos = localStorage.getItem(TODODATAS_LS);
    if(loadedToDos !== null){
      parsedToDos = JSON.parse(loadedToDos);
    }
    return parsedToDos
  }

  render() {
    this.todoList.render()
    this.todoCount.render()
  }

  setState(nextData) {
    this.data = nextData
    this.saveToDos(this.data)
    this.todoList.setState(this.data)
    this.todoCount.setState({      
      totalCount: this.data.length,
      completedCount: this.data.filter(todo => todo.isCompleted).length      
    })    
  }
}
