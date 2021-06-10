import TodoList from './components/TodoList.js';
import TodoCount from './components/TodoCount.js';
import TodoInput from './components/TodoInput.js';

import { getTodosFromLocalStorage, setTodosFromLocalStorage } from './localStorage.js';

function App($appElem) {
    this.$appElem = $appElem;
    this.todos = getTodosFromLocalStorage();

    const addTodo = (todos, value) => {
        this.setState([
            ...todos,
            {
                text: value,
                isCompleted: false,
            }
        ]);
    };

    const validateTodos = (todoList) => {
        if(!(todoList instanceof TodoList)) throw new Error(`Function is not declared with 'new' keyword.`);
  
        if(todoList.todos === null || todoList.todos === undefined) throw new Error(`'Todos' is ${todoList.todos}.`);
  
        if(!Array.isArray(todoList.todos)) throw new Error(`'Todos' is not Array.`);
        
        todoList.todos.forEach(item => {
            if(!item.hasOwnProperty('text')) throw new Error(`'TodoList' doesn't have 'text' property.`)
            if(!item.hasOwnProperty('isCompleted')) throw new Error(`'TodoList' doesn't have 'isCompleted' property.`);
            if(item === null || item === undefined) throw new Error(`todo is ${todoList.todos}`);
            if(typeof item.text !== 'string') throw new Error(`'${item.text}' is not string.`);
            if(typeof item.isCompleted !== 'boolean') throw new Error(`'${item.isCompleted}' is not boolean.`);
        });
    };

    this.setState = (nextTodos) => {
        this.todos = nextTodos;
        this.TodoList.setState(nextTodos);
        this.TodoCount.setState(nextTodos);
        setTodosFromLocalStorage(nextTodos);
    };

    this.render = () => {
        this.TodoInput = new TodoInput(
            this.$appElem,
            this.todos,
            addTodo
        );
        this.TodoList = new TodoList(
            this.$appElem,
            this.todos,
            validateTodos
        );
        this.TodoCount = new TodoCount(
            this.$appElem,
            this.todos
        );
    };

    try {
        this.render();
    } catch(e) {
        new Error(e);
    };
};

export default App;
