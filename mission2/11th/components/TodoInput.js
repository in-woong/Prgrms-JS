

function TodoInput($app, addData){
    const todoInput = document.createElement('input');
    
    todoInput.setAttribute("data-component-type","TodoInput");
    todoInput.setAttribute("placeholder", "enter를 치면 todolist가 작성됩니다.");
    $app.appendChild(todoInput);
    
    this.addData=addData
    this.handleSubmit = (event) =>{
        event.preventDefault();
        if(event.keyCode!==13) return;
        const curValue = todoInput.value;
        console.log(curValue)
        //alldata(curValue);
        this.addData(curValue);
        //this.drawTodo(curValue);
        todoInput.value = '';
      }

    todoInput.addEventListener('keyup', this.handleSubmit);
}

export default TodoInput;