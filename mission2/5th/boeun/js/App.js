const App = function(selector, data, appTitle = 'To do List') {
    
    const updateState = function() {
        todoList.setState(data);
        todoCount.render(); 
    }

    document.querySelector('#App').insertAdjacentHTML('afterbegin', `<h3>${appTitle}</h3><div id="${selector}"></div>`);
    const $target = document.querySelector(`#${selector}`); 
    
    const todoList = new TodoList($target, data); 
    const todoInput = new TodoInput(selector, data); 
    const todoCount = new TodoCount(selector, data); 

    $target.addEventListener('todo-removeAll', function(event) {
        data.splice(0);
        localStorage.removeItem('todoList'); 
        updateState();
    });

    $target.addEventListener('todo-addTodo', function(event) {
        localStorage.setItem('todoList', JSON.stringify(data)); 
        updateState();
    }); 

    $target.addEventListener('todo-toggleTodo', function(event) {
        localStorage.setItem('todoList', JSON.stringify(data)); 
        updateState();
    }); 

    $target.addEventListener('todo-removeTodo', function(event) {
        localStorage.setItem('todoList', JSON.stringify(data)); 
        updateState();
    }); 
};
