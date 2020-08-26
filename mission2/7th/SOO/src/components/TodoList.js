import {
    validate,
    printError
} from '../utils/validation.js';

export default class TodoList {
    constructor({
        htmlID,
        getLocalStorage,
        addData,
        removeData,
        setLocalStorage,
        countTodos
    }) {
        this.setLocalStorage = setLocalStorage
        this.addData = addData
        this.removeData = removeData
        this.countTodos = countTodos
        this.todos = getLocalStorage(htmlID);
        this.todosUL = document.getElementById(htmlID);
        this.todosUL.addEventListener('click', (e) => this.handleClick(e));
    }

    renderTodoList = function(todos) {
        this.todosUL.innerHTML = todos
            .map((todo) =>
                `<li class='todosLI' data-id=${todo.id}>
                    ${todo.isCompleted? '<span class="completedBadge">DONE</span>':''}
                    ${todo.text}
                    <button class='deletebutton' data-type='delbtn'>✕</button>
                    </li>`
            ).join('');
    }

    render = () => {
        try {
            this.renderTodoList(this.todos);
        } catch (err) {
            console.trace('에러위치')
            console.log(`
                        현재 발생한 에러는 "${err.message}"
                        입니다.확인해보세요 `)
            printError(err.message);
        }
    }

    setState = (instanceTodoList) => {
        try {
            this.todos = validate(instanceTodoList);
            this.setLocalStorage(this.todos);
            this.render();
        } catch (err) {
            console.trace('에러위치')
            console.log(`
            현재 발생한 에러는 "${err.message}"
            입니다.확인해보세요 `)
            printError(err.message);
        }
    }

    handleTxt = (dataID) => {
        const targetIndex = this.todos.findIndex(todo => parseInt(todo.id) == dataID);
        const nextTodos = [...this.todos];
        nextTodos[targetIndex].isCompleted = true;
        this.addData(nextTodos);
    }

    handleBtn = (btnID) => {
        this.todos = this.todos.filter(todo => parseInt(todo.id) !== btnID)
        this.removeData(this.todos)
    }
    // map, filter, reduce, some, every
    handleClick = (e) => {
        const dataID = parseInt(e.target.dataset.id);
        const btnID = parseInt(e.target.parentNode.dataset.id);
        if (e.target.dataset.type === 'delbtn') {
            this.handleBtn(btnID);
        } else {
            this.handleTxt(dataID)
        }
    }
}
