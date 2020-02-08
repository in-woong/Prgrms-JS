import { KEY_CODE } from '../constants.js';

function TodoInput({initValue, onEnter, $target }) {
    this.value = initValue;
    this.$input;
    this.$target;
    this.$fragment;

    this.keyupEvent = async e => {
        if (e.target.value === '') {
            return;
        }
        if (e.keyCode === KEY_CODE.ENTER) {
            const value = e.target.value;
            this.clearInput();
            await onEnter(value);
        }
    }

    this.clearInput = () => {
        this.$input.value = '';
    }

    this.init = () => {
        this.$target = $target;
        this.render();
        
    }
    this.render = () => {
        this.$input = document.createElement('input');
        this.$input.classList.add('todo-input');
        this.$input.placeholder = '할 일을 입력해주세요';
        this.$input.type = 'text';
        this.$input.value = this.value;
        this.$input.addEventListener('keyup', this.keyupEvent);
        this.$target.appendChild(this.$input);
    }

    this.init();
}

export default TodoInput;
