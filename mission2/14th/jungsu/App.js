
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import {REMOVE_ALL} from './CustomEventType.js';


export default function App({ $target, initialState }) {
    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        todoList.setState(this.state);
        todoCount.setState({
            completeCount: this.state.filter((todoList) => todoList.isCompleted).length,
            totalCount: this.state.length,
        });
    }


    const todoInput = new TodoInput({
        $target,
        onSubmit: (todoText) => {
            const nextState = [
                ...this.state,
                {
                    text: todoText,
                    isCompleted: false,
                },
            ];
            this.setState(nextState);
        },
    });
    const todoList = new TodoList({
        $target,
        initialState: this.state,
        onClick: (index) => {
            const nextState = [...this.state];
            nextState[index].isCompleted = !nextState[index].isCompleted;
            this.setState(nextState);
        },
        onRemove: (index) => {
            const nextState = [...this.state];
            nextState.splice(index, 1);
            this.setState(nextState);
        },
    });

    const todoCount = new TodoCount({
        $target,
        initialState: {
            completeCount: this.state.filter((todoList) => todoList.isCompleted).length,
            totalCount: this.state.length,
        },
    });

    //removeAll CustomCount
    window.addEventListener(REMOVE_ALL, () => {
        this.setState([]);
    })

}