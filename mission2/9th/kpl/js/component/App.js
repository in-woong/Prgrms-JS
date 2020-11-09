import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { data } from '../data/data.js'

/**
 * 관심사의 분리
 * TodoInput 컴포넌트엔 단지 TodoList에 항목을 추가하는 addTodoItem 함수를 넘긴다.
 * TodoInput 컴포넌트 입장에선 TodoList를 생각하지 않고 그저 input에 입력한 데이터를 넘겨받은 addTodoItem로 호출한다.
 * 그렇다면 어떻게 TodoList에 입력한 데이터를 전달하느냐?
 * App 컴포넌트에서 todoList를 가지고 있기 때문에 todoList의 setState를 호출하여 전달 할 수 있다.
 * App -> todoInput -> App -> todoList
 */
function App() {
    
    this.init = () => {
        this.data = data;
        this.todoCount = new TodoCount('todo-count');
        this.todoList = new TodoList(data, countTodoItem, 'todo-list');
        this.todoInput = new TodoInput(addTodoItem, 'todo-input');
        
    };
    const addTodoItem = (newTodoItem) => {
        this.data.push(newTodoItem);
        this.todoList.setState(this.data);
    };
    const countTodoItem = (todoItem) => {
        const completedTodoList = todoItem.filter((data) => {
            return data.isCompleted === true;
        });
        const countTodoData = {
            allTodoListCount : todoItem.length,
            completedTodoListCount : completedTodoList.length
        };
        this.todoCount.setState(countTodoData);
    };

    this.init();
}

export default App
