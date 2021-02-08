import TodoList from './Components/TodoList.js'
import AddTodo from './Components/TodoInput.js'
import TodoCount from './Components/TodoCount.js'
import { getItem, setItem } from './localStorage.js'

const TODOS_STORAGE_KEY = 'todos'
export default function App($app, initialState) {
    this.state = getItem(TODOS_STORAGE_KEY, [])

    this.components = [
        new TodoList({
            data: this.state,
            onClickItem: (index) => { //이 콜백 함수를 TodoList 이벤트 내에서 할일 클릭 클릭시 실행되도록 하기
                const nextState = this.state.map((item) =>
                    JSON.stringify(item.id) === index ? { id: item.id, text: item.text, isCompleted: !item.isCompleted } : item
                )
                this.setState(nextState)
            },
            onRemoveItem: () => { //할일 삭제 
                const nextState = this.state.filter((target, index) => index)
                this.setState( nextState)
            },
            onRemoveAll: () => { //전체 삭제
                this.setState([])
            }
        }),
        new AddTodo({
            onPressEnter: (text) => { ///이 콜백 함수를 AddTodo 이벤트 내에서 엔터키 입력시 실행되도록 하기
                const nextState = [
                    ...this.state,
                    {
                        id: Date.now(),
                        text: text,
                        isCompleted: false
                    }
                ]
                this.setState(nextState)
            }
        }),
        new TodoCount({
            $app,
            data: this.state
        }),

    ]

    this.setState = (nextData) => {
        this.state = nextData
        setItem(TODOS_STORAGE_KEY, this.state)
        this.components.forEach(
            (component) => component.setState && component.setState(this.state)
        )
    }

}
