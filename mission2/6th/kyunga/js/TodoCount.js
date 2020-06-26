import { validateInstance } from './validator.js';

export default function TodoCount({totalCount, completedCount}) {
    validateInstance(this, TodoCount);

    this.totalCount = totalCount;
    this.completedCount = completedCount;

    this.render = function () {
        const $todoCount = document.querySelector('.todo-count');
        $todoCount.innerHTML = `총 : ${this.totalCount} / 완료 : ${this.completedCount}`;
    };

    this.setState = function ({totalCount, completedCount}) {
        this.totalCount = totalCount;
        this.completedCount = completedCount;
        this.render();
    }
}
