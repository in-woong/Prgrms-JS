import {isCorrectTodoList} from '../../utils/todo/filerter_item.js'

export default function TodoList(selectorId, todo){
    this.selectorId = selectorId
    this.todo = todo

    this.getTodoListHtmlText = (isCompleted, todoText) => {
      return (isCompleted) ? `<div><s>${todoText}</s></div>` : `<div>${todoText}</div>`
    }

    this.createTodoInnerHtml = () => {
      let todoText = this.todo.map((element) => {
        return this.getTodoListHtmlText(element.isCompleted, element.text)
      }).join('')
      document.querySelector(this.selectorId).innerHTML = todoText
    }

    this.render = function(){
      isCorrectTodoList(this, TodoList) ? this.createTodoInnerHtml() : ""
    }

    this.setState = function(nextData){
      this.todo = nextData
      this.render()
    }

    this.render()
  }