const todoList = new TodoList({todoItems: data, selector: '#todo-list'});
setTimeout(() => todoList.setState({nextTodoItems: nextData}), 500);

const developerTodoList = new TodoList({todoItems: developerTodoItems, selector: '#developer-todo-list'});
setTimeout(() => developerTodoList.setState({nextTodoItems: nextDeveloperTodoItems}), 500);

const happyLifeTodoList = new TodoList({todoItems: happyLifeTodoItems, selector: '#happy-life-todo-list'});
setTimeout(() => happyLifeTodoList.setState({nextTodoItems: nextHappyLifeTodoItems}), 500);

//Mission2 필수구현
const $todoItemAddButton = document.querySelector('#todo-item-add-button');
const $todoItemAddInput = document.querySelector('#todo-item-add-input');

const ALLOWED_ADD_TODO_ITEM_KEY = {
    ENTER: 'Enter',
    TAB: 'Tab',
};
//입력창에서 Enter, Tab 키 동작 시 TodoItem 추가
$todoItemAddInput.addEventListener('keydown', event => {
    if (Object.values(ALLOWED_ADD_TODO_ITEM_KEY).some(key => key === event.key)) {
        saveNewTodoItem();
    }
});
//Save 버튼 클릭 시 저장 TodoItem 추가
$todoItemAddButton.addEventListener('click', () => {
    saveNewTodoItem();
}, );

function saveNewTodoItem() {
    todoList.addTodoItem({todoItemText: $todoItemAddInput.value});
    $todoItemAddInput.value = '';
    setTimeout(() => $todoItemAddInput.focus(), 0);
}
