const todoList = [
{
    text: 'JS 공부하기',
    isCompleted: true
},
{
    text: 'JS 복습하기',
    isCompleted: false
}
]
const exerciseList = [
{
    text: '일찍 일어나기',
    isCompleted: true
},
{
    text: '운동하기',
    isCompleted: true
}
]
const playList = [
{
    text: '영화 보기',
    isCompleted: false
},
{
    text: '롤하기',
    isCompleted: false
}
]

const todo1 = new TodoList(todoList, '#todo-list');
const todo2 = new TodoList(exerciseList, '#exercise-list');
const todo3 = new TodoList(playList, '#play-list');
