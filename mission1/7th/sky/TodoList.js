import { validateList, validateTarget } from './utils.js';
import { otherTodo } from './data.js';

class TodoList {
    constructor(todoList, elementId) {
        this.$target = document.querySelector(elementId);
        this.namingList = [
            {name: 'text', type : 'string'},
            {name: 'isCompleted', type : 'boolean'}
        ];
        
        validateTarget(this.$target, elementId);
        validateList(todoList, this.namingList);
        
        const ul = document.createElement('ul');
        this.$ul = ul;
        this.$target.appendChild(this.$ul);
        this.todos = todoList;

        this.setState(otherTodo);
        this.render();
    }

    render() {
        this.$ul.innerHTML = this.todos
            .map(data => data.isCompleted ? `<li><del>${data.text}</del></li>` : `<li>${data.text}</li>`)
            .join('');
    }

    setState(nextData) {
        validateTarget(this.$target)
        validateList(nextData, this.namingList);
        this.todos = nextData;
        this.render();
    }
}

export default TodoList;
