import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

export default function App($target) {
    
    console.log(window.localStorage.getItem('todo'));
    this.data = window.localStorage.getItem('todo') ?
                JSON.parse(window.localStorage.getItem('todo')) : [];
    
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
            this.saveDatainLocalStorage(this.data);
        }
        this.render();
    }

    this.removeTodo = (idx) => {
        this.data.splice(idx, 1);
        this.saveDatainLocalStorage(this.data);
        this.render();
    }

    this.toggleCompleted = (idx) => {
        this.data[idx].isCompleted = !this.data[idx].isCompleted;
        this.saveDatainLocalStorage(this.data);
        this.render();
    }

    this.removeAllTodo = () => {
        this.data.length = 0;
        this.saveDatainLocalStorage(this.data);
        this.render();
    }

    this.saveDatainLocalStorage = (newData) => {
        console.log(newData);
        window.localStorage.setItem('todo', JSON.stringify(newData));
        console.log(window.localStorage.getItem('todo'));
    }

    this.render = function(){
        if(this.isValidData(this.data)){
            this.todoList.render();
            this.todoCount.render();
        }
    }

    this.todoInput = new TodoInput($target, this.addTodo, this.removeAllTodo);
    this.todoList = new TodoList(this.data, $target, this.removeTodo, this.toggleCompleted);
    this.todoCount = new TodoCount($target, this.data);
}
