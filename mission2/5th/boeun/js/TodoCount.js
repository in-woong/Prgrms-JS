function TodoCount(selector, data) {
    this.todoData = data;
    const $target = document.querySelector(`#${selector}`);

    const getTodoCount = function(newData) {
        return newData.length;
    }

    const getCompleteCount = function(newData) {
        return newData.filter( item => item.isCompleted ).length;
    }

    $target.insertAdjacentHTML('afterend', `<div id="todo-count-${selector}">전체 할 일 | ${getTodoCount(this.todoData)} 완료 | ${getCompleteCount(this.todoData)}</div>`);

    this.render = function() {  
        document.getElementById(`todo-count-${selector}`).innerHTML = `전체 할 일 | ${getTodoCount(this.todoData)} 완료 | ${getCompleteCount(this.todoData)}`;
    }

    this.render();
}
