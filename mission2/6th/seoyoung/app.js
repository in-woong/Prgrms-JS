class App {
    constructor() {
        this.data = localStorage.getItem('data') ? this.getLocalstorage() : [];
        this.$app = document.querySelector('#App');
        this.init();
    }
    setState(nextData) {
        this.todoList.setState(nextData)
        this.todoCount.setState(nextData)
    }
    getLocalstorage() {
        const that = this // 클로저를 이용했는데 적절한 방법인지
        try {
            console.log(that)
            return JSON.parse(localStorage.getItem('data'));
        } catch (err) {
            throw new Error('데이터를 불러오는 것에 실패했습니다')
        }
    }

    // 투두리스트 추가
    addTodo() {
        const todoText = this.todoInput.getValue()
        this.data.push({
            text: todoText,
            isCompleted: false,
        })
        this.setState(this.data)
    }

    // 투두 리스트 삭제하기
    delTodo(todoId) {
        this.data.splice(todoId, 1)
        this.setState(this.data)
    }

    // toggle 처리
    toggleTodo(todoId) {
        this.data[todoId].isCompleted = !this.data[todoId].isCompleted
        this.setState(this.data)
    }

    init() {
        const that = this;
        // innerHtml
        this.$app.innerHTML =
            '<article class="todoContainer">' +
            '<h2>투두 리스트</h2>' +
            '<div id="todo-list"></div>' +
            '<div id="todo-count"></div>' +
            '</article>' +
            '<div id="todo-input"></div>';

        //TodoList 컴포넌트
        this.todoList = new TodoList(this.data, '#todo-list')
        this.todoList.render()
        // TodoCount 컴포넌트
        this.todoCount = new TodoCount(this.data)
        this.todoCount.render()
        //TodoInput 컴포넌트
        this.todoInput = new TodoInput(this.$app)

        // element
        this.$listNode = document.querySelector('#todo-list');
        this.$removeallBtn = document.querySelector('#remove-all');
        this.$addBtn = document.querySelector('#addBtn');
        this.$input = document.querySelector('#newTodo');

        /* 추가 버튼 클릭 */
        this.$addBtn.addEventListener('click', function () {
            this.addTodo()
        }.bind(this));
        /* 엔터입력 */
        this.$input.addEventListener("keypress", function (event) {
            if (event.keyCode === 13) {
                this.addTodo()
            }
        }.bind(this));

        // 삭제,토글 이벤트 처리 - 이벤트 위임
        this.$listNode.addEventListener('click', function (e) {
            const idx = e.target.parentNode.id
            if (idx !== 'todo-list') {
                if (e.target.tagName !== 'BUTTON') {
                    that.toggleTodo(idx)
                } else {
                    that.delTodo(idx)
                }
            }
        })

        // 커스텀 이벤트 - 모두제거
        this.$removeallBtn.addEventListener('click', e => {
            const eventRemoveAll = new CustomEvent('remove-all')
            that.$app.dispatchEvent(eventRemoveAll);
        }); //}.bind(this)); 에러 

        this.$app.addEventListener('remove-all', e => {
            that.data = []
            that.setState(that.data)
        }); //}.bind(this)); 에러 
    }
}
