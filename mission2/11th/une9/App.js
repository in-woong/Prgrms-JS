class App {
    constructor(data, title) {
        this.element = document.createElement('div');

        if (title == null || title == '') {
            throw new Error('Input the title!');
        }
        this.title = title;
        this.element.setAttribute('id', this.title);
        
        this.element.innerHTML = `<b>${this.title}</b>`;
        document.body.appendChild(this.element);

        this.dataValidation(data);
        this.data = data;

        this.todoList = new TodoList({
            data: this.data, 
            element: this.element,
            onToggleIsCompleted: (targetListIndex) => {
                this.data[targetListIndex].isCompleted = !this.data[targetListIndex].isCompleted;
                this.setState(this.data);
            },
            onDeleteTodo: (targetButtonIndex) => {
                this.data.splice(targetButtonIndex, 1);
                this.setState(this.data);
            }
        });

        this.todoInput = new TodoInput({
            data: this.data, 
            element: this.element, 
            onInputTodo: (addInput) => {
                if (addInput.value !== '') {
                    this.data.push({text: addInput.value, isCompleted: false});
                }
                this.setState(this.data);
            }
        });

        this.todoCount = new TodoCount(this.data, this.element);
    }

    setState(nextData) {
        this.todoList.setState(nextData);
        this.todoCount.setState(nextData);
    }

    dataValidation(data) {
        if (data == null) {
            throw new Error('Input the data!');
        } 
        
        if (!Array.isArray(data)) {
            throw new Error('Data type is not an Array!');
        } 

        for (const obj of data) {
            if (!(obj.hasOwnProperty('text') && obj.hasOwnProperty('isCompleted'))) {
                throw new Error('This data has some missing properties!');
            }
        }
    }
}
