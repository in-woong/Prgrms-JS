import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import { saveTodoListDataToLocalStorage, getTodoListDataFromLocalStorage } from './localStorage.js';
export default function ($parent) {
  this.todoListData = getTodoListDataFromLocalStorage();
  
  const handleAddTodoItem = text => {
    // 빈 텍스트인지 확인하기
    const todoListData = [...this.todoListData, {
      text,
      isCompleted: false,
    }]
    this.setState(todoListData);
  }
  
  const handleRemoveAll = () => {
    const todoListData = [];
    this.setState(todoListData);
  }

  const handleToggleDone = targetDataIndex => {
    const todoListData = this.todoListData.map((todo, index) => {
      if(index === targetDataIndex){
        return {
          ...todo,
          isCompleted: !todo.isCompleted, 
        }
        
      }else {
        return todo;
      }
    })
    this.setState(todoListData);
  }

  const handleDeleteTodoItem = targetDataIndex => {
    const todoListData = this.todoListData.filter((_, index) => index !==targetDataIndex );
    this.setState(todoListData);
  }
  
  const app = document.createElement('div');
  app.className = "app";
  
  const todoInput = new TodoInput(app, handleAddTodoItem);
  const todoCount = new TodoCount(app,this.todoListData);
  const todoList = new TodoList(app,this.todoListData, handleToggleDone, handleDeleteTodoItem); 
  const childrenComponent = [todoInput, todoCount, todoList];
  $parent.appendChild(app);
  
  // 전체 삭제 버튼을 누르면 removeAll 이벤트가 발생하고 todoListData는 clear되고, todoList와 todoCount는 새롭게 rendering을 해야만한다.
  app.addEventListener('removeAll', handleRemoveAll);
  
  this.render = () => {
    childrenComponent.forEach(component => component.setState(this.todoListData));
  }

  this.setState = newData => {
    this.todoListData = newData;
    saveTodoListDataToLocalStorage(newData);
    this.render();
  }
  this.render();
}
export { App };
