import {getTodoElement, isCorrectTodoList, createTodoInnerHTML} from '../../utils/todo/filerter_item.js'

export default function TodoList($app, todos, onRemoveTodo, isCompletedToggle){
    this.$todoList = $app.querySelector('#todo-list')
    this.todos = todos

    const $todoRemoveAllBtn = $app.querySelector('#todo-remove-all-btn')

    $todoRemoveAllBtn.addEventListener('click', () => {
      $app.dispatchEvent(new CustomEvent('todoRemoveAll'))
    });

    this.$todoList.addEventListener('click', e => {
      const element = e.target
      const todoElement = getTodoElement(e.target.parentNode)
      const todoElementIndex = todoElement.getAttribute("data-todo-id")

      //할 일 텍스트 클릭
      if(element.classList.contains("todo-text")){
        isCompletedToggle(parseInt(todoElementIndex))
        return
      }

      //삭제 버튼 클릭
      if(element.classList.contains("todo-close")){
        onRemoveTodo(parseInt(todoElementIndex))
        return
      }
    })

    this.render = function(){
      console.log(this)
      isCorrectTodoList(this, TodoList) 
      ? this.$todoList.innerHTML = createTodoInnerHTML(this.todos) : ""
    }

    this.setState = function(nextData){
      this.todos = nextData
      this.render()
    }

    this.render()
  }