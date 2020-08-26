import { createUniqueId } from '../lib/utils.js';

class Users {
    constructor({
        elementId,
        userList,
        currentUser,
        fetchUserData,
    }) {
        this.userState = {
            userList,
            currentUser,
        }
        this.fetchUserData = fetchUserData;

        this.$users = document.getElementById(elementId);
        this.$currentUserList = this.$users.querySelector('h1');
        this.$programmersList = this.$users.querySelector('h2');
        this.$delayInput = document.createElement('input');
        this.$delayInput.type = "text";
        this.$delayInput.placeholder = "Type API delay time(ms)";
        this.$ulTag = document.createElement('ul');

        this.$users.insertBefore(this.$delayInput, this.$programmersList);
        this.$users.appendChild(this.$ulTag);

        this.render();
        this.bindEventListener();
    }
    
    render() {
        this.$currentUserList.textContent = `${this.userState.currentUser}'s TodoList`;
        this.$ulTag.innerHTML = `
            ${this.userState.userList.map((user, idx) => {
                return `<li data-id=${createUniqueId()}${idx}>${user}</li>`
            }).join("")}
        `;
    }

    bindEventListener() {
        this.$ulTag.addEventListener('click', evt => {
            if(evt.target.tagName === 'LI') {
                this.fetchUserData(evt.target.textContent);
            }
        });
    }

    setState(currentUser) {
        this.userState.currentUser = currentUser;
        this.render();
    }

    get delay() {
        return this.$delayInput.value;
    }
}

export default Users;
