function TodoList({data, toggleTodoItem, removeTodoItem, $target}) {
    this.data = data;
    this.listWrapper = null;
    
    this.render = () => {
        this.listWrapper = document.createElement('ul');
        this.listWrapper.classList.add('todo-list-wrapper');
        this.listWrapper.addEventListener('click', e => {
            switch (e.target.nodeName) {
                case 'LI': 
                    toggleTodoItem(e.target.index);
                    break;
                case 'SPAN':
                    toggleTodoItem(e.target.index);
                    break;
                case 'BUTTON':
                    removeTodoItem(e.target.index);
                    break;
                default: 
                    return;
            }
        });
        this.mapItems();

        $target.appendChild(this.listWrapper);
    };
    
    this.setState = newData => {
        this.data = newData;
        this.mapItems();
    };

    this.mapItems = () => {
        this.listWrapper.innerHTML = '';
        validator.validateArray(this.data);
        this.data.forEach((item, index) => {
            const todoItem = new TodoItem({
                index,
                item,
                $target: this.listWrapper,
            });
        })
    }
    
    this.render();
}
