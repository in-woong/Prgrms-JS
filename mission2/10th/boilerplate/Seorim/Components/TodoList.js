function TodoList(data){
  this.data = data
  this.eleList = document.querySelector("#todo-list")
  this.removeItem = this.removeItem
  
  this.render = () =>{
    this.eleList.innerHTML = this.data
      .filter(todo => todo.visible === true)
      .map(todo => {
        const content = todo.isCompleted? `<div><s id="${todo.id}" class="isCompleted" style="color:gray">(완료) ${todo.text}</s></div>` 
        : `<div id="${todo.id}" class="isCompleted">${todo.text}</div>`
        const button = `<button  id="${todo.id}" class="remove">삭제</button>` 
        return `<div style="display: inline-flex;margin-bottom: 5px;"> ${content}${button} </div>`     
      }).join('')
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.eleList.addEventListener('click',(e)=>{
    if(e.target.className === 'remove'){
      console.log("삭제중")
      this.data[e.target.id-1].visible = false
    }

    if(e.target.className === 'isCompleted'){
      if(this.data[e.target.id-1].isCompleted === false){
        this.data[e.target.id-1].isCompleted = true
      }else{
        this.data[e.target.id-1].isCompleted = false
      }
      
    }

    this.setState(this.data)
  })

 
  
  
  this.render()
}

export default TodoList
