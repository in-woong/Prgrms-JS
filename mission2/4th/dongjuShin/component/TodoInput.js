function TodoInput({initValue, callback, $target }) {
    this.value = initValue;
    this.input;

    this.render = () => { 
        this.input = document.createElement('input');
        this.input.classList.add('todo-input');
        this.input.value = this.value;
        this.input.placeholder = '할 일을 입력해주세요';
        this.input.addEventListener('keyup', e => {
            if (e.target.value === '') {
                return;
            }
            if (e.keyCode === KEY_CODE.ENTER) {
                callback(e.target.value);
            }
        });
        $target.appendChild(this.input);
    }

    this.cleaerInput = () => {
        this.input.value = '';
    }

    this.render();
}
