import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import { loadTodo, deleteTodo, toggleTodo, addTodo } from "./api.js";

export default class App {
    constructor(title, username) {
        this.element = document.createElement('div');
        this.username = username;

        if (title == null || title == '') {
            throw new Error('Input the title!');
        }
        this.title = title;
        this.element.setAttribute('id', this.title);
        
        this.element.innerHTML = `<b>${this.title}</b>`;
        document.body.appendChild(this.element);

        this.setData()
        .then(() => {
            this.todoList = new TodoList({
                data: this.data, 
                element: this.element,
                onToggleIsCompleted: (targetListId) => {
                    this.AppToggleTodo(this.username, targetListId)
                    .then(()=> {
                        this.setState();
                    })
                },
                onDeleteTodo: (targetButtonId) => {
                    this.AppDeleteTodo(this.username, targetButtonId)
                    .then(()=> {
                        this.setState();
                    })
                }
            });
    
            this.todoInput = new TodoInput({
                data: this.data, 
                element: this.element, 
                onInputTodo: (addInput) => {
                    if (addInput.value !== '') {
                        this.AppAddTodo(this.username, addInput.value)
                        .then(()=> {
                            this.setState();
                        })
                    }
                }
            });
    
            this.todoCount = new TodoCount(this.data, this.element);
            }
        )
    }

    async setData() {
        const loadedData = await this.AppLoadTodo(this.username);
            console.log(loadedData)
        this.dataValidation(loadedData);
        this.data = loadedData;
            console.log(this.data)
    }

    async setState() {
        await this.setData();
        console.log(this.data);
        this.render();
    }

    render() {
        this.todoList.setState(this.data);
        this.todoCount.setState(this.data);
    }

    async dataValidation(data) {
        if (data == null) {
            throw new Error('Input the data!');
        } 
        
        if (!Array.isArray(data)) {
            console.log(data)
            throw new Error('Data type is not an Array!');
        } 

        for (const obj of data) {
            if (!(obj.hasOwnProperty('_id') && obj.hasOwnProperty('content') && obj.hasOwnProperty('isCompleted'))) {
                throw new Error('This data has some missing properties!');
            }
        }
    }

    async AppLoadTodo(username) {
        return await loadTodo(username);
    }

    async AppDeleteTodo(username, id) {
        return await deleteTodo(username, id);
    }

    async AppToggleTodo(username, id) {
        return await toggleTodo(username, id);
    }

    async AppAddTodo(username, text) {
        return await addTodo(username, text);
    }
}
