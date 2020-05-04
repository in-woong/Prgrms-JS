import { validateData } from './validator.js'

function TodoList($target, data, { onUpdate }) {

    this.todoData = [...data];
    validateData(this.todoData);
    
    if (!new.target) {
        throw new Error('TodoList를 new로 호출해주세요.');
    }

    if ($target) {
        throw new Error('선택된 HTML Element가 없습니다.');
    }

    $target.addEventListener('click', event => {
        const index = event.target.parentNode.dataset.id;
        const todoItem = this.todoData[index];

        if (event.target.className === 'todo-text') {            
            if(todoItem.isCompleted) {
                event.target.style.textDecoration = '';
                todoItem.isCompleted = false;
            } else {
                event.target.style.textDecoration = 'line-through';
                todoItem.isCompleted = true;
            }
            onUpdate(this.todoData);
        }

        if (event.target.className === 'remove-button') {
            event.target.parentElement.remove();
            this.todoData.splice(index, 1);

            onUpdate(this.todoData);
        }
    }) 

    this.render = function() {
        $target.innerHTML = `<ul>${this.todoData.map( (todoItem, index) => 
            todoItem.isCompleted 
            ? `<li data-id=${index} class="todo-item">
                <span class="todo-text" style="text-decoration: line-through;">${todoItem.text}</span><button class="remove-button"><i class="fas fa-trash-alt"></i> Delete</button>
               </li>` 
            : `<li data-id=${index} class="todo-item">
                <span class="todo-text"> ${todoItem.text} </span><button class="remove-button"><i class="fas fa-trash-alt"></i> Delete</button>
                </li>`
            ).join('')}<ul>`;      
    }

    this.setState = function(nextData) {
        validateData(nextData);

        this.todoData = nextData;
        this.render();
    }

    this.render();
}

export default TodoList;
