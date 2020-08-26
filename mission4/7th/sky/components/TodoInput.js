const removeAll = new Event('removeAll');

class TodoInput {
    constructor({
        elementId,
        $app,
        addTodo
    }) {
        this.$todoInput = document.getElementById(elementId);
        this.addTodo = addTodo;
        this.$app = $app;

        this.render();
    }

    submitUserInput(evt, userInput) {
        evt.preventDefault();

        if(userInput.value.length > 0) {
            this.addTodo({
                content: userInput.value
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
        this.$removeAllBtn.addEventListener('click', () => this.$app.dispatchEvent(removeAll));

        this.$form.appendChild(this.$userInput);
        this.$form.appendChild(this.$submitInput);
        this.$todoInput.appendChild(this.$form);
        this.$todoInput.appendChild(this.$removeAllBtn);

        this.$form.addEventListener('submit', evt => this.submitUserInput(evt, this.$userInput));
    }
}

export default TodoInput;
