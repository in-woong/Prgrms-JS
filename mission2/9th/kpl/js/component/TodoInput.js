import TodoList from './TodoList.js';
import { useNewKeyword, validTextValudCheck, checkTarget, validObjectType } from '../validator/validation.js'
function TodoInput(targetId, todoList) {
    this.targetId = targetId;
    this.todoList = todoList;
    this.validation = () => {
        useNewKeyword(this);
        checkTarget(this.targetId);
        validObjectType(todoList, TodoList);
    };
    this.render = () => {
        const $input = document.getElementById(this.targetId);
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
        this.validation();
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
