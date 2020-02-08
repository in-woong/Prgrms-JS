function TodoItem({index, item, $target}) {
    this.todo;
    this.span;
    this.btn;

    this.render = () => {
        this.todo = document.createElement('li');
        this.span = document.createElement('span');
        this.btn = document.createElement('button');
        this.todo.index = index;
        this.span.index = index;
        this.btn.index = index;

        this.todo.classList.add('todo-list-item');
        if (item.isCompleted) {
            this.todo.classList.add('completed');
        }
        this.span.innerText = item.text;
        this.btn.innerText = '삭제';
        
        this.todo.appendChild(this.span);
        this.todo.appendChild(this.btn);

        $target.appendChild(this.todo);
    }

    this.render();
}
