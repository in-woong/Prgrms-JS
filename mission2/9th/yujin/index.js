import TodoList from './todolist.js'

let data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false,
    },
]


try {
    let todo = new TodoList(data, document.querySelector('#todo-list'))

} catch (e) {
    alert(e.message)
}






