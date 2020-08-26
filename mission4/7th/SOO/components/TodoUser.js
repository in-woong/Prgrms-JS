import {
    usersApi
} from '../utils/api.js'

function TodoUser({
    currentUser,
    onUsers
}) {
    const usersUL = document.getElementById('user-list')
    this.user = ''
    this.currentUser = currentUser
    this.render = () => {
        usersUL.innerHTML = this.user
            .map(user => user === this.currentUser ?
                `<li data-id=${user} id="currentUser"> ${user}</li>` :
                `<li data-id=${user}> ${user}</li>`)
            .join('')
    }

    this.setState = (nextUser) => {
        this.user = nextUser
        this.render()
    }

    this.fetchUsers = async () => {
        const users = await usersApi()
        this.setState(users)
    }

    this.bindingEvent = () => {
        usersUL.addEventListener('click', (e) => {
            this.currentUser = e.target.dataset.id
            onUsers(this.currentUser)
            this.setState(this.user)
        })
    }

    this.fetchUsers()
    this.bindingEvent()

}

export default TodoUser;
