import TodoCount from "./component/TodoCount.js";
import TodoInput from "./component/TodoInput.js";
import TodoList from "./component/TodoList.js";
import { getItem, removeItem, setItem } from "./util/Storage.js";

export default function App({$app}){
    this.state = getItem('todo', []);
    const todoList = new TodoList({
        $app,
        initialState: this.state,
        onChange: (idx, flag) => {
            this.state[idx].isCompleted = flag;
            this.setState(this.state);
        },
        onDelete: (idx) => {
            this.state.splice(idx, 1);
            this.setState(this.state);
        }
    });

    const todoCount = new TodoCount({
        $app,
        initialState: this.state
    });

    const todoInput = new TodoInput({
        $app,
        onClick: (value) => { //데이터 추가
            this.setState([
                ...this.state,
                value
            ]); 
        },
        onRemoveAll: () => {
            this.setState([]);
        }
    });

    this.setState = (nextState) => {
        this.state = nextState;
        setItem('todo', this.state);
        todoList.setState(this.state);
        todoCount.setState(this.state);
    }
}