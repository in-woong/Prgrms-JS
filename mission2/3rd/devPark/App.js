
import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'



const data = [
    {
        text: 'JS 공부하기',
        isComplete: true
    },
    {
        text: 'JS 복습하기',
        isComplete: false
    }
]

function App($element){
    const todoInput = new TodoInput();
    const todoList = new TodoList(data);

    
    todoInput.render();
    todoList.render(data);

    $element.appendChild(todoInput.$component);
    $element.appendChild(todoList.$component);

}


          
export default App;

