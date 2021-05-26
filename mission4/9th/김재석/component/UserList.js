export default function UserList ($app, changeUser) {
    const target = document.createElement("div")
    target.className = "user-list"

    $app.appendChild(target)
    this.target = target
    this.changeUser = changeUser
    this.users = []

    this.render = () => {
        const user_list = this.users.map(user =>`<div>${user}</div>`).join('')
        this.target.innerHTML = user_list
    }

    this.setUsers = (newUsers) => {
        this.users = newUsers
        this.render()
    }

    this.target.addEventListener("click", e => {
        if(e.target.parentNode.className === "user-list"){
            changeUser(e.target.textContent)
        }
    })

}