import { 
    checkTarget
} from './validation.js';

const ENTER_KEY_CODE = 13;    // for enter

export default function TodoInput($todoInput, addTodo) {

    this.validation = () => {
        checkTarget($todoInput);
    }
    this.$todoInput = $todoInput;

    this.$todoInput.addEventListener("keyup", (e) => {
        if (e.keyCode === ENTER_KEY_CODE) { 
            if (e.target.value.length === 0) {
                alert("할일을 입력해주세요!!");
            } else {
                addTodo(this.$todoInput.value);
                // 새로운 input을 위한 초기화 및 바로 입력가능하도록 focus 지정
                this.$todoInput.value = null;
                this.$todoInput.focus();
            }
        }
    });

}
