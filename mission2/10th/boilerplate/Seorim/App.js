import TodoList from './Components/TodoList.js'
import AddTodo from './Components/TodoInput.js'

console.log("App is running")

export default function App($target, data){
    this.$target = $target 
    this.data = data
    this.components = [
        new TodoList(this.data),   
        new AddTodo({
            onPressEnter: (text)=>{ ///이 콜백 함수를 AddTodo 이벤트 내에서 엔터키 입력시 실행되도록 하기
                const nextState =[
                  ...this.data,
                  {
                    id: this.data.length+1,
                    text: text,
                    isCompleted: false,
                    visible:true,
                  }
                ]
                this.setState(nextState)
            }
        })
    ]
 

    
    this.setState = (nextData) => {
        this.data = nextData
        this.components.forEach(
            (component) => component.setState && component.setState(this.data)
        )
    }

  
}


