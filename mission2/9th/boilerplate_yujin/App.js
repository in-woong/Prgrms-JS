import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js'

import {getItem, setItem} from './localStorage.js'

const TODOS_STORAGE_KEY = 'todos'   // 상수로 뽑는 것이 좋음

export default function App ({ $app }) {
    this.$app = $app ; 
    this.state = getItem(TODOS_STORAGE_KEY, [])
    

    this.components = [
        new TodoInput ({
            $app,
            onAddTodo : (text) =>  {
                const nextState = [
                    ...this.state,
                    {
                        text,
                        isCompleted: false
                    },
                ]
                this.setState(nextState)
            },
        }),

        new TodoList({
            $app,
            initialState : this.state,
        }),

        new TodoCount({
            $app,
            initialState : this.state,
        }),
    ]
    this.setState = (nextState) => {
        this.state = nextState
        setItem(TODOS_STORAGE_KEY , nextState)
        this.components.forEach( // components 로 써줌으로 배열임을 변수명으로 암시
            (component) => component.setState && component.setState(this.state)
        )
        
    }
    // localStorage.js - import하기 전
    // this.setState = (nextState) => {
    //     this.state = nextState
    //     window.localStorage.setItem('todos' , JSON.stringify(nextState))
    //     this.components.forEach( // components 로 써줌으로 배열임을 변수명으로 암시
    //         (component) => component.setState && component.setState(this.state)
    //     )
        
    // }
}