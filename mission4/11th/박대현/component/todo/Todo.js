import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import { getTodoList, addTodo, toggleTodoDone, deleteTodo, deleteAllTodo } from '../../api/todo.js';
export default function($parent){
   
  // todo가 관리할 하위 컴포넌트
  const components = [];
  
  // todo가 관리할 데이터
  const data = {
    todoList : [],
    username : '',
  }

  // todo의 DOM 요소
  const elements = { 
    $todo : Object.assign(document.createElement('section'),{className : 'todo-wrapper'}),
    $todoListContainer : Object.assign(document.createElement('main'), {className : 'todo-list-container'}),
  }

  // data의 상태를 변경하게 해줄 함수
  const setState = {
    setTodoList : newTodoList => {
      data.todoList = newTodoList;
      renders.todoListRender();
    },
    setUsername : async newUsername => {
      data.username = newUsername;
      await loaders.loadTodoList();
      renders.todoListRender();
    }
  }

  // 관리하는 data를 바탕으로 render 해줄 함수
  const renders = {
    todoListRender : () => {
      const [ _, todoCount, todoList, doneList ] = components;
      todoCount.renders.todoListRender(data.todoList);
      todoList.renders.todoListRender(data.todoList);
      doneList.renders.todoListRender(data.todoList);
    }
  }

  // todo 포함 하위 컴포넌트가 다룰 이벤트 핸들러
  const eventHandlers = {
    handleAddTodoItem : async content => {
      try {
        const { todoList, username } = data;
        if(username === '') return;
        const newTodoList = [...todoList, await addTodo(username, content)];
        setState.setTodoList(newTodoList);  
      } catch (error) {
        console.error(error);
        alert('todo 추가 실패');
      }
    },
    handleToggleDone : async targetIndex => {
      try {
        const { todoList, username } = data;
        if(username === '') return;
        await toggleTodoDone(username, todoList[targetIndex]._id);
        const newTodoList = todoList.map((todo, index) => {
          return index === parseInt(targetIndex) ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          } : todo; 
        });
        setState.setTodoList(newTodoList);
      } catch (error) {
        console.error(error);
        alert('todo 완료 toggle 실패');
      }
    },
    handleDeleteTodoItem: async targetIndex => {
      try {
        const { todoList, username } = data;
        if(username === '') return;
        await deleteTodo(username, todoList[targetIndex]._id);
        const newTodoList = todoList.filter((_, index) => index !==targetIndex );
        setState.setTodoList(newTodoList);
      } catch (error) {
        console.error(error);
        alert('todo 삭제 실패');
      }
    },
    
  }

  // 서버로부터 data를 받아오는 함수
  const loaders = {
    loadTodoList : async () => {
      try {
        const { username } = data;
        if(username === '') return;
        const result = await getTodoList(username);
        setState.setTodoList([...result]);
        return result;
      } catch (error) {
        console.error(error);
        alert('할 일 목록 불러오기 에러');
      } 
    }
  }

  // mount
  const mount = () => {
    const { $todo, $todoListContainer } = elements;
    components.push(new TodoInput($todo, eventHandlers));
    components.push(new TodoCount($todo));
    components.push(new TodoList($todoListContainer, eventHandlers, { label: '할 일 목록', mode: false}));
    components.push(new TodoList($todoListContainer, eventHandlers, { label: '한 일 목록', mode: true}));
    $todo.appendChild($todoListContainer);
    $parent.appendChild($todo);
  }

  // 등록할 이벤트 리스너
  const eventListeners = () => {
    elements.$todo.addEventListener('removeAll', async username => {
      try {
        await deleteAllTodo(username);
        setState.setTodoList([]);
      } catch (error) {
        console.error(error);
        alert('todoList 전체 삭제 실패')
      }
    });
  }

  // 상위 컴포넌트를 위한 메소드
  this.setState = setState;

  ///////////////////////////////////////////////////////////
  mount();
  eventListeners();
}