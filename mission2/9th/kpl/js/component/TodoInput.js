import { validateTextValueCheck, checkTarget } from '../validator/validation.js'

function TodoInput(addTodoItem ,targetId) {
    this.targetId = targetId;
    this.validate = () => {
        if (new.target !== TodoInput) {
            throw new Error('new 키워드로 함수의 인스턴스를 생성해야 합니다.')
        }
        checkTarget(this.targetId);
        
    };
    this.init = () => {
        const $input = document.getElementById(this.targetId);
        $input.addEventListener('keypress', (event) => {
            if(event.key === 'Enter') {
                const target = event.target;
                const inputData = {text : target && target.value , isCompleted : false};
                validateTextValueCheck(inputData);
                addTodoItem(inputData);
                target.value = "";
            }
        });
    };

    this.init();
}

export default TodoInput
