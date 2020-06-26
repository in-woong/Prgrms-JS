var data = [
  {
        text: 'JS 복습하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기2',
        isCompleted: true
    }
];
var data2 = [
    {
        text: 'TS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    },
];

var dataChange = [
    {
        text: 'TS 공부하기',
        isCompleted: true
    },
    {
        text: 'TS 복습하기',
        isCompleted: true
    },
    {
        text: '출근 준비하기',
        isCompleted: false
var createTodoHTMLString = function (data) {
    return data.isCompleted
        ? "<div><s>" + data.text + "</s></div>"
        : "<div>" + data.text + "</div>";
};
function TodoList(data, id) {
    var _this = this;
    this.data = data;
    this.validate = function (data) {
        if (data === null || data === undefined)
            throw new Error('null이나 undefined면 안 됩니다.');
        if (!Array.isArray(_this.data))
            throw new Error('배열이 아닌 값이 오면 안 됩니다.');
        if (!(_this instanceof TodoList))
            throw new Error('new를 사용하세요.');
    };
    this.render = function () {
        _this.validate(data);
        var html = data.map(function (value) { return createTodoHTMLString(value); }).join('');
        return (document.querySelector("#" + id).innerHTML = html);
    };
    this.setState = function (nextData) {
        data = nextData;
        _this.render();
    };
}
try {
    var todoList = new TodoList(data, 'todo-list-1');
    var todoList2 = new TodoList(data2, 'todo-list-2');
    todoList.render();
    todoList2.render();
    todoList2.setState(dataChange);
}
catch (error) {
    console.error(error);
}
