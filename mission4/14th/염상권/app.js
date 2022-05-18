import { UserList, TodoTitle, TodoForm, TodoList, TodoCount } from './components/index.js';
import { $, isDataValid, initStorage, setUserInStorage } from './utils/index.js';
import {TODO_API, USER_API} from './api/index.js';
class App {
    constructor() {
        return (async () => {
            this.user = initStorage();
            
            this.$loader = $({ selector: '.loader' });
            
            [this.state, this.userList] =
                await Promise.all([this.getTodos(), this.getUserList()])
                .then((res) => {
                    this.$loader.style.display = 'none';
                    return res;
                });
            
            this.userList = new UserList({
                $target: $({ selector: '.user--container' }),
                userList: this.userList,
                onClickUser: this.onClickUser.bind(this),
            })

            this.todoTitle = new TodoTitle({
                $target: $({ selector: '.todo--title' }),
                user: this.user,
            })

            this.todoForm = new TodoForm({
                $target: $({ selector: '.todo--form' }),
                onSubmit: this.onSubmit.bind(this),
                onRemoveAll: this.onRemoveAll.bind(this),
            });

            this.todoList = new TodoList({
                $target: $({ selector: '.todo--list-container' }),
                todos: this.state,
                onToggle: this.onToggle.bind(this),
                onRemove: this.onRemove.bind(this),
            });

            this.todoCount = new TodoCount({
                $target: $({ selector: '.todo--count-container' }),
                todos: this.state,
            });

            return this;
        })();
    }

    // 사용자 리스트를 불러오는 함수
    async getUserList() {
        return await USER_API.fetchUserList();
    }

    // Todo를 가져오는 함수 (유저에 따라 다른 값을 가져옴)
    async getTodos() {
        return await TODO_API.fetchTodo({ user: this.user });
    }
    
    // 유저의 상태를 변경하는 함수
    async reflectState() {
        const newState = await this.getTodos();

        this.setState({ newState });
    }

    // 유저를 변경하는 함수
    async onClickUser({ user }) {
        this.user = user;

        setUserInStorage({ user: this.user });
        this.reflectState();
    }

    // Todo를 추가하는 함수
    async onSubmit({ content }) { 
        await TODO_API.addTodo({ user: this.user, content });

        this.reflectState();
    }

    // Todo를 완료/미완료로 변경하는 함수
    async onToggle({ key }) {
        await TODO_API.toggleTodo({ user: this.user, id: key });
 
        this.reflectState();
    }

    // Todo를 삭제하는 함수
    async onRemove({ key }) {
        await TODO_API.removeTodo({ user: this.user, id: key });
        
        this.reflectState();
    }

    // 모든 Todo를 삭제하는 함수
    async onRemoveAll() {
        await TODO_API.removeAllTodo({ user: this.user });

        this.reflectState();
    }

    // Todo를 렌더링하는 함수
    render() {
        this.userList.render();
        this.todoTitle.render();
        this.todoList.render();
        this.todoCount.render();
     }

    // Todo의 상태변경을 위한 함수
    setState({ newState }) {
        try {
            isDataValid({ todos: newState });
            
            this.state = newState;
            this.todoTitle.setState({ user: this.user });
            this.todoList.setState({ todos: this.state });
            this.todoCount.setState({ todos: this.state });
            this.$loader.style.display = 'none';
        } catch (e) {
            console.error(e.message);
        }
    }    
}

export default App;
