export class UserList {
    constructor({ $target, userList, onClickUser }) { 
        this.$target = $target;
        this.$userList = $target.querySelector('.user--list');
        this.userList = userList;
        this.onClickUser = onClickUser;
        this.registerUserClickEvent();
    }

    registerUserClickEvent() {
        this.$target.addEventListener('click', async ({target}) => {
            const user = target.innerText;

            await this.onClickUser({ user });
        });
    }

    generateHTML() {
        return `
        <ul class="user--list">
            ${this.userList.map(name => (`
                    <li class="user--list">
                        ${name}
                    </li>`)).join('')}
        </ul>
        `
    }

    render() {
        this.$target.innerHTML = this.generateHTML();
    }
}

