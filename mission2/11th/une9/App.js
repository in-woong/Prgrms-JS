import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import { fetchTodoAPI } from "./api.js";

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

        this.init();
    }

    async init() {
        await this.setData()

        this.todoList = new TodoList({
            data: this.data, 
            element: this.element,
            onToggleIsCompleted: async (targetListId) => {
                this.loadingUI(true);
                await this.fetchAPI('toggle', this.username, targetListId, null);
                await this.setState();
                this.loadingUI(false);
            },
            onDeleteTodo: async (targetButtonId) => {
                await this.fetchAPI('delete', this.username, targetButtonId, null);
                await this.setState();
            }
        });

        this.todoInput = new TodoInput({
            data: this.data, 
            element: this.element, 
            onInputTodo: async (addInput) => {
                if (addInput.value !== '') {
                    this.loadingUI(true);
                    await this.fetchAPI('add', this.username, null, addInput.value);
                    await this.setState();
                    this.loadingUI(false);
                }
            }
        });

        this.todoCount = new TodoCount(this.data, this.element);
    }

    async setData() {
        this.loadingUI(true);

        const loadedData = await this.fetchAPI('load', this.username, null, null);
        this.dataValidation(loadedData);
        this.data = loadedData;

        this.loadingUI(false);
    }

    async setState() {
        await this.setData();
        this.render();
    }

    render() {
        this.todoList.setState(this.data);
        this.todoCount.setState(this.data);
    }

    dataValidation(data) {
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

    async fetchAPI(work, username, id, text) {
        return await fetchTodoAPI(work, username, id, text);
    }

    loadingUI(bool) {
        if (bool) {
            if(!this.loadingElement) {
                this.element.innerHTML += '<div class="loading">로딩중입니다...</div>';
                this.loadingElement = this.element.querySelector('.loading');
            }
        } else {
            if(this.loadingElement) {
                this.loadingElement.remove();
                this.loadingElement = null;
            }
        }
    }
}
