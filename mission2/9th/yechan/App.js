console.log("App is running");


class App{
    $target =null;

    constructor($target){    
        this.todoList = new TodoList({
            $target,
            onClick: data=>{
                
            }
        })

        this.todoInput = new TodoInput({
            $target,
            onInput: data=>{
                this.setState(data)
            }
        })
        console.log(this)
        console.log(this.todoList)
    }

    setState = (nextData)=>{
        console.log("in");
        this.data = nextData;
        this.todoList.setState(nextData);
    }
}
