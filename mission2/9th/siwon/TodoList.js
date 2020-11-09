import { 
    checkInstance, 
    checkTarget, 
    checkData, 
    checkDataTypes 
} from './validation.js';

export default function TodoList(data, $todoList, app) {

    this.validation = (data) => {
        checkInstance(this);
        checkTarget($todoList);
        checkData(data);
        checkDataTypes(
            data,
            (data) => typeof data.text === 'string' && typeof data.isCompleted === 'boolean'
        );
    }

    this.validation(data);
    this.data = data;
    this.$todoList = $todoList;

    this.render = () => {
        const todoListHtml = this.data
            .map(({text, isCompleted}, index) => ((isCompleted 
                ? `<li data-index="${index}" class="todo-item completed">` : `<li data-index="${index}" class="todo-item">`) 
                + `${text} <button data-index="${index}" class="btn-delete">삭제</button></li>`))
            .join('');
        this.$todoList.innerHTML = `<ul>${todoListHtml}</ul>`;
    }

    this.setState = (nextData) => {
        // check newData validation
        checkData(nextData);
        checkDataTypes(
            nextData,
            (nextData) => typeof nextData.text === 'string' && typeof nextData.isCompleted === 'boolean'
        );

        this.data = nextData;
        this.render();
    }

    this.deleteTodo = (e) => {
        if(e.target.className === 'btn-delete') {
            const deleteIndex = e.target.getAttribute('data-index');
            app.deleteTodo(deleteIndex);
        }
    }

    this.toggleTodo = (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            const toggleIndex = e.target.getAttribute('data-index');
            app.toggleTodo(toggleIndex);
        }
    }

    this.$todoList.addEventListener('click', this.deleteTodo);
    this.$todoList.addEventListener('click', this.toggleTodo);
    
    this.render();
}
