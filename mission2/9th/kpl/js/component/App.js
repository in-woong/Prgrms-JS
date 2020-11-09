import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import { data } from '../data/data.js'

function App() {
    
    this.init = () => {
        this.data = data;
        this.todoList = new TodoList(data, 'todo-list');
        this.todoInput = new TodoInput(addTodoItem, 'todo-input');
    };

    /**
     * 관심사의 분리
     * TodoInput 컴포넌트엔 단지 TodoList에 항목을 추가하는 addTodoItem 함수를 넘긴다.
     * TodoInput 컴포넌트 입장에선 TodoList를 생각하지 않고 그저 input에 입력한 데이터를 넘겨받은 addTodoItem로 호출한다.
     * 그렇다면 어떻게 TodoList에 입력한 데이터를 전달하느냐?
     * App 컴포넌트에서 todoList를 가지고 있기 때문에 todoList의 setState를 호출하여 전달 할 수 있다.
     * App -> todoInput -> App -> todoList
     */
    const addTodoItem = (newTodoItem) => {
        this.data.push(newTodoItem);
        this.todoList.setState(this.data);
    };

    this.init();    
}

export default App
