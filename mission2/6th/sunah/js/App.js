class App {
    constructor(data, selector) {
        validateData(data);
        validateSelector(selector);

        this.id = this.createID();
        this.data = data;
        this.element = document.querySelector(selector);

        this.initCreateDocument();

        this.todoList = new TodoList(this);
        this.todoInput = new TodoInput(this);
        this.todoCount = new TodoCount(this);
    }

    initCreateDocument = function() {
        this.element.innerHTML =
            `<h2>Todo</h2>
            <ul id="todo-list"></ul>
            <div id="todo-input"></div>
            <div id="todo-count"></div>`;
    }

    createID = function(){
        return chr4() + chr4() + '-' + chr4() + chr4();

        function chr4(){
            return Math.random().toString(10).slice(-4);
        }
    }

    setState = function(nextData) {
        validateData(nextData);

        if(convertDataToString(nextData) === convertDataToString(this.data))
            return;

        this.data = nextData;
        this.todoList.setState(nextData);
        this.todoCount.setState(nextData);

        function convertDataToString(array) {
            return array.map(value => JSON.stringify(value)).join('');
        }
    };

    addData = function(value) {
        let resultData = JSON.parse(JSON.stringify(this.data));

        resultData.push({text: value, isCompleted: false});
        this.setState(resultData);
    }

    removeData = function(index) {
        let resultData = JSON.parse(JSON.stringify(this.data));

        resultData.splice(index, 1);
        this.setState(resultData);
    }

    removeDataAll = function() {
        this.setState([]);
    }

    changeData = function(index, state) {
        let resultData = JSON.parse(JSON.stringify(this.data));

        resultData[index].isCompleted = state;
        this.setState(resultData);
    }

    render = function() {
        this.todoList.render();
        this.todoInput.render();
        this.todoCount.render();
    }
}
