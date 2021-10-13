import { todoValidate } from '../lib/Validation.js';
import ErrorMessage from '../lib/ErrorMessage.js';
  
  function TodoList (data) {
    if(!new.target){
          throw new Error(ErrorMessage.SET_NEW_ERROR)
    }
    todoValidate(data);

    this.data = data;
    this.todoDiv = document.querySelector("#todo-list");

    this.render = function() {        
        this.todoDiv.innerHTML = this.data.map((todo => `<div class="${todo.isCompleted}">${todo.text}</div>`)).join('')
      
    }

    this.setState = function(nextData){
        todoValidate(nextData);
        this.data = nextData;
        this.render();
    }
  }

  export default TodoList;
