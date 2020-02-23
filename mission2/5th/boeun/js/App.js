import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { getData } from './util.js';
import { TODO_STORAGE_KEY } from './constant.js';

const App = function(selector, appTitle = 'To do List') {
    
    this.todoData = getData(TODO_STORAGE_KEY) || [];

    const updateState = (newData) => {
        this.todoData = newData;
        this.todoList.setState(this.todoData);
        this.todoCount.setState(this.todoData); 
    }

    document.querySelector('#App').insertAdjacentHTML('afterbegin', `<h3>${appTitle}</h3><div id="${selector}"></div>`);
    const $target = document.querySelector(`#${selector}`); 
    
    this.todoList = new TodoList($target, this.todoData, {
        onUpdate: (newTodo) => {
          localStorage.setItem('todoList', JSON.stringify(newTodo)); 
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
            localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(nextData)); 
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
