import { $ } from '../../utils/index.js';

export class TodoForm {
    constructor() {
        this.form = $('form');
    }

    registerFormEvent({ addTodo, removeAllTodo }) {

        const $removeAllBtn = $('#button--remove');

        const event = new CustomEvent('removeAllTodo', {
            detail: {
                removeAllTodo
            },
        });

        $removeAllBtn.addEventListener('removeAllTodo', (e) => e.detail.removeAllTodo());

        this.form.addEventListener('click', (e) => {
            const isBtnRemove = e.target.id === 'button--remove';

            if (isBtnRemove && confirm('정말로 모두 삭제하시겠습니까?')) {
                $removeAllBtn.dispatchEvent(event);
            }
        });

        this.form.addEventListener('submit', (e) => {

            e.preventDefault();

            const input = e.target.children[0];
            const todo = input.value;

            if (todo.trim()) {
                addTodo({ todo: { text: todo, isCompleted: false } });
                input.value = '';
            }
        });
    }
}