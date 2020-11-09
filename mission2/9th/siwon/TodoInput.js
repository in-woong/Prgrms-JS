import TodoList from './TodoList.js';
import { 
    checkTarget, 
    checkData, 
    checkDataTypes 
} from './validation.js';

const ENTER_KEY_CODE = 13;    // for enter

export default function TodoInput($todoInput, app) {

    this.validation = () => {
        checkTarget($todoInput);
    }
    this.$todoInput = $todoInput;

    this.addTodo = ($target) => {
        console.log("this is addTodo function in TodoInput.")
        
        app.addTodo(this.$todoInput.value);

        this.$todoInput.value = null;
        this.$todoInput.focus();
    }

    this.$todoInput.addEventListener("keyup", (e) => {
        if (e.keyCode === ENTER_KEY_CODE) { 
            if (e.target.value.length === 0) {
                alert("할일을 입력해주세요!!");
            } else {
                this.addTodo(e.target);
            }
        }
    });

}