import TodoList from './todolist.js'

const data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false,
    },
]
const house_data = [
    { text: '빨래하기', isCompleted: false ,},
    { text: '설거지 해야됨', isCompleted: false ,}
]
const exercise_data = [
    { text: '일요일에 북한산 가야지', isCompleted: true, },
    { text: '아침에 지하철역까지 걸어가야지', isCompleted: false ,}
]

try{
    const todo = new TodoList(data, '#todo-list')
    const house_todo = new TodoList(house_data, '#todo-list-house')
    const exercise_todo = new TodoList(exercise_data, '#todo-list-exercise')

    document.querySelector('#todo-change').addEventListener('click', () => {
        todo.setState([
            ...todo.data,
            {
                text: "ㅋㅋㅋ",
                isCompleted: false,
            },
        ])
    })

    // 상태 변경
    todo.setState([
        ...todo.data,
        {
            text: 'EVIL!!! 😎',
            isCompleted: false,
        },
    ])
} catch (e) {
    alert(e.message)
}


