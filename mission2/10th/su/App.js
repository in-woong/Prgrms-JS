import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';


function App() {
    this.data = [
        {
          text: '운동',
          isCompleted: true,
        },
        {
          text: '넷플릭스',
          isCompleted: false,
        }
      ];
    this.todoList = new TodoList(this.data,'#todo-list');
    this.todoInput = new TodoInput('#todo-input');

    this.todoInput.addEvent((item) => {
        if(item) {
          this.todoList.add(item);
        }
    });
}

export default App;