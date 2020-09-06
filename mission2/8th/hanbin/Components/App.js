import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'

export default function App(data, $target) {
    
    this.data = data;
    
    this.isValidData = function(data){
        try{
            if((data === undefined) || (data === null)){
                throw new Error("Given data is undefined/null data");
            }
            if(!Array.isArray(data)){
                throw new Error("Given data is not array");
            }
            if(!data.every((item) => (typeof item.text === 'string') && (typeof item.isCompleted === 'boolean'))){
                throw new Error("Given data's value type is incorrect");   
            }
            if(!this instanceof TodoList){
                throw new Error("function was call without new operation");
            }
            return true;
        }   
        catch(e){
            console.error(e);
        }
    }
    
    this.addTodo = (text) => {
        if(text){
            this.data.push({
                text,
                isCompleted: false
            });
        }
        this.render();
    }

    this.removeTodo = function(idx){
        this.data.splice(idx, 1);
        this.render();
    }

    this.toggleCompleted = function(idx){
        this.data[idx].isCompleted = !this.data[idx].isCompleted;
        this.render();
    }

    this.render = function(){
        if(this.isValidData(this.data)){
            this.todoList.render();
        }
    }

    this.todoInput = new TodoInput($target, this.addTodo);
    this.todoList = new TodoList(data, $target, this.removeTodo, this.toggleCompleted);
}
