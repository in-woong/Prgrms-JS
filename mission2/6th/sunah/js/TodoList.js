class TodoList {
    constructor(app) {
        this.id = app.id;
        this.data = app.data;
        this.element = app.element.querySelector('#todo-list');
        this.element.addEventListener('click', (event) => this.onClick(event, app) )
    }

    onClick = (e, app) => {
        const target = e.target;
        const index = this.getIndex(target);

        switch(target.getAttribute('class')) {
            case 'btn_delete':
                app.removeData(index);
                break;
            case 'todo_item_label':
                app.changeData(index, !target.previousElementSibling.checked);
                break;
            default:
                break;
        }
    }

    getIndex = function(element) {
        return Array.from(element.parentNode.children).indexOf(element) - 1;
    }

    createInnerHTML = function() {
        const innerText = this.data.map((value, index) => {
            return `<li class="todo_item" key=${index}>
                        <input type="checkbox" id=${this.id + '--' + index} class="todo_check" ${value.isCompleted?'checked':''}>
                        <label for=${this.id + '--' + index} class="todo_item_label">${value.text}</label>
                        <button type="button" class="btn_delete">삭제</button>
                    </li>`;
        }).join('');

        return innerText;
    }

    setState = function(nextData) {
        this.data = nextData;
        this.render();
    };

    render = function() {
        this.element.innerHTML = this.createInnerHTML();
    }
}
