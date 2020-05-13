import { validateData, isValidInstance } from './validator.js';

export default function TodoList(data, handleEvents) {
    isValidInstance(this, TodoList);

    this.data = data;
    const $todoList = document.querySelector('#todo-list');
    const $removeAllButton = document.querySelector('.button-all-remove');

    $todoList.addEventListener('click', e => {
        const target  = e.target;
        const index = Array.from(target.closest('ul').childNodes).indexOf(target.closest('li'));

        // 할 일 텍스트 클릭하여 완료
        if (target.closest('.text')) {
            handleEvents.toggleItem(index);
        }

        // 할 일 삭제
        if (target.closest('.button-delete')) {
            handleEvents.removeItem(index, 1);
        }
    });

    // 전체 삭제
    $removeAllButton.addEventListener('click', () => {
        const removeAllEvent = new CustomEvent('removeAll');
        $todoList.dispatchEvent(removeAllEvent);
    });

    $todoList.addEventListener('removeAll', () => {
        handleEvents.removeAllItem()
    });

    this.getTodoHtml = function () {
        return this.data.reduce((acc, todoItem) => (
            `${acc}<li><span class="text">${todoItem.isCompleted ? `<s>${todoItem.text}</s>` : todoItem.text}</span><button type="button" class="button-delete" aria-label="삭제"><i class="icon-delete"></i></button></li>`
        ), '');
    };

    this.render = function () {
        $todoList.innerHTML = `<ul class="todos">${this.getTodoHtml()}</ul>`
    };

    this.setState = function (nextData) {
        this.data = validateData(nextData) && nextData;
        this.render();
    }
}
