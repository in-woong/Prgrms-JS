import api from '../api.js';
import spinner from './Spinner.js';

function UserList({ $target }) {
    this.users = [];
    this.$userList;
    this.$target;
    this.spinner;

    this.dispatchChangePage = e => {
        if (e.target.dataset.user) {
            e.target.dispatchEvent(new CustomEvent('changePage', {
                bubbles: true,
                detail: {
                    pageName: 'todo',
                    username: e.target.dataset.user,
                }
            }));
        }
    }

    this.staticRender = () => {
        this.$target.innerHTML = `
            <h1>Select User</h1>
            <div class="user-list"></div>
        `;
        this.$userList = document.querySelector('.user-list');
        this.$userList.appendChild(spinner());
    }

    this.asyncRender = () => {
        this.$target.innerHTML = `
            <h1>Select User</h1>
            <div class="user-list">
                ${
                    this.users.map(user => `
                        <div class="user-item" data-user="${user}">${user}</div>
                    `).join('')
                }
            </div>
        `;
        this.$userList = document.querySelector('.user-list');
    }

    this.init = async () => {
        this.$target = $target;
        this.staticRender();
        this.users = await api.getUsers();
        this.asyncRender();
        this.$userList.addEventListener('click', this.dispatchChangePage);
    }

    this.init();
}

export default UserList;
