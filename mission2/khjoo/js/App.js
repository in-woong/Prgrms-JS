import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

//App 컴포넌트 만들기, TodoList, TodoInput 동시 관리(#76)
function App() {
    const data = []
    const $target = documnet.querySelector('#todo-list');
    const todoList = new TodoList($target, data);
    TodoInput(todoList);

    todoList.setState([
        {
            text:'놀기',
            isCompleted:false,
        },
    ]);
}
App();