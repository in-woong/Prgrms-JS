
try {
    const todoList = new TodoList({ 
        $target: document.querySelector('#todo-list') 
    });

} catch (e) {
    alert(e);
    console.log(e);
}
