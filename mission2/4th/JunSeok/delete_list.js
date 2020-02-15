function delete_list(todolist) {
    this.todolist = todolist;
    const deleting = document.querySelector(`#${todolist}`);
    const delete_id = deleting.id.substring(deleting.id.indexOf('_') + 1);
    data.splice(delete_id - 1, 1);
    todoList.setState(data);
}