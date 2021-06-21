export default class TodoList {
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
        console.log(data)
        this.data = data;
        console.log(this.data)
        this.render();
    }
    
    render() {
        this.ulElement.innerHTML = this.data.map((list) => this.createListHTMLString(list)).join('');
    }

    createListHTMLString({_id, content, isCompleted}) {
        const temp = isCompleted ? `<s>${content}</s>` : content;
        return `<li data-list-id="${_id}">${temp}  <button data-button-id="${_id}">X</button></li>`;
    }

    addUlElementEvents() {
        this.ulElement.addEventListener('click', (event) => {
            const targetListId = event.target.closest('li').dataset.listId;
            if (targetListId) {
                this.onToggleIsCompleted(targetListId);
            }
        });
        
        this.ulElement.addEventListener('click', (event) => {
            const targetButtonId = event.target.dataset.buttonId;
            if (targetButtonId) {
                this.onDeleteTodo(targetButtonId);
            }
        });
    }
}
