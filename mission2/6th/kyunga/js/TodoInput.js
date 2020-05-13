import { isValidInstance } from './validator.js';

export default function TodoInput(removeItem) {
    isValidInstance(this, TodoInput);

    const $inputTodo = document.querySelector('.input-todo');
    const $buttonAdd = document.querySelector('.button-add');

    $buttonAdd.addEventListener('click', e => {
        this.onClickAdd();
    });

    $inputTodo.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            this.onClickAdd();
        }
    });

    this.onClickAdd = function () {
        const inputText = $inputTodo.value;

        if (inputText.trim() === '') {
            alert('내용을 입력해주세요!');
            $inputTodo.focus();

            return;
        }

        $inputTodo.value = '';
        $inputTodo.focus();

        removeItem(inputText);
    };
}
