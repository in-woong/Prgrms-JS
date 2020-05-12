import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoList(todoList, todo, removeTodo, isCompletedToggle, todoRemoveAllBtn){
    this.todoList = todoList
    this.todo = todo

    const event = new CustomEvent('todoRemoveAll');

    todoRemoveAllBtn.addEventListener('click', function (e) {
        todoRemoveAllBtn.dispatchEvent(event)
    });
    

    this.todoList.addEventListener('click', e => {
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
        removeTodo(parseInt(todoElementIndex))
        return
      }
    })

    this.render = function(){
      filters.isCorrectTodoList(this, TodoList) 
      ? this.todoList.innerHTML = filters.createTodoInnerHTML(this.todo) : ""
    }

    this.setState = function(nextData){
      this.todo = nextData
      this.render()
    }

    this.render()
  }