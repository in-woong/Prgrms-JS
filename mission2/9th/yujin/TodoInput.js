
export default function TodoInput(addTodo){

    this.addTodo = addTodo;

    this.addTodoItem = ($input_target) => {
        const newInputData = {
            text : $input_target.value,
            isCompleted : false,
        }
        this.addTodo(newInputData);
        $input_target.value = "";
        $input_target.focus();
    }

    document.querySelector('#input-todo').addEventListener('keydown', (e) => {
        if(e.key === "Enter") {
            this.addTodoItem(e.target);
        } 
    })
    
    document.querySelector('#button-add').addEventListener('click', () => {
       this.addTodoItem(document.querySelector('#input-todo'));           
    })

    
}