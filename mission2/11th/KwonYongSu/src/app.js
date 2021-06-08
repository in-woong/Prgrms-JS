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
  // localStorage에 저장되어 있는 Data 읽어 온다.
  this.$state = getLocalStorageData();
  
  // 새로운 할 일이 추가 되었을 경우 기존의 state에 값을 추가한다. 
  // 하나의 할 일은 번호, 내용, 수행 여부, 생성 날짜의 속성을 가진다.
  this.addItem = (todoItem) =>{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
   const date = now.getDate();
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
  
  // todoList 객체에서 할 일의 수행 상태 변경 및 삭제에 대해서 전체 목록 및 완료된 목록을 갱신한다.
  this.changeCompletedTodoCount = (todoItems) => {
    // 변경된 데이터로 기존 데이터를 갱신한다.
    this.$state = todoItems;
    // 기존의 localStorage값을 새롭게 변경된 state의 값으로 갱신해준다.
    setLocalStorageData(this.$state);
    this.changeCount(todoItems);
  };
  
  // 전체 목록을 삭제한다.
  this.removeAllTodoItems = () => {this.changeState([]);};
  
  // 할일이 추가 되었을 경우 및 삭제되었을 경우 화면에 새로운 데이터로 재 랜더링한다.
  this.changeState = (nextSate) => {
    this.$state = nextSate;
    // 기존의 localStorage값을 새롭게 변경된 state의 값으로 갱신해준다.
    setLocalStorageData(this.$state);
    // 갱신된 데이터로 재 랜더링
    this.todoList.setState(nextSate);
    // 전체 및 완료 항목 갱신
    this.todoCount.countCompletedTodoItem(nextSate);
  };

  // 새로운 할일이 추가되거나 삭제 및 수행 상태가 변경되었을 경우 동적으로 표시되는 완료 목록 수를 바꾸어 준다.
  this.changeCount = (todoItems) => {
    this.todoCount.countCompletedTodoItem(todoItems);
  };
  // 객체 생성
  this.todoInput = new TodoInput(this.$target,this.addItem);  
  this.todoList = new TodoList(this.$state ,this.$target,this.changeCompletedTodoCount);
  this.todoCount = new TodoCount(this.$target,this.$state);
  this.todoRemoveAll = new TodoRemoveAll(this.$target,this.removeAllTodoItems);
};

export default App;