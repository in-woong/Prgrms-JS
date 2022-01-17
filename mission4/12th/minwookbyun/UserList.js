export default function UserList({$target, initialState, onSelectUser}) {
    this.$target = $target,
    this.state = initialState;
   
    this.$userList = document.createElement('ul');
    this.$userList.classList.add('list_users'); //classList 와 className의 차이 
    this.$target.appendChild(this.$userList);

    this.onSelectUser = onSelectUser;

    this.$userList.addEventListener('click', (e) => {
        const selectedUserName = e.target.closest('li').innerHTML;
        this.onSelectUser(selectedUserName)  
        this.render()
    })
    this.setState = function (nextState) {
        this.state = nextState
        this.render()
    }
    this.render = () => {
        const htmlSting = this.state.userList.map((username) => `
        <li>${username}</li>`).join('')
        this.$userList.innerHTML = htmlSting
    }
    this.render();
}
