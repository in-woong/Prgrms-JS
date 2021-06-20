class TodoInput {
    constructor({data, element, onInputTodo}) {
        this.data = data;
        this.element = element;
        this.onInputTodo = onInputTodo;
        
        this.addInput = document.createElement('input');
        this.addButton = document.createElement('button');
        this.addButton.innerText = '추가';

        this.addInput.addEventListener('keyup', this.addInputFunc.bind(this));
        this.addButton.addEventListener('click', this.addButtonFunc.bind(this));

        this.element.appendChild(this.addInput);
        this.element.appendChild(this.addButton);
    }

    addInputFunc(event) {
        if (event.key === 'Enter' && this.addInput.value !== '') {
            this.addButtonFunc();
        }
    }

    addButtonFunc() {
        this.onInputTodo(this.addInput);
        this.addInput.value = '';
        this.addInput.focus();
    }
}
