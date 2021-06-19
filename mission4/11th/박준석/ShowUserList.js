import { TodoAPI } from "./TodoAPI.js"
import { $ } from "./util.js"
import TodoApp from "./TodoApp.js"

export default class ShowUserList{
    constructor(){
        this.target = $('#user-list')
        this.userList = []
        this.todoApp;

        this.target.addEventListener('click', ({target}) => this.userClickEventHandler(target))
        this.setState();
    }

    userClickEventHandler(target){
        const userID = target.closest('li').dataset.username
        if (target.tagName === 'SPAN'){
            $('#users-todo-list').style.display = "block"
            this.todoApp = new TodoApp(userID)
            this.target.style.display = 'none'
        }
    }

    async setState(){
        this.userList = await TodoAPI.getUserList();
        this.render();
    }

    render(){
        const userListHtmlString = this.userList.map((username) => {
            return `<li data-username="${username}"><span class="user-name">${username}</span></li>`;
        })
        this.target.innerHTML = `<ul>${userListHtmlString.join('')}</ul>`;
    }
}