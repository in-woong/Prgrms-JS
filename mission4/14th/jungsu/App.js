import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import { REMOVE_ALL } from './CustomEventType.js';
import * as TodoApi from './TodoApi.js';
import Users from './Users.js';
import Loading from './Loading.js';

export default function App({ $target }) {
    this.state = {
        username: 'jungsu',
        todoList: [],
    };

    // render로 명칭하는게 맞을지..?
    this.render = async() => {
        this.setState = (nextState) => {
            this.state = nextState;

            todoList.setState(this.state.todoList);

            todoCount.setState({
                completeCount: this.state.todoList.filter((todoList) => todoList.isCompleted).length,
                totalCount: this.state.todoList.length,
            });
        }


        this.getUserTodoList = async() => {
            todoListLoading.setState(true);
            const userTodoList = await TodoApi.getTodoList(this.state.username);
            todoListLoading.setState(false);

            return userTodoList ? userTodoList : [];
        }
        console.log($target);

        const users = new Users({
            $target,
            initialState: await TodoApi.getUsers(),
            onChange: async(username) => {
                this.state.username = username;
                const nextTodoList = await this.getUserTodoList();

                this.setState({
                    ...this.state,
                    todoList: nextTodoList,
                });
            }
        });

        const todoInput = new TodoInput({
            $target,
            onSubmit: async(content) => {
                const t = await TodoApi.postTodoList(this.state.username, content);
                const nextTodoList = await this.getUserTodoList();

                this.setState({
                    ...this.state,
                    todoList: nextTodoList,
                });
            },
        });

        console.log(todoInput.$element);

        // 어떻게 await 하게 만들지....
        // this.state.todoList = this.getUserTodoList();


        // (async() => {
        //     this.state.todoList = this.getUserTodoList();
        // })();

        //그냥 main에서 넘기자
        //실패
        //render 만들기

        // 초기 jungsu로 하려다가 Users select로 변경에 따른 삭제
        // this.state.todoList = await this.getUserTodoList();

        const todoList = new TodoList({
            $target,
            initialState: this.state.todoList,
            onClick: async(id) => {
                await TodoApi.putTodoList(this.state.username, id);

                const nextTodoList = await this.getUserTodoList();
                this.setState({
                    ...this.state,
                    todoList: nextTodoList,
                });
            },
            onRemove: async(id) => {
                await TodoApi.deleteTodoList(this.state.username, id);

                const nextTodoList = await this.getUserTodoList();
                this.setState({
                    ...this.state,
                    todoList: nextTodoList,
                });
            },
            onDragend: async(id) => {
                console.log(id);
                await TodoApi.deleteTodoList(this.state.username, id);

                const nextTodoList = await this.getUserTodoList();
                this.setState({
                    ...this.state,
                    todoList: nextTodoList,
                })

            },
            onDrop: async(dataset) => {
                if ($target !== dataset.$target) {
                    const response = await TodoApi.postTodoList(this.state.username, dataset.content);

                    if (dataset.isCompleted == 'true') {
                        await TodoApi.putTodoList(this.state.username, response.id);
                    }

                    const nextTodoList = await this.getUserTodoList();
                    this.setState({
                        ...this.state,
                        todoList: nextTodoList,
                    });
                }
            },
        });


        // #144 로딩넣기
        const todoListLoading = new Loading({
            $target,
            $changeTarget: todoList.$element,
            initialState: false,
        })

        const todoCount = new TodoCount({
            $target,
            initialState: {
                completeCount: this.state.todoList.filter((todoList) => todoList.isCompleted).length,
                totalCount: this.state.todoList.length,
            },
        });

        //removeAll CustomCount
        window.addEventListener(REMOVE_ALL, async() => {
            await TodoApi.deleteAllTodoList(this.state.username);

            const nextTodoList = await this.getUserTodoList();
            this.setState({
                ...this.state,
                todoList: nextTodoList,
            });
        })
    }

    this.render();
}