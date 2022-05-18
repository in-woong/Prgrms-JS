import { handleTodoData, getUniqueKey, initLocalStorage, getLocalStorage, setLocalStorage } from './utils/index.js';
import { TodoForm, TodoList, TodoCount } from './components/index.js';

class App {
    constructor() {
        initLocalStorage();

        this.todos = getLocalStorage();

        this.todoCount = new TodoCount();

        this.todoList = new TodoList({ todos: this.todos, setCount: this.todoCount.render });

        this.todoForm = new TodoForm();
    }

    /**
     * setTodo
     * 
     * 원본 todo를 변경하고 변경된 배열을 반환한다.
     * 
     * @param {Array} newTodos 
     * @returns 변경된 배열
     */

    setTodo({ newTodos }) {
        return this.todos = newTodos;
    }

    /**
     * getTodo
     * 
     * 원본 배열을 반환한다.
     * 
     * @returns 배열
     */

    getTodo() {
        return this.todos;
    }

    /**
     * addTodo
     * 
     * 새로운 todo를 넣은 배열을 반환한다.
     * 
     * @returns 이벤트 함수를 반환
     */

    addTodo() {
        return ({ todo }) => {
            handleTodoData({
                todos: this.setTodo({newTodos: [...this.getTodo(), { id: getUniqueKey(), ...todo }]}),
                todoList: this.todoList,
            });
        }
    }

    /**
     * removeOneTodo
     * 
     * 인덱스를 받고, 해당 인덱스에 해당 하는 것을 삭제 후, 배열로 변경한다.
     * 
     * @returns 이벤트 함수 반환
     */

    removeOneTodo() {
        return ({ idx }) => {
            handleTodoData({
                todos: this.setTodo({newTodos: this.getTodo().filter((todo) => todo.id !== Number(idx))}),
                todoList: this.todoList,
            });
        }
    }

    /**
     * removeAllTodo
     * 
     * todo의 값을 빈 배열로 변경한다.
     * 
     * @returns 이벤트 함수를 반환
     */

    removeAllTodo() {
        return () => {
            handleTodoData({
                todos: this.setTodo({newTodos: []}),
                todoList: this.todoList,
            });
        }
    }

    /**
     * changeDoneTodo
     * 
     * 상태 변경할 인덱스를 받고 상태 변경후, 원본 배열에 반영한다.
     * @returns 이벤트 함수를 반환
     */

    changeDoneTodo() {
        return ({ idx }) => {
            handleTodoData({
                todos: this.setTodo({newTodos: this.getTodo().map((todo) => (todo.id === Number(idx)) ? { ...todo, isCompleted: !todo.isCompleted } : todo)}),
                todoList: this.todoList,
            });
        }
    }

    /**
     * saveTodoBeforePageOut
     * 
     * 현재 까지의 todo를 새로고침 또는 페이지를 나갈 시에 localstorage에 저장합니다.
     */

    saveTodoBeforePageOut() {
        window.addEventListener('beforeunload', () => {
            setLocalStorage({ todos: this.todos });
        });
    }

    /**
     * render
     * 
     * 1. form 이벤트 등록 ( 입력, 모두 삭제 )
     * 2. todoList 이벤트 등록 ( todo 상태 변경, 한개 삭제 )
     * 3. todoList를 랜더링
     * 4. todoCount 랜더링
     * 5. 로컬 스토리지에 todo 저장
     */

    render() {
        this.todoForm.registerFormEvent({
            addTodo: this.addTodo(),
            removeAllTodo: this.removeAllTodo()
        });
        this.todoList.registerTodoEvent({
            removeOneTodo: this.removeOneTodo(),
            changeDoneTodo: this.changeDoneTodo()
        });

        this.todoList.render();
        this.todoCount.render({ todos: this.todos });
        this.saveTodoBeforePageOut();
    }
}

const app = new App();
app.render();