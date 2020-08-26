import { validateList, validateTarget } from '../lib/utils.js';
import { todoDataList } from '../lib/type.js';
import { todoListId, todoDoneId } from '../lib/data.js';

class TodoList {
    constructor({
        elementId,
        todoList,
        deleteTodo,
        toggleTodo,
    }) {
        this.$currentListId = elementId;
        this.$todoList = document.getElementById(elementId);
        
        validateTarget(this.$todoList, elementId);
        validateList(todoList, todoDataList);

        this.todos = todoList;
        this.deleteTodo = deleteTodo;
        this.toggleTodo = toggleTodo;
        this.$ul = document.createElement('ul');
        this.$todoList.appendChild(this.$ul);
        this.render();

        this.bindEventListener();
    }

    createTodo(todo) {
        const { content, _id, isCompleted } = todo;
        const newTag = document.createElement('li');
        const removeBtn = document.createElement('button');
        const span = document.createElement('span');        
        span.textContent = content;
        const del = document.createElement('del');
        del.textContent = content;

        isCompleted ? newTag.appendChild(del) : newTag.appendChild(span);

        removeBtn.textContent = '삭제';
        newTag.appendChild(removeBtn);
        newTag.dataset.id = _id;
        newTag.draggable = true;

        newTag.addEventListener('click', async (evt) => {
            if(evt.target.tagName === 'BUTTON') {
                await this.deleteTodo(_id);
            } else if(evt.target.tagName === 'SPAN' || evt.target.tagName === 'DEL') {
                todo['isCompleted'] = !todo['isCompleted'];
                await this.toggleTodo(_id);
            }
        });

        newTag.addEventListener('dragstart', evt => {
            evt.dataTransfer.setData('text/plain', JSON.stringify({
                ...todo,
                currentListId : this.$currentListId
            }));
            evt.dataTransfer.dropEffect = "move";
        });

        return newTag;
    }

    render() {
        const $todoListFragment = document.createDocumentFragment();
        this.$ul.innerHTML = '';
        this.todos.forEach(todo => {
            if((this.$currentListId === todoDoneId && todo.isCompleted)
            || this.$currentListId === todoListId && !todo.isCompleted) {
                const li = this.createTodo(todo);
                $todoListFragment.appendChild(li);
            }
        });
        this.$ul.appendChild($todoListFragment);
    }

    setState(todos) {
        validateList(todos, todoDataList);
        this.todos = todos;
        this.render();
    }

    loadApiData(isLoading, delay) {
        if(this.$ul.classList.contains('container')
        && this.$ul.classList.contains('loading')) {
            this.$ul.classList.remove('container', 'loading');
        }

        this.render();

        if(isLoading && parseInt(delay) !== 0) {
            this.$ul.innerHTML = '';
            this.$ul.classList.add('container', 'loading');
        }
    }

    dragOverHandler(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    }

    bindEventListener() {
        this.$todoList.addEventListener('dragover', this.dragOverHandler);
        this.$todoList.addEventListener('drop', async (evt) => {
            try {
                evt.preventDefault();
                const todo = JSON.parse(evt.dataTransfer.getData("text/plain"));
                const { _id, currentListId } = todo;
                if(evt.target.id && evt.target.id !== currentListId) {
                    await this.toggleTodo(_id);
                }
            } catch(err) {
                throw new Error(err);
            }
        });
    }
}

export default TodoList;
