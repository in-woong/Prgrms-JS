var data = [
    {
      text: 'JS 공부하기',
      isCompleted: true
    },
    {
      text: 'JS 복습하기',
      isCompleted: false
    }
]
var doing = [
    {
        text: 'CS 공부하기',
        isCompleted: true
    },
    {
        text: '블로그 작성하기',
        isCompleted: false
    }
]

var done = [
    {
        text: '치킨 먹기',
        isCompleted: true
    },
    {
        text: '피자 먹기',
        isCompleted: false
    }
]

var nexData = [
    {
        text: '보너스 구현 마지막 작성하기',
        isCompleted: false
    },
    {
        text: '노래 듣기',
        isCompleted: true
    }
]

function init(){
    var todoList = new TodoList(data, 'todo-list');
    var doingList = new TodoList(doing, 'doing-list');
    var doneList = new TodoList(done, 'done-list');
    
    todoList.render();
    todoList.setState(nexData);
    doingList.render();
    doneList.render();
}

init();
