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

    this.removeSelector = '#remove-all';
    this.removeBtnElement = document.querySelector(this.removeSelector);

    this.todoList = new TodoList(this.data,'#todo-list');
    this.todoInput = new TodoInput('#todo-input');
    this.todoCount = new TodoCount('#todo-count',this.data);

    this.todoInput.addEvent((item) => {
        if(item) {
          this.data.push({text:item,isCompleted:false});
          this.todoList.setState(this.data);
          this.todoCount.render();
        }
    });

    this.removeBtnElement.addEventListener('click',(e)=>{
      if(this.data.length) {
        this.data = [];
        this.todoList.setState(this.data);
        this.todoCount.render();
      }
    });
}

export default App;