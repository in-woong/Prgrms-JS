export default function TodoList($target, todos) { 
  try {
    if(!new.target) {
      throw new error("you need new keyword")
    }
    this.$target = $target
    this.render = () => {
      this.$target.innerHTML = todos.map(({text, isCompleted}, index) => isCompleted ? 
      `<div><s><span id="todo" data-index="${index}">${text}</span></s><button id="todo-button" data-index="${index}"></button></div>` 
      : `<div><span id="todo" data-index="${index}">${text}</span><button id="todo-button" data-index="${index}"></button></div>`).join('')     
    }
    this.render()
  } catch (e) {
    alert(e.message)
  }
  
}


