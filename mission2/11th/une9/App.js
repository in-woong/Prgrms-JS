import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import { requestTodoAPI } from "./api.js";

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
                    this.$requestTodoAPI('toggle', this.username, targetListId, null)
                    .then(()=> {
                        this.setState();
                    })
                },
                onDeleteTodo: (targetButtonId) => {
                    this.$requestTodoAPI('delete', this.username, targetButtonId, null)
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
                        this.$requestTodoAPI('add', this.username, null, addInput.value)
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
        const loadedData = await this.$requestTodoAPI('load', this.username, null, null);
        this.dataValidation(loadedData);
        this.data = loadedData;
    }

    async setState() {
        await this.setData();
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
            throw new Error('Data type is not an Array!');
        } 

        for (const obj of data) {
            if (!(obj.hasOwnProperty('_id') && obj.hasOwnProperty('content') && obj.hasOwnProperty('isCompleted'))) {
                throw new Error('This data has some missing properties!');
            }
        }
    }

    async $requestTodoAPI(work, username, id, text) {
        return await requestTodoAPI(work, username, id, text);
    }
}
