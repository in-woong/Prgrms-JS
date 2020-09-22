import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import { validateTodoItem, validateTodoItems } from './utils/validateTodo.js';
import {
    addTodoItem,
    fetchTodoItems,
    removeAllTodoItems,
    removeTodoItem,
    toggleTodoItem,
} from './api.js';
import Users from './components/Users.js';
import { errorHandler } from './utils/errorHandler.js';

const DEFAULT_USER_NAME = 'inhyuck';

export default function App({ $target, initData = {username: DEFAULT_USER_NAME, todoItems: []} }) {
    this.$target = $target;
    this.data = initData;

    //추가, 삭제, 전체삭제, 토글 등 api 를 호출하고 성공했을 때 전체 갱신 vs 부분만 임의갱신 => 고민해볼만한 문제...!
    const refreshTodoItems = async () => {
        let fetchedTodoItems = this.data.todoItems;

        this.setState({isPending: true});
        try {
            fetchedTodoItems = await fetchTodoItems({username: this.data.username});
        } catch (e) {
            errorHandler({errorMessage: e.message});
        } finally {
            this.setState({isPending: false}); //pending 은 에러가 발생해도 닫아줘야 함
        }

        this.setState({todoItems: fetchedTodoItems});
    }

    const onChangeUser = async (username) => {
        this.setState({username});
        await refreshTodoItems();
    };

    const onSaveTodoItem = async ({ todoItemText }) => {
        const newTodoItem = {text: todoItemText, isCompleted: false};
        validateTodoItem({todoItem: newTodoItem});

        const addedTodoItem = await addTodoItem({username: this.data.username, ...newTodoItem});
        this.setState({
            todoItems: [
                ...this.data.todoItems,
                addedTodoItem,
            ],
        });
    };

    const onRemoveTodoItem = async ({ todoItemIndex }) => {
        await removeTodoItem({
            username: this.data.username,
            todoId: this.data.todoItems[todoItemIndex].id
        });
        await refreshTodoItems();
    };

    const onCompleteTodoItem = async ({ todoItemIndex }) => {
        await toggleTodoItem({
            username: this.data.username,
            todoId: this.data.todoItems[todoItemIndex].id
        });

        const newTodoItems = [...this.data.todoItems];
        newTodoItems[todoItemIndex].isCompleted = !newTodoItems[todoItemIndex].isCompleted;
        this.setState({
            todoItems: newTodoItems,
        });
    };

    this.$target.addEventListener('removeAll', async (event) => {
        event.stopPropagation();
        await removeAllTodoItems({username: this.data.username});
        await refreshTodoItems();
    });

    this.render = function () {
        if (!this.$target.innerHTML) {
            this.$target.innerHTML = `
                <div class="user-list"></div>
                <div class="todo-list"></div>
                <div class="todo-count"></div>
                <div class="todo-input"></div>
                
                <div class="pending-area">
                    <span class="contents">todoList 를 불러오는 중입니다...</span>
                </div>
            `;
        }

        const $pendingArea = this.$target.querySelector('.pending-area');
        $pendingArea.style.display = this.data.isPending ? 'block' : 'none';
    };

    this.setState = function (nextData) {
        if (nextData.todoItems) {
            validateTodoItems({ todoItems: nextData.todoItems });
        }

        this.data = {
            ...this.data,
            ...nextData,
        };

        this.userList.setState({ selectedUsername: this.data.username })
        this.todoList.setState({ todoItems: this.data.todoItems, username: this.data.username });
        this.todoCount.setState({ todoItems: this.data.todoItems });
        this.render();
    };

    this.initialize = async () => {
        this.render();

        this.userList = new Users({
            $target: this.$target.querySelector('.user-list'),
            initData: {selectedUsername: this.data.username},
            onChangeUser,
        });
        this.todoList = new TodoList({
            $target: this.$target.querySelector('.todo-list'),
            initData: {todoItems: this.data.todoItems, username: this.data.username},
            onRemoveTodoItem,
            onCompleteTodoItem,
        });
        this.todoInput = new TodoInput({
            $target: this.$target.querySelector('.todo-input'),
            onSaveTodoItem,
        });
        this.todoCount = new TodoCount({
            $target: this.$target.querySelector('.todo-count'),
            initData: {todoItems: this.data.todoItems},
        });

        await refreshTodoItems();
    };

    this.initialize(); //컴포넌트의 생성자함수를 async 로 명시할 수 없다. 하지만 찜찜하다...?
}

