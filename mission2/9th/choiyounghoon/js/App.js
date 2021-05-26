import { TodoList } from "./components/TodoList.js"
import { ERROR_MESSAGE } from "./components/ErrorMessage.js"
import { TodoInput } from "./components/TodoInput.js";
import { TodoCount } from "./components/TodoCount.js";


export function App($target){
    if(!new.target) throw new Error(ERROR_MESSAGE.ERROR_FIND);
    this.$target = $target;
    const localToDos = localStorage.getItem("todos") || JSON.stringify([]);
    this.toDos = JSON.parse(localToDos);

    this.$todoList = new TodoList({
        target : $target,
        data: this.toDos,
        onChange : (todos) => {
            this.setState(todos);
        }
    })
    this.$todoInput= new TodoInput({
        target: $target,
        onEnter: (inputText) => {
            const addedData = {
                text: inputText,
                isCompleted: false
            };
            this.$todoInput.setState("");
            this.setState([...this.toDos,addedData]);
        },
        removeAll: (evt) => {
            this.setState([]);
        }
    })
    this.$todoCount = new TodoCount({
        target: $target,
        data: this.toDos
    });
    this.setState = (nextData) => {
        localStorage.setItem("todos",JSON.stringify(nextData));
        this.toDos = nextData;
        this.$todoList.setState(this.toDos);
        this.$todoCount.setState(this.toDos);
    }
}
