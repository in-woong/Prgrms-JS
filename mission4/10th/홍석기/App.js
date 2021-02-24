import { fetchTodo } from "./Api/api.js"
import { TodoList } from "./Component/TodoList.js"
import { EventHandler } from "./EventHandler/EventHandler.js"
import { TodoListRemove } from "./Component/TodoListRemove.js"
import { User } from "./Component/User.js";

export async function App(user) {
    const preExistingData = await fetchTodo(user);
    
    const todoList = new TodoList({
        $target: document.querySelector('#todo-list'),
        data: preExistingData
    });

    const eventHandler = new EventHandler({
        $addBtn: document.querySelector("#add-todo-button"),
        $targetList: document.querySelector("#todo-list"),
        userName: user,
        onRenderUpdate: (updateData) => {
            todoList.setState(updateData);
        }
    });

    const removeAll = new TodoListRemove({
        $appTarget: document.querySelector("#app"),
        userName: user,
        onRenderUpdate: (updateData) => {
            todoList.setState(updateData);
        }
    });

    const allUser = User();
}