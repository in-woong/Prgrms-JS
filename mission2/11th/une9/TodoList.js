class TodoList {
    constructor({data, element, onToggleIsCompleted, onDeleteTodo}) {
        this.element = element;

        this.ulElement = document.createElement('ul');
        this.ulElement.setAttribute('class', `data-${this.title}`);
        this.element.appendChild(this.ulElement);

        this.setState(data);
        this.onToggleIsCompleted = onToggleIsCompleted;
        this.onDeleteTodo = onDeleteTodo;
        this.addUlElementEvents();
    }

    setState(data) {
        this.data = data;
        this.render();
    }
    
    render() {
        this.ulElement.innerHTML = this.data.map((list, i) => this.createListHTMLString(list, i)).join('');
    }

    createListHTMLString({text, isCompleted}, i) {
        const temp = isCompleted ? `<s>${text}</s>` : text;
        return `<li data-list-index="${i}">${temp}  <button data-button-index="${i}">X</button></li>`;
    }

    addUlElementEvents() {
        this.ulElement.addEventListener('click', (event) => {
            const targetListIndex = event.target.closest('li').dataset.listIndex;
            if (targetListIndex) {
                this.onToggleIsCompleted(targetListIndex);
            }
        });
        
        this.ulElement.addEventListener('click', (event) => {
            const targetButtonIndex = event.target.dataset.buttonIndex;
            if (targetButtonIndex) {
                this.onDeleteTodo(targetButtonIndex);
            }
        });
    }
}
