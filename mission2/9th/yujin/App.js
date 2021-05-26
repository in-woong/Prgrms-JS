import { checkArray, checkTarget, checkNewKeyword, checkTypes } from './validation.js'
import TodoList from './TodoList.js' 
import TodoInput from './TodoInput.js' 

export default function App(data, $target) {

    this.data = data;
    this.$target = $target;

    this.validation = (data) => {
        checkArray(data);
        checkTarget($target);
        checkNewKeyword(this);
        checkTypes(data
            , ({ text, isCompleted }) => typeof text === 'string' && typeof isCompleted === 'boolean')
    }
    
    this.init = () =>{
        this.TodoList = new TodoList(data, $target, removeTodo , reverseTodo)
        this.TodoInput = new TodoInput(addTodo)
    }

    this.setState = (data) => {
        this.validation(data)
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

    this.validation(this.data);
    this.init();

}