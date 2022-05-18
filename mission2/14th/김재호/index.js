import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import Storage from "./Storage.js";

function App() {
  try {
    const storage = new Storage();

    this.state = storage.loadState() || []; // localStorage 저장된 데이터 가져오기 #91

    this.getTodoCount = () => { // TodoCount 갯수 계산 #77
      let totalTodoCount = 0;
      let completedTodoCount = 0;
      for(const {isCompleted} of this.state) {
        totalTodoCount++;
        if(isCompleted) completedTodoCount++;
      }
      return [totalTodoCount, completedTodoCount];
    }

    const $app = document.querySelector('#App');
    const todoInput = new TodoInput($app);
    const todoList = new TodoList($app, {state: this.state, tag : 'todo-list'})
    const todoCount = new TodoCount($app, this.getTodoCount());

    const addTodoEvent = ({detail}) => {  // todo 추가하기 #75
      this.state.push(detail);
      todoList.setState(this.state);
      todoList.render();
      todoCount.render(this.getTodoCount());
      storage.saveState(this.state);
    }

    const toggleTodoEvent = ({detail}) => { // todo 삭선 토글하기 #75
      this.state = this.state.map((todo) => {
        if(todo.id === Number(detail)) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      todoCount.render(this.getTodoCount());
      storage.saveState(this.state);
    }

    const deleteTodoEvent = ({detail}) => { // todo 삭제하기 #75
      this.state = this.state.filter((todo) => {
        return todo.id !== Number(detail);
      })
      todoCount.render(this.getTodoCount());
      storage.saveState(this.state);
    }

    const removeTodoEvent = () => { // todo 전체삭제하기 #90
      this.state = [];
      todoList.setState(this.state);
      todoList.render();
      todoCount.render(this.getTodoCount());
      storage.saveState(this.state);
    }

    $app.addEventListener('AddTodoEvent', addTodoEvent);
    $app.addEventListener('ToggleTodoEvent', toggleTodoEvent);
    $app.addEventListener('DeleteTodoEvent', deleteTodoEvent);
    $app.addEventListener('RemoveAllEvent', removeTodoEvent);
  } catch (error) {
    console.log(error);
  }
}

new App();