import { validateData, isValidInstance } from './validator.js';

export default function TodoCount(data) {
    isValidInstance(this, TodoCount);

    this.data = data;

    this.render = function () {
        const $todoCount = document.querySelector('.todo-count');
        this.data.filter(item => item.isCompleted).length;

        $todoCount.innerHTML = `총 : ${this.data.length} / 완료 : ${this.data.filter(todoItem => todoItem.isCompleted).length}`;
    };

    this.setState = function (nextData) {
        this.data = validateData(nextData) && nextData;
        this.render();
    }
}
