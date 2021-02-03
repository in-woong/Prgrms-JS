import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';


const data = [
    {
      text: '운동',
      isCompleted: true,
    },
    {
      text: '넷플릭스',
      isCompleted: false,
    }
  ];
  
const todoList = new TodoList(data, '#todo-list');

const todoInput = new TodoInput('#todo-input');
todoInput.addEvent((item) => {
  if(item) {
    console.log(item,"item")
    todoList.add(item);
  }
});
