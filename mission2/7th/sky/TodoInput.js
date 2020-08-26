const removeAll = new Event('removeAll');

class TodoInput {
    constructor({
        inputPartId,
        $app,
        setAppState
    }) {
        this.$todoInput = document.getElementById(inputPartId);
        this.setAppState = setAppState;
        this.$app = $app;

        this.render();

        this.$form.addEventListener('submit', evt => {
            evt.preventDefault();
            this.submitUserInput(this.$userInput);
        });
    }

    submitUserInput(userInput) {
        if(userInput.value.length > 0) {
            this.setAppState({
                text: userInput.value,
                isCompleted: false,
            });
            userInput.value = '';
            userInput.focus();
        } else {
            throw new Error(`Empty text`);
        }
    }

    render() {
        this.$form = document.createElement('form');
        this.$userInput = document.createElement('input');
        this.$submitInput = document.createElement('input');
        this.$removeAllBtn = document.createElement('button');

        this.$userInput.type = 'text';
        this.$userInput.placeholder = '오늘의 할일을 입력하세요';
        this.$submitInput.type = 'submit';
        this.$submitInput.value = '추가'
        this.$removeAllBtn.textContent = '모두 삭제';
        this.$removeAllBtn.addEventListener('click', evt => {
            evt.preventDefault();
            this.$app.dispatchEvent(removeAll);
        });

        this.$form.appendChild(this.$userInput);
        this.$form.appendChild(this.$submitInput);
        this.$todoInput.appendChild(this.$form);
        this.$form.appendChild(this.$removeAllBtn);
    }
}

export default TodoInput;
