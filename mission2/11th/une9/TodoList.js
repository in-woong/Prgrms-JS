class TodoList {
    constructor(data, element, title) {
        this.element = element;
        this.titleValidation(title);
        this.element.innerHTML = `<b>${this.title}</b>`;
        this.setState(data);
        this.createAddInput();
        this.ulElement.addEventListener('click', this.deleteButtonFunc.bind(this));
    }

    setState(data) {
        this.dataValidation(data);
        this.data = data;
        this.render();
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
        return `<li data-list-num="${i}">${temp}</li> <button data-button-num="${i}">X</button>`;
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
        this.setState(this.data);
        this.addInput.value = '';
        this.addInput.focus();
    }

    deleteButtonFunc(event) {
        const targetButtonNum = event.target.dataset.buttonNum;
        if (targetButtonNum) {
            this.data.splice(targetButtonNum, 1);
            this.setState(this.data);
        }
    }
}
