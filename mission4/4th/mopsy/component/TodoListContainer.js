import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import api from '../api.js';
import spinner from './Spinner.js';

function TodoListContainer({ username, $target }) {
    this.data = [];
    this.username;
    this.$target;
    this.$listContainer;
    this.$btnBack;
    this.$inputArea;
    this.todoInput;
    this.todoList;
    this.todoCount;
    
    this.addTodoItem = async value => {
        await this.update(api.addTodo(this.username, value));
    }

    this.toggleTodoItem = async _id => {
        await this.update(api.toggleTodo(this.username, _id));
    }

    this.removeTodoItem = async _id => {
        await this.update(api.removeTodo(this.username, _id));
    }

    this.update = async promise => {
        const $spinner = spinner();
        this.$listContainer.appendChild($spinner);
        await promise;
        this.data = await api.getTodos(this.username);
        this.todoList.setState(this.data);
        this.todoCount.setState(this.data);
        this.$listContainer.removeChild($spinner);
    }

    this.init = async () => {
        this.username = username;
        this.$target = $target;
        this.staticRender();
        this.data = await api.getTodos(this.username);
        this.asyncRender();
    }

    this.dispatchChangePage = e => {
        e.target.dispatchEvent(new CustomEvent('changePage', {
            bubbles: true,
            detail: {
                pageName: 'user',
            }
        }));
    }

    this.staticRender = () => {
        this.$target.innerHTML = `
            <button class="btn-back">< 뒤로</button>
            <h1>${this.username}'s Todolist</h1>
            <div class="input-area"></div> 
            <div class="list-container"></div>
        `;
        
        this.$listContainer = document.querySelector('.list-container');
        this.$listContainer.appendChild(spinner());
        this.$inputArea = document.querySelector('.input-area');
        this.$btnBack = document.querySelector('.btn-back');
        this.$btnBack.addEventListener('click', this.dispatchChangePage);
        
        this.todoInput = new TodoInput({
            initValue: '',
            onEnter: this.addTodoItem,
            $target: this.$inputArea,
        });
    }

    this.asyncRender = () => {
        this.$listContainer.innerHTML = '';
        this.todoList = new TodoList({
            data: this.data,
            toggleTodoItem: this.toggleTodoItem,
            removeTodoItem: this.removeTodoItem,
            $target: this.$listContainer,
        });
    
        this.todoCount = new TodoCount({
            data: this.data,
            $target: this.$listContainer,
        });
    };

    this.init();
}

export default TodoListContainer;
