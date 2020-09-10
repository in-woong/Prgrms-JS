
function TodoList(data, todoList) {
    this.data = data;
    this.$todoList = todoList;

    this.render = function() {
        this.element.innerHTML = this.data.map((todo, key) => {
            return todo.isCompleted ?
                `<div>${todo.text}</div><button key=${key} class="btnDeleteTodo">X</button>`
                :
                `<div><s>${todo.text}</s></div><button key=${key} class="btnDeleteTodo">X</button>`
        }).join('');
    }

    this.setState = function(nextData) {
        this.data = nextData;
        this.render();
    }


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



}



