import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoList(todoListHTML, todo){
    this.todoListHTML = todoListHTML
    this.todo = todo


    this.todoListHTML.addEventListener('click', e => {
      const todoElement = filters.getTodoElement(e.target.parentNode)
      const todoElementIndex = todoElement.getAttribute("data-todo-id")

      //할 일 텍스트 클릭
      if(element.classList.contains("todo-text")){
        this.isCompletedToggle(parseInt(todoElementIndex))
        return
      }

      //삭제 버튼 클릭
      if(element.classList.contains("todo-close")){
        this.removeTodo(parseInt(todoElementIndex))
        return
      }
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
      const todoHTMLText = this.todo.map((element, index) => {
        return this.getTodoListHTMLText(element, index)
      }).join('')
      this.todoListHTML.innerHTML = todoHTMLText
      // this.setDelete()
    }

    this.render = function(){
      filters.isCorrectTodoList(this, TodoList) ? this.createTodoInnerHTML() : ""
    }

    this.setState = function(nextData){
      this.todo = nextData
      this.render()
    }

    this.addTodo = function(target){
      const todoText = target.value
      target.value = ''

      //빈 값 or 공백은 추가 x
      if(filters.isTodoTextEmpty(todoText)){
        return
      }
      
      const addedTodo = this.todo.concat(filters.getCreateTodo(todoText))
      this.setState(addedTodo)
    }

    this.removeTodo = function(removeIndex){
      const removedTodo = this.todo.filter((element, index) => index !== removeIndex)
      this.setState(removedTodo)
    }

    this.isCompletedToggle = function(updateIndex){
      const updatedIsCompletedTodo = this.todo.map((element, index) => 
        (index === updateIndex) ? ({...element, isCompleted : !element.isCompleted}) : element
      )
      this.setState(updatedIsCompletedTodo)
    }

    this.render()
  }