function App({$main, initialState}) {

    const $app = document.createElement('div');
    $main.appendChild($app);

    this.state = initialState;
    if (this.state === undefined || this.state === null) this.state = [];

    const getCountState = () => {
        return {
            totalWorks: this.state.length,
            completedWorks: this.state.filter(todo => todo.isCompleted).length
        };
    }

    const todoList = new TodoList({
        $app: $app,
        initialState: this.state,
        doWhenClicked: (index) => {
            const newState = [...this.state];
            newState[index].isCompleted = !newState[index].isCompleted;
            this.setState(newState);
        }
    });

    const todoCount = new TodoCount({
        $app: $app,
        initialState: getCountState()
    });

    const todoInput = new TodoInput({
        $app: $app,
        doWhenInputted: (todo) => { 
            this.addTodo(todo);
        }
    });

    this.addTodo = (todo) => {
        const newState = ([
            ...this.state,
            {
                text: todo,
                isCompleted: false
            }
        ]);
        this.setState(newState);
    };

    this.removeAll = () => {
        this.setState([]);
    };

    this.setState = (newState) => {
        this.state = newState;
        setStorageData(this.state);
        todoList.setState(this.state);
        todoCount.setState(getCountState());
    };

    $app.addEventListener('removeAll', () => {
        this.removeAll();
    });

}
