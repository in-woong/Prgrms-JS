import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'
import { TODO_STORAGE_KEY, REMOVE_ALL_EVENT } from '../data/constant.js'
import { jsonParse, jsonStringify } from '../util/util.js'

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
        this.initLocalStorage();
        this.todoCount = new TodoCount('todo-count');
        this.todoList = new TodoList(this.data, countTodoItem, 'todo-list');
        this.todoInput = new TodoInput(addTodoItem, 'todo-input');
        this.TodoRemoveAll = new TodoRemoveAll('todo-remove-all');
        this.initRemoveAllBtn();
        
    };
    const addTodoItem = (newTodoItem) => {
        try{
            this.data.push(newTodoItem);
            localStorage.setItem(TODO_STORAGE_KEY, jsonStringify(this.data));
            this.todoList.setState(jsonParse(localStorage.getItem(TODO_STORAGE_KEY)));
        }catch(error){
            throw new Error(`항목추가시 에러가 발생하였습니다. ${error}`);
        }
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
    
    this.initLocalStorage = () => {
        try{
            const localStorageItem = localStorage.getItem(TODO_STORAGE_KEY);
            if(localStorageItem !== null) {
                const todoData = jsonParse(localStorageItem);
                this.data = todoData;
            } else {
                this.data = [];
            }
        }catch(error) {
            throw new Error(`localStorage 초기화시 에러가 발생하였습니다. ${error}`);
        }
    };

    this.initRemoveAllBtn = () => {
        const removeAllBtn = this.TodoRemoveAll.$removeAllBtn;
        removeAllBtn.addEventListener(REMOVE_ALL_EVENT, (event) => {
            localStorage.clear();
            this.data = [];
            this.todoList.setState(this.data);
        });
    };

    this.init();
}

export default App
