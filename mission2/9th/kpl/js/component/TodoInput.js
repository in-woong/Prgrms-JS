import TodoList from './TodoList.js';
import { useNewKeyword, validateTextValueCheck, checkTarget, validateObjectType } from '../validator/validation.js'
function TodoInput(targetId, todoList) {
    this.targetId = targetId;
    this.todoList = todoList;
    this.validate = () => {
        useNewKeyword(this);
        checkTarget(this.targetId);
        validateObjectType(todoList, TodoList);
    };
    this.render = () => {
        const $input = document.getElementById(this.targetId);
        $input.addEventListener('keypress', (event) => {
            if(event.key === 'Enter') {
                const target = event.target;
                const inputData = {text : target && target.value , isCompleted : false};
                validateTextValueCheck(inputData);
                addTodoItem(inputData, todoList);
                target.value = "";
            }
        });
    };
    this.setState = (nextData) => {
        this.validate();
        this.todoList = nextData;
        this.render();
    };
    
    this.setState(todoList);
}

function addTodoItem (inputData, todoList) {
    todoList.setState([
        ...todoList.data,
        inputData
    ]);
    
}

export default TodoInput
