import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

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
    this.todoCount = new TodoCount('#todo-count',this.data);

    this.todoInput.addEvent((item) => {
        if(item) {
          this.todoList.add(item);
          this.todoCount.render();
        }
    });
}

export default App;