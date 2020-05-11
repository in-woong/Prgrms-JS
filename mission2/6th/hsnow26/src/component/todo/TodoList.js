import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoList(element, text){
    const todoList = element
    const todo = text

    // this.setDelete = () => {
    //   document.querySelectorAll(".todo-close").forEach((element, index) => {
    //       document.querySelector("#todo-close-"+index).addEventListener('click', function(){
    //           console.log(index)
    //       })
    //   })
    // }

    function isExistTodoId(element, attribute){
      if(attribute){

        return element
      }
      
      return element.parentNode
    }
    
    // this.document.querySelector('a[data-a="1"]');
    todoList.addEventListener('click', e => {
      const element = e.target

      console.log(element.parentNode)
      console.log(document.querySelector("#todo-add"))
      // console.log(element.parentNode.getAttribute("data-todo-id")) // Returns the <html> element
      // console.log(element.parentElement.parentElement) // Returns the <html> element

      // console.log(element)
      if(element.classList.contains("todo-text")){
        // todo.
        return
      }

      if(element.classList.contains("todo-close")){

        return
      }
    })

    console.log('todolist',this)
    document.querySelector("#todo-add").addEventListener('click', function(){
      console.log('fuck',this)
      console.log('su?',todo)
      todoList.addTodo(document.querySelector("#todo-input"))
    })


    this.getTodoListHTMLText = (element, index) => 
      (element.isCompleted)
      ? `<div class='todo' data-todo-id = ${index}>
          <s>
            <span id='todo-text-${index}' class='todo-text'>${element.text}</span>
          </s> 
          <span id='todo-close-${index}' class='todo-close'>&times;</span>
          </div>`
      : `<div class='todo' data-todo-id = ${index}>
          <span id='todo-text-${index}' class='todo-text'>${element.text}</span>
          <span id='todo-close-${index}' class='todo-close'>&times;</span>
        </div>`

    this.createTodoInnerHTML = () => {
      const todoHTMLText = todo.map((element, index) => {
        console.log(element)
        return this.getTodoListHTMLText(element, index)
      }).join('')
      todoList.innerHTML = todoHTMLText
      // this.setDelete()
    }

    this.render = function(){
      filters.isCorrectTodoList(this, TodoList) ? this.createTodoInnerHTML() : ""
    }

    this.setState = function(nextData){
      todo = nextData
      this.render()
    }

    this.addTodo = function(target){
      const todoText = target.value
      target.value = ''

      if(filters.isTodoTextEmpty(todoText)){
        return
      }
      
      const addedTodo = todo.concat(filters.getCreateTodo(todoText))
      this.setState(addedTodo)
    }

    this.render()
  }