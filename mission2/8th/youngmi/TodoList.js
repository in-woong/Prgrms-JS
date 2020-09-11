function TodoList(app, data, todoListWrap) {
    this.app = app;
    this.data = data;
    this.$todoListWrap = todoListWrap;

    this.render = function() {
        this.$todoListWrap.innerHTML = this.data.map((todo, key) => {
            return todo.isCompleted ?
                `<div key=${key} class="list">
                    <s class="strike">${todo.text}</s>
                    <button class="btnDeleteTodo">X</button>
                </div>`
                :
                `<div key=${key} class="list">
                    <span class="text">${todo.text}</span>
                    <button class="btnDeleteTodo">X</button>
                </div>`
        }).join('');
    }

    // 삭제버튼 클릭 -> 삭제
    this.deleteTodo = e => {
        if (e.target.className === 'btnDeleteTodo') {
            const deleteIdx = e.target.parentNode.getAttribute('key');
            this.app.deleteTodo(deleteIdx);
        }
    }
    this.$todoListWrap.addEventListener('click', this.deleteTodo);


    // 글자클릭스 밑줄 온/오프
    this.switchTodo = (e) => {
        if (e.target.className === 'strike') { // isCompleted : true상태임 -> false
            const key = e.target.parentNode.getAttribute('key');
            this.app.switchTodo(key, 'strike');
        } else if (e.target.className === 'text') { // isCompleted : false상태임 -> true
            const key = e.target.parentNode.getAttribute('key');
            this.app.switchTodo(key, 'text');
        }

    }
    this.$todoListWrap.addEventListener('click', this.switchTodo);


    this.setState = function(nextData) {
        this.data = nextData;
        this.render();
    }
    this.render();
}

export default TodoList;

    // this.validateData = function() {
    //     if (!Array.isArray(this.data)) {
    //         throw new Error("배열형태가 아닙니다.")
    //     } else if (this.data === (null || undefined)) {
    //         throw new Error("데이터가 올바르지 않습니다.");
    //     } else if (!Array.isArray(data)) {
    //         throw new Error("배열 형식에 맞게 넣어주시길 바랍니다.");
    //     } else if (this === window) {
    //         throw new Error("new키워드를 확인해주시길 바랍니다.");
    //     }

    //     this.data.forEach((todo) => {
    //         if (typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean') {
    //             throw new Error('올바른 데이터를 넣어주세요.');
    //         }
    //     });
    // }

    // this.setState = function(nextData) {
    //     this.data = nextData;
    //     this.render();
    // }

    // this.render();
    // this.validateData();
    // }




