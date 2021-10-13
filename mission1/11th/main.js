class TodoList {
    constructor(data, element, title) {
        this.element = element;
        this.element.innerHTML = `<b>${title}</b> <ul></ul>`;
        this.ulElement = this.element.getElementsByTagName('ul')[0];
        this.setState(data);
    }

    setState(data) {
        this.dataValidation(data);
        this.data = data;
        this.render();
    }
    
    render() {
        this.ulElement.innerHTML = this.data.map(list => list.isCompleted ? `<li><s>${list.text}</s></li>` : `<li>${list.text}</li>`).join('');
    }

    dataValidation(data) {
        if (data == null) {
            throw new Error('Input the data!');
        } 
        
        if (!Array.isArray(data)) {
            throw new Error('Data type is not an Array!');
        } 

        for (const list of data) {
            if (!(list.hasOwnProperty('text') && list.hasOwnProperty('isCompleted'))) {
                throw new Error('This data has some missing properties!');
            }
        }
    }
}

const todoList = new TodoList(data, document.getElementById('todo-list'), 'TODO-LIST');
const todoListWeekly = new TodoList(data2, document.getElementById('todo-list-weekly'), 'WEEKLY-TODO-LIST');
const todoListMonthly = new TodoList(data3, document.getElementById('todo-list-monthly'), 'MONTHLY-TODO-LIST');

setTimeout(() => todoList.setState(nextData), 3000);
