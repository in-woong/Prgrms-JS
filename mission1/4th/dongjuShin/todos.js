function err(msg) {
    throw new Error(msg);
}

function TodoList({ title, data, targetId }) {
    if (!Array.isArray(data)) {
        err('data type is not an Array');
    }
    this.title = title;
    this.data = data;
    this.targetId = targetId;
    this.render = function() {
        const $target = document.getElementById(this.targetId);
        $target.innerHTML = '';
        const listTitle = document.createElement('h2');
        const listWrapper = document.createElement('ul');
        listWrapper.classList.add('todo-list-wrapper');
        
        listTitle.innerText = this.title;

        listWrapper.innerHTML = this.data.map(item => {
            return `
                <li class="todo-list-item ${item.isCompleted ? 'completed' : ''}">
                    ${item.text}
                </li>
            `
        }).join('');

        $target.appendChild(listTitle);
        $target.appendChild(listWrapper);
    };
    this.setState = function(newData) {
        this.data = newData;
        this.render();
    };
    this.render();
}

function TodoPage(listArr) {
    this.listArr = listArr;
    this.render = function() {
        this.listArr.forEach(list => {
            const todoList = new TodoList(list);
            if (!todoList instanceof TodoList) {
                err('new keyword is missing');
            }
        });
    }
    this.setState = function(newListArr) {
        this.listArr = newListArr;
        this.render();
    }
    this.render();
}
