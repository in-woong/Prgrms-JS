class controlToDoList {
    constructor(data) {
        this.toDoData = data;
    }

    dataValidation() {
        return Array.isArray(this.toDoData) && (typeof(this.toDoData) !== undefined) && (typeof(this.toDoData) !== null) ? true : false;
    }

    render() {
        const todoLists = document.querySelector("#todo-list");
        todoLists.innerHTML = `<h3>ToDo List</h3>`;
        this.toDoData.forEach((rawData, index) => rawData.isCompleted ? todoLists.innerHTML += `<s>${index + 1}. ${rawData.text}</s></br>` : 
        todoLists.innerHTML += `${index + 1}. ${rawData.text}</br>`);     
    }
}

class conrtrolDerekToDoList extends controlToDoList {
    renderDerekTodoList() {
        const todoListsDerek = document.querySelector("#todo-list-derek");
        todoListsDerek.innerHTML = `<h3>ToDo List for Derek</h3>`;
        this.toDoData.forEach((rawData, index) => rawData.isCompleted ? todoListsDerek.innerHTML += `<s>${index + 1}. ${rawData.text}</s></br>` : 
        todoListsDerek.innerHTML += `${index + 1}. ${rawData.text}</br>`);
    }

    renderDerekDoneList() {
        const doneListsDerek = document.querySelector("#done-list-derek");
        doneListsDerek.innerHTML = `<h3>Done List by Derek</h3>`;
        this.toDoData.forEach((rawData, index) => rawData.isCompleted ? doneListsDerek.innerHTML += `<s>${index + 1}. ${rawData.text}</s></br>` : 
        doneListsDerek.innerHTML += `${index + 1}. ${rawData.text}</br>`);
    }
}

export {controlToDoList, conrtrolDerekToDoList}