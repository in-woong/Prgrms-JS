
import TodoList from './TodoList.js' 
import TodoInput from './TodoInput.js' 

export default function App(data) {

    this.data = data;
    const $target = document.querySelector('#todo-list')
    
    this.init = () =>{
        //this.TodoList = new TodoList(data, document.querySelector('#todo-list'))
        this.TodoList = new TodoList(data, $target, removeTodo , reverseTodo)
        this.TodoInput = new TodoInput(addTodo)
    }

    this.setState = (data) => {
        this.TodoList.setState(data);
    }

    const addTodo = (newTodo) =>{
        this.data.push(newTodo);
        this.setState(this.data);
    }

    const removeTodo = (idx) => {
        this.data.splice(idx,1);
        this.setState(this.data);
    }

    const reverseTodo = (idx) => {
        let data = this.data[idx];
        data.isCompleted = !data.isCompleted
        this.setState(this.data);
    }

    this.init();

}