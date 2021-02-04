const $eleList = document.querySelector("#todo-list")

function TodoList({ $app, data, onClickItem, onRemoveItem, onRemoveAll}){
  this.data = data
  this.onClickItem = onClickItem
  this.onRemoveItem = onRemoveItem
  this.onRemoveAll = onRemoveAll
  
  this.render = () =>{
    $eleList.innerHTML = this.data
      .filter(todo => todo.visible === true)
      .map(todo => {
        const content = todo.isCompleted? `<div><s id="${todo.id}" class="isCompleted" style="color:gray">(완료) ${todo.text}</s></div>` 
        : `<div id="${todo.id}" class="isCompleted">${todo.text}</div>`
        const button = `<button  id="${todo.id}" class="remove">삭제</button>` 
        return `<div style="display: inline-flex;margin-bottom: 5px;"> ${content}${button} </div>`     
      }).join('')
  }

  $app.addEventListener('click',(e)=>{
    if(e.target.className === 'remove'){
      this.onRemoveItem(e.target.id)
    }

    if(e.target.className === 'isCompleted'){
      this.onClickItem(e.target.id) 
    }

    if(e.target.closest('button').id === 'remove-all'){
      this.onRemoveAll()
    }

    this.setState(this.data)
  })

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  
  this.render()
}

export default TodoList
