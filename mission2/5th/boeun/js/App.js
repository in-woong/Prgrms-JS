import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { getData, setData } from './util.js';
import { TODO_STORAGE_KEY } from './constant.js';

const App = (selector, appTitle = 'To do List') => {
    
    this.todoData = getData(TODO_STORAGE_KEY) || [];

    const updateState = (newData) => {
        this.todoData = newData;
        this.todoList.setState(this.todoData);
        this.todoCount.setState(this.todoData); 
    }

    const appInnerHtml = `<h3>${appTitle}</h3><div id="${selector}"></div>`;
    document.querySelector('#App').insertAdjacentHTML('afterbegin', appInnerHtml);
    const $target = document.querySelector(`#${selector}`); 
    
    this.todoList = new TodoList($target, this.todoData, {
        onUpdate: (newTodo) => {
            setData(TODO_STORAGE_KEY, newTodo);
            updateState(newTodo);
        }
    }); 

    this.todoInput = new TodoInput(selector, this.todoData, {
        onAddTodo: (inputText) => {          
            const nextData = [
                ...this.todoData,
                {
                  text: inputText, isCompleted: false
                }
            ]
            setData(TODO_STORAGE_KEY, newtData);
            updateState(nextData);
          }
    }); 
    
    this.todoCount = new TodoCount(selector, this.todoData); 

    $target.addEventListener('todo-removeAll', (event) =>{
        this.todoData.length = 0;
        localStorage.removeItem(TODO_STORAGE_KEY); 
        updateState(this.todoData);
    });

};

export default App;
