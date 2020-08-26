import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { customPartId, inputPartId, todoCountId, appId } from './data.js';
import { showError, initTodo, saveTodosInLS } from './utils.js';

class App {
    constructor() {
        try {
            this.todoState = {
                todoList : [...initTodo()],
                totalCount: [...initTodo()].length,
            };
            this.$app = document.getElementById(appId);

            this.todoInput = new TodoInput({
                inputPartId,
                $app: this.$app,
                setAppState : this.setState.bind(this),
            });
            this.todoList = new TodoList({
                elementId: customPartId,
                todoList: this.todoState.todoList,
                setAppState: this.setState.bind(this),
            });
            this.todoCount = new TodoCount({
                elementId: todoCountId,
                totalCount: this.todoState.totalCount,
            });

            this.bindEventListener();
        } catch(err) {
            showError(err);
            console.log(err.stack);
        }
    }

    setState(todoState) {
        const {removeAll, isToggle, isCompleted, id} = todoState;

        if(removeAll) {
            this.todoState.todoList = [];
        } else if(isToggle) {
            this.todoState.todoList = this.todoState.todoList.map(
                todo => todo.id === id ? todo.isCompleted = isCompleted : todo
            )
        } else {
            this.todoState.todoList = [...this.todoState.todoList, todoState];
        }
        saveTodosInLS(this.todoState.todoList);
        this.todoState.totalCount = this.todoState.todoList.length;
        this.todoList.setState(this.todoState.todoList);
        this.todoCount.setState(this.todoState.totalCount);
    }

    bindEventListener() {
        this.$app.addEventListener('removeAll', () => this.setState({removeAll: true}));
    }
}

export default App;
