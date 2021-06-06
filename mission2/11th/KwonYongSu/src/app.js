import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'
import TodoCount from './components/TodoCount.js'
import TodoRemoveAll from './components/RemoveAll.js'
const Todo = [
  {
    todoId: 0,
    text: 'todo text',  // 할 일 이름
    isCompleted: false, // 완료 여부
  },
  {
    todoId: 1,
    text: 'todo text 2',  // 할 일 이름
    isCompleted: false, // 완료 여부
  },

]

function App($target) {
  
  // new 키워드로 생성하지 않은 경우
  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };

  this.$target = $target;
  this.$state = Todo;
  
  const addItem = (todoItem) =>{
    console.log('add items',this.$state)
    const newTodoItems = [
      ...this.$state,
      {
        todoId: this.$state.length,
        text:todoItem,
        isCompleted:false
      }
    ];
    this.changeState(newTodoItems);
  };

  const changeCompletedTodoCount = (todoItems) => {
    this.$state = todoItems;
    this.changeCount(todoItems);
  };

  const removeAllTodoItems = () => {this.changeState([]);};

  this.todoInput = new TodoInput(this.$target,addItem);  
  this.todoList = new TodoList(this.$state ,this.$target,changeCompletedTodoCount);
  this.todoCount = new TodoCount(this.$target,this.$state);
  this.todoRemoveAll = new TodoRemoveAll(this.$target,removeAllTodoItems);
  
  this.changeState = (nextSate) => {
    this.$state = nextSate;
    this.todoList.setState(nextSate);
    this.todoCount.countCompletedTodoItem(nextSate);
  }

  this.changeCount = (todoItems) => {
    this.todoCount.countCompletedTodoItem(todoItems);
  }
};

export default App;