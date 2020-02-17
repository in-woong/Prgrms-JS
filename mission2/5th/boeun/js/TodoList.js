function TodoList($target, data, todoUpdateEvent) {

    this.data = data;
    
    if (!new.target) {
        throw new Error('TodoList를 new로 호출해주세요.');
    }

    validateData(this.data);

    if ($target == null) {
        throw new Error('선택된 HTML Element가 없습니다.');
    }

    const toggleTodoEvent = new CustomEvent('todo-toggleTodo');
    const removeTodoEvent = new CustomEvent('todo-removeTodo');

    $target.addEventListener('click', event => {
        const index = event.target.parentElement.id.replace('todo-', '');
        const todoItem = this.data[index];

        if (event.target.className === 'todo-text') {            
            if(todoItem.isCompleted) {
                event.target.style.textDecoration = '';
                todoItem.isCompleted = false;
            } else {
                event.target.style.textDecoration = 'line-through';
                todoItem.isCompleted = true;
            }

            $target.dispatchEvent(toggleTodoEvent);
        }

        if (event.target.className === 'remove-button') {
            event.target.parentElement.remove();
            this.data.splice(index, 1);

            $target.dispatchEvent(removeTodoEvent);
        }
    }) 

    this.render = function() {

        $target.innerHTML = `<ul>${this.data.map( (todoItem, index) => 
            todoItem.isCompleted 
            ? `<li id="todo-${index}" class="todo-item" style="text-decoration:'line-through'">
                <span class="todo-text" style="text-decoration: line-through;">${todoItem.text}</span><button class="remove-button"><i class="fas fa-trash-alt"></i> Delete</button>
               </li>` 
            : `<li id="todo-${index}" class="todo-item"><span style="display:none">${index}</span>
                <span class="todo-text"> ${todoItem.text} </span><button class="remove-button"><i class="fas fa-trash-alt"></i> Delete</button>
                </li>`
            ).join('')}<ul>`;      
    }

    this.setState = function(nextData) {
        validateData(nextData);

        this.data = nextData;
        this.render();
    }

    this.render();
}
