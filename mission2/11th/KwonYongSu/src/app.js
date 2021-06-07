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
  
  this.addItem = (todoItem) =>{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    console.log(year,month,date)
    const newTodoItems = [
      ...this.$state,
      {
        todoId: this.$state.length,
        text:todoItem,
        isCompleted:false,
        createdAt:`${year}.${month}.${date}`
      }
    ];
    this.changeState(newTodoItems);
  };

  this.changeCompletedTodoCount = (todoItems) => {
    this.$state = todoItems;
    setLocalStorageData(this.$state);
    this.changeCount(todoItems);
  };

  this.removeAllTodoItems = () => {this.changeState([]);};
  
  this.changeState = (nextSate) => {
    this.$state = nextSate;
    setLocalStorageData(this.$state);
    this.todoList.setState(nextSate);
    this.todoCount.countCompletedTodoItem(nextSate);
  };
  this.changeCount = (todoItems) => {
    this.todoCount.countCompletedTodoItem(todoItems);
  };

  this.todoInput = new TodoInput(this.$target,this.addItem);  
  this.todoList = new TodoList(this.$state ,this.$target,this.changeCompletedTodoCount);
  this.todoCount = new TodoCount(this.$target,this.$state);
  this.todoRemoveAll = new TodoRemoveAll(this.$target,this.removeAllTodoItems);
};

export default App;