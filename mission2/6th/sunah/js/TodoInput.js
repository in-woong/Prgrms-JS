class TodoInput {
    constructor(app) {
        this.element =  app.element.querySelector('#todo-input');
        this.element.addEventListener('click', (event) => this.onClick(event, app));
        this.element.addEventListener('change', (event) => this.onChange(event, app));
    }

    onClick = (e, app) => {
        const target = e.target;

        if(target.getAttribute('class') === 'btn_delete_all') {
            confirm("전체목록을 삭제하시겠습니까?") ? app.removeDataAll() : '';
        }
    }

    onChange = (e, app) => {
        const target = e.target;

        if(target.getAttribute('class') === 'todo_input') {
            app.addData(target.value);
            target.value = '';
        }
    }

    setState = function(nextData) {
        this.data = nextData;
        this.render();
    };

    render = function() {
        this.element.innerHTML = `
            <div class="todo_input_box">
                <input type="text" class="todo_input" placeholder="할 일 입력 후 enter">
            </div>
            <button type="button" class="btn_delete_all">전체삭제</button>`;
    }
}