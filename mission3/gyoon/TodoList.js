function TodoList(target, data){
  if (data === undefined){
    throw new Error('please pass data array into TodoList function')
  }
  this.target= target
  this.data = data
  
  // setState function takes in data, sets the list as empty, and triggers a render
  this.setState = function(data){
    this.data = data
    target.innerHTML = ''
    this.render()
  }

  this.render = function(){
    let listOfTodos = ''
    this.data.map(todo => {
      let todoWrapperElementStart = '<li class="todo-li">'
      let todoWrapperElementEnd = '</li>'
      const { text, isCompleted } = todo
      if (isCompleted){
        todoWrapperElementStart += '<span>(완료) <strike>'
        todoWrapperElementEnd = '</span></strike>' + todoWrapperElementEnd
      }
      const todoDiv = `${todoWrapperElementStart}${text}${todoWrapperElementEnd}`
      todoWrapperElementStart = ''
      todoWrapperElementEnd = ''
      const ulOfTodos = document.getElementById('ul-of-todos')
      if (ulOfTodos){
        ulOfTodos.insertAdjacentHTML('beforeend', todoDiv)
      } else {
        listOfTodos = '<ul id="ul-of-todos">'+todoDiv+'</ul>'
        target.innerHTML = listOfTodos
      }
      const todos = document.querySelectorAll('.todo-li')
      const lastAddedTodo = todos[todos.length - 1]
      const processTodoClick = (e) => {
        const todoText = e.srcElement.outerText
        const updatedTodoList = this.data.map(todo => {
          const { text } = todo
          if (text === todoText){
            return {
              text,
              isCompleted: true,
            }
          }
          return todo
        })
        this.setState(updatedTodoList)
      }
      lastAddedTodo.addEventListener('click', (e) => processTodoClick(e))
    })
  }
  this.render()
};