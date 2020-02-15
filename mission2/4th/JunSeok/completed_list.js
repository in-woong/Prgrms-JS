function completed_list(todolist) {
    this.todolist = todolist;
    const completing = document.querySelector(`#${todolist}`);
    const complete_id = completing.id.substring(completing.id.indexOf('_') + 1);
    data[complete_id - 1].isCompleted = !data[complete_id - 1].isCompleted;
    todoList.render();
}