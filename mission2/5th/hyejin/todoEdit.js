function TodoEdit(todoList) {
    this.todoList = todoList;

    this.deleteTodo = function() {
        const deleteButtons = document.querySelectorAll('.todoDelete')
        deleteButtons.forEach(b => {
            b.addEventListener('click', e => {
                const nextData = todoList.data.filter(item => item.id != e.target.value)
                console.log(nextData);
                todoList.setState(nextData);
            })
        })
    }
    this.deleteTodo();

}
