class App {
    constructor(data, title) {
        this.element = document.createElement('div');
        this.titleValidation(title);
        this.element.setAttribute('id', title);
        document.body.appendChild(this.element);

        this.element.innerHTML = `<b>${this.title}</b>`;

        this.dataValidation(data);
        this.data = data;

        this.todoList = new TodoList(this.data, this.element, this.dataValidation);
        this.TodoInput = new TodoInput(this.data, this.element, this.todoList);
    }

    titleValidation(title) {
        if (title == null) {
            throw new Error('Input the title!');
        }

        this.title = title;
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

class TodoList {
    constructor(data, element, dataValidation) {
        this.element = element;
        this.dataValidation = dataValidation;
        this.setState(data);
        this.addUlElementEvents();
    }

    setState(data) {
        this.dataValidation(data);
        this.data = data;
        this.render();
        this.todoCount();
    }
    
    render() {
        if (this.element.getElementsByTagName('ul').length === 0) {
            this.ulElement = document.createElement('ul');
            this.ulElement.setAttribute('class', `data-${this.title}`);
            this.element.appendChild(this.ulElement);
        } 
        this.ulElement.innerHTML = this.data.map((list, i) => this.createListHTMLString(list, i)).join('');
    }

    createListHTMLString({text, isCompleted}, i) {
        const temp = isCompleted ? `<s>${text}</s>` : text;
        return `<li data-list-index="${i}">${temp}</li> <button data-button-index="${i}">X</button>`;
    }

    addUlElementEvents() {
        this.ulElement.addEventListener('click', this.listDoneFunc.bind(this));
        this.ulElement.addEventListener('click', this.deleteButtonFunc.bind(this));
    }

    listDoneFunc(event) {
        let target = event.target;

        while(!target.dataset.listIndex) {
            target = target.parentNode;

            if (target.nodeName == 'BODY') return;
        }

        const targetListIndex = target.dataset.listIndex;
        if (targetListIndex) {
            this.data[targetListIndex].isCompleted = this.data[targetListIndex].isCompleted ? false : true;
            this.setState(this.data);
        }
    }

    deleteButtonFunc(event) {
        const targetButtonIndex = event.target.dataset.buttonIndex;
        if (targetButtonIndex) {
            this.data.splice(targetButtonIndex, 1);
            this.setState(this.data);
        }
    }

    todoCount() {
        if (!this.element.getElementsByClassName('todo-count')[0]) {
            this.todoCountElement = document.createElement('div');
            this.todoCountElement.setAttribute('class', 'todo-count');
            this.element.appendChild(this.todoCountElement);
        } 
        const nowDone = this.data.filter(list => list.isCompleted).length;
        const listLength = this.data.length;
        const todoCountHTMLString = `${nowDone}/${listLength}`;
        this.todoCountElement.innerHTML = todoCountHTMLString;
    }
}

class TodoInput {
    constructor(data, element, todoList) {
        this.data = data;
        this.element = element;
        this.todoList = todoList;
        this.createAddInput();
    }

    createAddInput() {
        this.addInput = document.createElement('input');
        this.addButton = document.createElement('button');
        this.addButton.innerText = '추가';

        this.addInput.addEventListener('keyup', this.inputFunc.bind(this));
        this.addButton.addEventListener('click', this.addFunc.bind(this));

        this.element.appendChild(this.addInput);
        this.element.appendChild(this.addButton);
    }

    inputFunc() {
        if (window.event.keyCode == 13 && this.addInput.value !== '') {
            this.addFunc();
        }
    }

    addFunc() {
        this.data.push({text: this.addInput.value, isCompleted: false});
        this.todoList.setState(this.data);
        this.addInput.value = '';
        this.addInput.focus();
    }
}
