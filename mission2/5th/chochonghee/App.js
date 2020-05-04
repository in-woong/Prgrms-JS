import TodoList from './TodoList'

function App() {
    // 데이터
    const data = [{
            text: 'JS 공부하기',
            isCompleted: true,
        },
        {
            text: 'JS 복습하기',
            isCompleted: true,
        },
    ]

    const nextData = [{
            text: '운동하기',
            isCompleted: true,
        },
        {
            text: '반찬 사오기',
            isCompleted: true,
        },
    ]

    this.render = () => {
        this.todoList = new TodoList(
            document.querySelector('#todo-list'),
            this.data
        )
    }

    this.setState = nextData => {
        this.data = nextData
        this.todoList.setState(nextData)
    }

    this.render()
}

this.App()
export default { App, test }