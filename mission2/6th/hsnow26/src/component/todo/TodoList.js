import {isCorrectTodoList, getCreateTodo} from '../../utils/todo/filerter_item.js'

export default function TodoList(selectorId, todo){
    this.selectorId = selectorId
    this.todo = todo

    this.setDelete = () => {
      document.querySelectorAll(".todo-close").forEach((element, index) => {
          document.querySelector("#todo-close-"+index).addEventListener('click', function(){
              console.log(index)
          })
      })
    }
    this.getTodoListHtmlText = (element, index) => 
      (element.isCompleted)
      ? `<div><s>${element.text}<span id='todo-close-${index}' class='todo-close'>&times;</span></s></div>`
      : `<div>${element.text}<span id='todo-close-${index}' class='todo-close'>&times;</span></div>`

    this.createTodoInnerHtml = () => {
      const todoText = this.todo.map((element, index) => {
        console.log(element)
        return this.getTodoListHtmlText(element, index)
      }).join('')
      document.querySelector(this.selectorId).innerHTML = todoText
      this.setDelete()
    }

    this.render = function(){
      isCorrectTodoList(this, TodoList) ? this.createTodoInnerHtml() : ""
    }

    this.setState = function(nextData){
      this.todo = nextData
      this.render()
    }

    this.addTodo = function(target){
      const addTodo = this.todo.concat(getCreateTodo(target.value))
      this.setState(addTodo)
      target.value = ''
    }

    this.render()
  }