const todosList = [{
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }]

const todosDiet = [{
        text: '월 1회 야식',
        isCompleted: true
    },
    {
        text: '주 5회 운동',
        isCompleted: false
    }]
    
const todoList = new TodoList(todosList, 'todo-list');
// todoList.setState(todosDiet)
