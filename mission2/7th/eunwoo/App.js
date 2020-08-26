class App {
    constructor() {
        this.todoListElem = document.querySelector('#todo-list');
        this.editButton = document.getElementById('edit-button');
        this.deleteAllButton = document.getElementById('delete-all-button');
        this.todoInput = new TodoInput();
        this.todoCount = new TodoCount();
        this.todoList = new TodoList(this.todoListElem);
        console.log(this.todoList);
    }

    init() {
        console.log(this.todoList);
        const savedTodoList = getTodoListFromLocalStorage();
        const editModeEvent = new Event('edit');
        const deleteAllEvent = new Event('deleteAll');

        this.todoList.setOnDataChangedCallback(() => {
            console.log(this.todoList);
            this.todoList.render();
            this.todoInput.render();
            this.todoCount.render(this.todoList.getListLength(),
                this.todoList.getCompleteNum());
            setObjectToLocalStorage(this.todoList.dataList);
        });
        this.todoList.setState(savedTodoList);
        this.todoInput.setOnNewDataListener((inputValue) => {
            const newData = {
                id: makeId(),
                text: inputValue,
                isCompleted: false,
            }
            this.todoList.addData(newData);
            console.log(this.todoList);
        });
        this.todoList.onDataChanged();

        this.editButton.onclick = () => {
            this.todoListElem.dispatchEvent(editModeEvent);
        }
        this.deleteAllButton.onclick = () => {
            const isConfirmed = confirm("모든 할일을 삭제 하시겠습니까? 복구되지 않습니다.");
            if (isConfirmed) {
                this.todoListElem.dispatchEvent(deleteAllEvent);
            }
        }
        this.todoListElem.addEventListener('edit', () => {
            this.todoList.toggleEditMode();
        })
        this.todoListElem.addEventListener('deleteAll', () => {
            this.todoList.setState([]);
        });
    }
}
