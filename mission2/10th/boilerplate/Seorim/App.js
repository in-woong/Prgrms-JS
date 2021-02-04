import TodoList from './Components/TodoList.js'
import AddTodo from './Components/TodoInput.js'
import TodoCount from './Components/TodoCount.js'

export default function App($app, initialState){
    this.data = initialState

    this.components = [
        new TodoList({
            $app,
            data: this.data,
            onClickItem: (index) => {
                const nextState = [...this.data]
                nextState[index]={
                    id: index,
                    text: nextState[index].text,
                    isCompleted: !nextState[index].isCompleted,
                    visible: true,
                }
                this.setState(nextState)
            },
            onRemoveItem: (index) => {
                const nextState = [...this.data]
                nextState[index]={
                    id:index,
                    text: nextState[index].text,
                    isCompleted: !nextState[index].isCompleted,
                    visible: false,
                }
                this.setState(nextState)
            },
            onRemoveAll: () =>{
                const nextState = []
                this.setState(nextState)
            }
        }),   
        new AddTodo({
            onPressEnter: (text) => { ///이 콜백 함수를 AddTodo 이벤트 내에서 엔터키 입력시 실행되도록 하기
                const nextState =[
                  ...this.data,
                  {
                    id: this.data.length,
                    text: text,
                    isCompleted: false,
                    visible:true,
                  }
                ]
                this.setState(nextState)
            }
        }),
        new TodoCount({
            $app,
            data: this.data
        }),

    ]
    
    this.setState = (nextData) => {
        this.data = nextData
        this.components.forEach(
            (component) => component.setState && component.setState(this.data)
        )
      
        localStorage.setItem('todos',JSON.stringify(this.data))
        
    }

}
