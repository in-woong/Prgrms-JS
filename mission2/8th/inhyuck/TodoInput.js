function TodoInput({$targetElement, onSaveTodoItem}) {
    this.$targetElement = $targetElement;

    this.$targetElement.innerHTML = `
            <label for="todo-item-add-input">Enter what to do</label>
            <input type="text" id="todo-item-add-input">
            <button id="todo-item-add-button">Save</button>
            <button id="todo-item-remove-all-button">Remove All</button>
        `;

    this.$todoItemAddInput = this.$targetElement.querySelector('#todo-item-add-input');
    this.$todoItemAddButton = this.$targetElement.querySelector('#todo-item-add-button');
    this.$todoItemRemoveAllButton = this.$targetElement.querySelector('#todo-item-remove-all-button');

    const saveTodoItem = () => {
        onSaveTodoItem({todoItemText: this.$todoItemAddInput.value});
        this.$todoItemAddInput.value = '';
        this.$todoItemAddInput.focus();
    };

    //입력창에서 Enter 키 동작 시 TodoItem 추가
    this.$todoItemAddInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            saveTodoItem();
        }
    });
    //Save 버튼 클릭 시 저장 TodoItem 추가
    this.$todoItemAddButton.addEventListener('click', () => {
        saveTodoItem();
    });

    this.$todoItemRemoveAllButton.addEventListener('click', event => {
        event.target.dispatchEvent(new CustomEvent('removeAll', {
            bubbles: true,
        }));
    });
}

