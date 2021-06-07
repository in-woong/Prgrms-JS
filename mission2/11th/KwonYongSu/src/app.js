import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'
import TodoCount from './components/TodoCount.js'
import TodoRemoveAll from './components/RemoveAll.js'
import { getLocalStorageData,setLocalStorageData } from '../utils/LocalStorage.js'


function App($target) {
  
  // new 키워드로 생성하지 않은 경우
  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };

  this.$target = $target;
  this.$state = getLocalStorageData();
  
  const addItem = (todoItem) =>{
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
    setLocalStorageData(this.$state);
    this.changeCount(todoItems);
  };

  const removeAllTodoItems = () => {this.changeState([]);};

  this.todoInput = new TodoInput(this.$target,addItem);  
  this.todoList = new TodoList(this.$state ,this.$target,changeCompletedTodoCount);
  this.todoCount = new TodoCount(this.$target,this.$state);
  this.todoRemoveAll = new TodoRemoveAll(this.$target,removeAllTodoItems);
  
  this.changeState = (nextSate) => {
    this.$state = nextSate;
    setLocalStorageData(this.$state);
    this.todoList.setState(nextSate);
    this.todoCount.countCompletedTodoItem(nextSate);
  }

  this.changeCount = (todoItems) => {
    this.todoCount.countCompletedTodoItem(todoItems);
  }
};

export default App;