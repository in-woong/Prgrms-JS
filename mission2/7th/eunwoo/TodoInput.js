const ENTER_KEY = 13;
class TodoInput {
    constructor() {
        this.todoInput = document.getElementById('todo-input');
        this.enterButton = document.getElementById('enter-button');
        this.addEnterListener();
    }

    validateInput(value) {
        if (value === '') {
            alert('할일을 입력해주세요.');
            return false;
        }
        if (value.length > 100) {
            alert(`100자 이하로 입력해주세요. 지금길이: ${value.length}`);
            return false;
        }
        return true;
    }

    addEnterListener() {
        if (this.enterButton !==  null) {
            this.enterButton.onclick = () => {
                if (this.validateInput(this.todoInput.value)) {
                    this.onEnterListener(this.todoInput.value);
                }
            };
        }
        if (this.todoInput != null) {
            this.todoInput.onkeydown = (event) => {
                if (event.keyCode === ENTER_KEY) {
                    if (this.validateInput(this.todoInput.value)) {
                        this.onEnterListener(this.todoInput.value);
                    }
                }
            }
        }
    }

    setOnNewDataListener(listener) {
        this.onEnterListener = listener;
    }

    render() {
        this.todoInput.value = '';
    }
}
