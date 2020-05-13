import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoList($app, todo, onRemoveTodo, isCompletedToggle){
    this.$todoList = $app.querySelector('#todo-list')
    this.todo = todo

    const $todoRemoveAllBtn = $app.querySelector('#todo-remove-all-btn')

    $todoRemoveAllBtn.addEventListener('click', () => {
      $app.dispatchEvent(new CustomEvent('todoRemoveAll'))
    });

    this.$todoList.addEventListener('click', e => {
      const element = e.target
      const todoElement = filters.getTodoElement(e.target.parentNode)
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
      filters.isCorrectTodoList(this, TodoList) 
      ? this.$todoList.innerHTML = filters.createTodoInnerHTML(this.todo) : ""
    }

    this.setState = function(nextData){
      this.todo = nextData
      this.render()
    }

    this.render()
  }