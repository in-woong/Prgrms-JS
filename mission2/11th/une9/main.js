try {
    const todoList = new TodoList(data, document.getElementById('todo-list'), 'TODO-LIST');
    const todoListWeekly = new TodoList(data2, document.getElementById('todo-list-weekly'), 'WEEKLY-TODO-LIST');
    const todoListMonthly = new TodoList(data3, document.getElementById('todo-list-monthly'), 'MONTHLY-TODO-LIST');

    setTimeout(() => todoList.setState(nextData), 3000);
} catch(e) {
    console.error(e);
}
