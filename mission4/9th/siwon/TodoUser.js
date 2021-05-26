export default function TodoUser(users, $userList, onAppUserState) {
    this.users = users
    this.$userList = $userList;

    this.render = () => {
        const userListHtml = this.users
            .map((user, index) => `<li data-index"${index} class="user-item">${user}</li>`)
            .join('');
        
        this.$userList.innerHTML = `<ul>${userListHtml}</ul>`;
    }

    this.$userList.addEventListener('click', (e) => {
        // todo LI 요소를 클릭했을 경우 toggleTodo
        if (e.target && e.target.nodeName === 'LI') {
            const selectedUser = e.target.innerHTML;
            onAppUserState(selectedUser);
        }
    })

    this.render();
}
