const ALLOWED_ADD_TODO_ITEM_KEY = {
    ENTER: 'Enter',
    TAB: 'Tab',
};

function TodoInput({$targetElement, onSaveTodoItem}) {
    this.$todoInputWrap = $targetElement;
    this.$todoItemAddInput = null;
    this.$todoItemAddButton = null;

    this.render = function () {
        this.$todoInputWrap.innerHTML = `
            <label for="todo-item-add-input">Enter what to do</label>
            <input type="text" id="todo-item-add-input">
            <button id="todo-item-add-button">Save</button>
        `;

        this.$todoItemAddInput = this.$todoInputWrap.querySelector('#todo-item-add-input');
        this.$todoItemAddButton = this.$todoInputWrap.querySelector('#todo-item-add-button');
        //입력창에서 Enter, Tab 키 동작 시 TodoItem 추가
        this.$todoItemAddInput.addEventListener('keydown', event => {
            if (Object.values(ALLOWED_ADD_TODO_ITEM_KEY).some(key => key === event.key)) {
                this.saveTodoItem();
            }
        });
        //Save 버튼 클릭 시 저장 TodoItem 추가
        this.$todoItemAddButton.addEventListener('click', () => {
            this.saveTodoItem();
        });
    };

    this.saveTodoItem = function () {
        onSaveTodoItem({todoItemText: this.$todoItemAddInput.value});
        this.$todoItemAddInput.value = '';
        setTimeout(() => this.$todoItemAddInput.focus(), 0);
    };

    this.render();
}
