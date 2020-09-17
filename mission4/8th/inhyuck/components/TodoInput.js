export default function TodoInput({ $targetElement, onSaveTodoItem }) {
    this.$targetElement = $targetElement;

    this.render = function () {
        this.$targetElement.innerHTML = `
            <label for="todo-item-add-input">Enter what to do</label>
            <input type="text" id="todo-item-add-input">
            <button class="todo-item-add-button">Save</button>
            <button class="todo-item-remove-all-button">Remove All</button>
        `;

        bindEvents();
    };

    this.setState = function () {
        /* state 를 갖고있지 않는 컴포넌트 */
        this.render();
    };

    const bindEvents = () => {
        const $todoItemAddInput = this.$targetElement.querySelector('#todo-item-add-input');
        const $todoItemAddButton = this.$targetElement.querySelector('.todo-item-add-button');
        const $todoItemRemoveAllButton = this.$targetElement.querySelector('.todo-item-remove-all-button');

        const saveTodoItem = () => {
            onSaveTodoItem({ todoItemText: $todoItemAddInput.value });
            $todoItemAddInput.value = '';
            $todoItemAddInput.focus();
        };

        //입력창에서 Enter 키 동작 시 TodoItem 추가
        $todoItemAddInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                saveTodoItem();
            }
        });
        //Save 버튼 클릭 시 저장 TodoItem 추가
        $todoItemAddButton.addEventListener('click', () => {
            saveTodoItem();
        });

        $todoItemRemoveAllButton.addEventListener('click', event => {
            event.target.dispatchEvent(new CustomEvent('removeAll', {
                bubbles: true,
            }));
        });
    };

    this.render();
}

