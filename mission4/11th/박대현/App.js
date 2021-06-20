import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import { getTodoList, addTodo, toggleTodoDone, deleteTodo, deleteAllTodo } from './api.js';
export default function ($parent) {
  // app이 관리하는 데이터
  let todoList = [];

  // app의 DOM 요소 생성
  const $app = Object.assign(document.createElement('div'), {className:'app'});
  

  // todo 추가
  const handleAddTodoItem = async content => {
    try {
      const newTodoList = [...todoList, await addTodo(content)];
      this.setState(newTodoList);  
    } catch (error) {
      console.error(error);
      alert('todo 추가 실패');
    }
  }
  
  // todo 완료 여부 토글
  const handleToggleDone = async targetIndex => {
    try {
      await toggleTodoDone(todoList[targetIndex]._id);
      const newTodoList = todoList.map((todo, index) => {
        return index === targetIndex? {
          ...todo,
          isCompleted: !todo.isCompleted,
        } : todo; 
        })
      this.setState(newTodoList);
    } catch (error) {
      console.error(error);
      alert('todo 완료 toggle 실패');
    }
  }

  // todo 삭제
  const handleDeleteTodoItem = async targetIndex => {
    try {
      await deleteTodo(todoList[targetIndex]._id);
      const newTodoList = todoList.filter((_, index) => index !==targetIndex );
      this.setState(newTodoList);
    } catch (error) {
      console.error(error);
      alert('todo 삭제 실패');
    }
  }
  
  // 갱신된 todoList를 바탕으로 재 렌더링
  const render = () => {
    childrenComponent.forEach(component => component.render(todoList));
  }

  // todoList 갱신
  this.setState = newTodoList => {
    todoList = [...newTodoList];
    render();
  }

  // 서버로부터 todoList 불러오기
  const loadTodoList = async () => {
    try {
      this.setState(await getTodoList());
    } catch (error) {
      console.error(error);
      alert('할 일 목록 불러오기 에러');
    }
  }
  
  // DOM 구축
  const childrenComponent = []; 
  const buildDOM = () => {
    childrenComponent.push(new TodoInput($app, handleAddTodoItem));
    childrenComponent.push(new TodoCount($app ));
    childrenComponent.push(new TodoList($app, handleToggleDone, handleDeleteTodoItem));
    $parent.appendChild($app);
  }

  // 이벤트 리스너 부착
  const attachEventListeners = () => {
    // todo 전체 삭제
    $app.addEventListener('removeAll', async () => {
      try {
        await deleteAllTodo();
        this.setState([]);
      } catch (error) {
        console.error(error);
        alert('todoList 전체 삭제 실패')
      }
      
    });
  }

  ///////////////////////////////////////////////////////////
  loadTodoList();
  buildDOM();
  attachEventListeners();
};

