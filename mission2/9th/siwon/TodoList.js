import { 
    checkInstance, 
    checkTarget, 
    checkDataTypes 
} from './validation.js';

export default function TodoList(data, $todoList, appDeleteTodo, appToggleTodo) {

    checkInstance(this);
    checkTarget($todoList);
    this.dataValidation = (data) => {
        checkDataTypes(data, (cbData) => typeof cbData.text === 'string' && typeof cbData.isCompleted === 'boolean');
    }

    this.dataValidation(data);
    this.data = data;
    this.$todoList = $todoList;

    this.render = () => {
        const todoListHtml = this.data
            .map(({text, isCompleted}, index) => `<li data-index="${index}" class="todo-item${isCompleted ? ' completed' : ''}"> ${text} <button data-index="${index}" class="btn-delete">삭제</button></li>`)
            .join('');
        this.$todoList.innerHTML = `<ul>${todoListHtml}</ul>`;
    }

    this.setState = (nextData) => {
        this.dataValidation(nextData);  // check newData validation
        this.data = nextData;
        this.render();
    }

    this.deleteTodo = (e) => {
        if(e.target.className === 'btn-delete') {
            const deleteIndex = e.target.getAttribute('data-index');
            appDeleteTodo(deleteIndex);
        }
    }

    this.toggleTodo = (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            const toggleIndex = e.target.getAttribute('data-index');
            appToggleTodo(toggleIndex);
        }
    }

    this.$todoList.addEventListener('click', this.deleteTodo);
    this.$todoList.addEventListener('click', this.toggleTodo);
    
    this.render();
}
