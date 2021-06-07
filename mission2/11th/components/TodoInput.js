
const todoInput = document.querySelector('input');
const todoForm = document.querySelector('#todo-form');

function TodoInput(addData){

    this.addData=addData
    this.handleSubmit = (event) =>{
        event.preventDefault();
        const curValue = todoInput.value;
        
        //alldata(curValue);
        this.addData(curValue);
        //this.drawTodo(curValue);
        todoInput.value = '';
      }

    todoForm.addEventListener('submit', this.handleSubmit);
}

export default TodoInput;