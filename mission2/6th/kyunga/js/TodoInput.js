import { validateInstance } from './validator.js';

export default function TodoInput(removeItem) {
    validateInstance(this, TodoInput);

    const $inputTodo = document.querySelector('.input-todo');
    const $buttonAdd = document.querySelector('.button-add');
    const $form = document.querySelector('form');

    $form.addEventListener('submit', e => {
        e.preventDefault();
    });

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
