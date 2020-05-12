var todoData = [
        {
            text: 'JS 공부하기',
            isCompleted: true
        },
        {
            text: 'JS 복습하기',
            isCompleted: true
        }
    ],
    todoData2 = [
        {
            text: 'JS 공부하기 2',
            isCompleted: false
        },
        {
            text: 'JS 복습하기 2',
            isCompleted: false
        }
    ];

var app = new App(todoData, '#app');
app.render();

var app2 = new App(todoData2, '#app2');
app2.render();
