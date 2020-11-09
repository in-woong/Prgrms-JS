import { 
    checkInstance, 
    checkTarget, 
    checkData, 
    checkDataTypes 
} from './validation.js';

export default function TodoList(data, $targetId) {
    if (!(this instanceof TodoList)) {
        throw new Error("TodoList의 instance가 아닙니다.");
    }

    this.data = data;
    this.$targetId = $targetId;

    this.validation = (data) => {
        checkInstance(this);
        checkTarget(this.$targetId);
        checkData(data);
        checkDataTypes(
            data,
            (data) => typeof data.text === 'string' && typeof data.isCompleted === 'boolean'
        )
    }

    this.render = () => {
        const todoListHtml = this.data
            .map(({text, isCompleted}, index) => ((isCompleted 
                ? `<li data-index="${index}" class="todo-item completed">` : `<li data-index="${index}" class="todo-item">`) 
                + `${text} <button data-index="${index}" class="btn-delete">삭제</button></li>`))
            .join('');
        document.querySelector(`${this.$targetId}`).innerHTML = `<ul>${todoListHtml}</ul>`;
    }

    this.setState = (nextData) => {
        this.data = nextData;

        // check newData validation
        checkData(this.data);
        checkDataTypes(
            data,
            (data) => typeof data.text === 'string' && typeof data.isCompleted === 'boolean'
        )

        this.render();
    }

    this.deleteTodo = (e) => {
        if(e.target.className === 'btn-delete') {
            const deleteIndex = e.target.getAttribute('data-index');
            this.data.splice(deleteIndex, 1);
            this.setState(this.data);
        }
    }

    this.toggleTodo = (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            const toggleIndex = e.target.getAttribute('data-index');
            this.data[toggleIndex].isCompleted = !this.data[toggleIndex].isCompleted;
            this.render();
            console.log(data);
        }
    }

    document.querySelector(`${this.$targetId}`).addEventListener('click', this.deleteTodo);
    document.querySelector(`${this.$targetId}`).addEventListener('click', this.toggleTodo);

    this.validation(this.data);
    this.render();
}
