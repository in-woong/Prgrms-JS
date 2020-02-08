import { validator } from '../utils.js';
import TodoItem from './TodoItem.js';

function TodoList({data, toggleTodoItem, removeTodoItem, $target}) {
    this.data;
    this.$listWrapper;
    this.$target;

    this.onClick = e => {
        switch (e.target.nodeName) {
            case 'LI': 
                toggleTodoItem(e.target.dataset.id);
                break;
            case 'SPAN':
                toggleTodoItem(e.target.parentNode.dataset.id);
                break;
            case 'BUTTON':
                removeTodoItem(e.target.parentNode.dataset.id);
                break;
            default: 
                return;
        }
    }

    this.init = () => {
        validator.validateArray(data);
        this.data = data;
        this.$target = $target;
        this.render();
    }
    
    this.render = () => {
        this.$listWrapper = document.createElement('ul');
        this.$listWrapper.classList.add('todo-list-wrapper');
        this.$listWrapper.addEventListener('click', this.onClick);
        this.mapItems();
        this.$target.appendChild(this.$listWrapper);
    };
    
    this.setState = newData => {
        this.data = newData;
        this.mapItems();
    };

    this.mapItems = () => {
        this.data.sort((a, b) => {
            return b.isCompleted ? -1 : 1;
        });
        this.$listWrapper.innerHTML = this.data.map(item => {
            return new TodoItem({
                item
            }).render();
        }).join('');
    }
    
    this.init();
}

export default TodoList;
