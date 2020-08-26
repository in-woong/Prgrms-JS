import { validateList, validateTarget, createUniqueId } from './utils.js';

class TodoList {
    constructor({
        elementId,
        todoList,
        setAppState,
    }) {
        this.$target = document.getElementById(elementId);
        
        validateTarget(this.$target, elementId);
        validateList(todoList);
        
        this.$ul = document.createElement('ul');
        this.$target.appendChild(this.$ul);
        this.todos = todoList;
        this.setAppState = setAppState;

        this.render();
    }

    createTodo(todo, idx) {
        const {text, isCompleted} = todo;
        const newTag = document.createElement('li');
        const del = document.createElement('del');

        newTag.dataset.id = `${createUniqueId()}${idx}`;
        del.textContent = text;

        isCompleted ? newTag.appendChild(del) : newTag.innerHTML = text;

        newTag.addEventListener('click', () => {
            todo['isCompleted'] = !todo['isCompleted'];
            this.setAppState({
                ...todo,
                isToggle: true,
                id: newTag.dataset.id,
            });
            newTag.replaceWith(this.createTodo(todo));
        });

        return newTag;
    }

    render() {
        this.$ul.innerHTML = "";
        const $ulTagFragment = document.createDocumentFragment();
        this.todos.forEach((todo, idx) => {
            const li = this.createTodo(todo, idx);
            $ulTagFragment.appendChild(li);
        });
        this.$ul.appendChild($ulTagFragment);
    }

    setState(todos) {
        validateTarget(this.$target)
        validateList(todos);
        this.todos = todos;
        this.render();
    }
}

export default TodoList;
