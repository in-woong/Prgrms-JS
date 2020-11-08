import TodoList from './TodoList.js';
import { useNewKeyword, validTextValudCheck, checkTarget, validObjectType } from '../validator/validation.js'
function TodoInput(target, todoList) {
    this.target = target;
    this.todoList = todoList;
    this.validation = () => {
        useNewKeyword(this);
        checkTarget(this.target);
        validObjectType(todoList, TodoList);
    };
    this.render = () => {
        const $input = document.getElementById(this.target);
        $input.addEventListener('keypress', (event) => {
            if(event.key === 'Enter') {
                let target = event.target;
                let inputData = {text : target && target.value , isCompleted : false};
                validTextValudCheck(inputData);
                addTodoItem(inputData, todoList);
                target.value = "";
            }
        });
    };
    this.setState = (nextData) => {
        this.todoList = nextData;
        this.render();
    };
    this.validation();
    this.setState(todoList);
}

function addTodoItem (inputData, todoList) {
    todoList.setState([
        ...todoList.data,
        inputData
    ]);
    
}

export default TodoInput
