function TodoList(listContainer, data) {
    if (!new.target) {
        throw new Error('Error: TodoList Object is not set properly');
    }
    this.validate = function () {
        if (!this.data) {
            throw new Error('Error: Invalid data type');
        }
        if (!Array.isArray(data)) {
            throw new Error('Error: Data should be array');
        }
        if (!(listContainer instanceof HTMLElement)) {
            throw new Error('Error: TodoList DOM Object is not set properly');
        }

        data.forEach(element => {
            if (!('text' in element)) {
                throw new Error('Error: Key "text" is missing');
            }
        })
    }

    this.data = data;
    this.listContainer = listContainer;
    this.render = function () {
        this.listContainer.innerHTML = `<ul>
        ${this.data.map(({text, isCompleted}) => 
        (isCompleted? 
            `<li><s>${text}</s></li>`:
            `<li>${text}<button class="done-button">했당</button></li>`)).join('')}
            </ul>`;
    };
    this.setState = function (nextData) {
        if (!nextData) {
            throw new Error('Error: Invalid Data');
        }

        this.data = nextData;
        this.render();
    }

    this.validate();
    this.render();
}
