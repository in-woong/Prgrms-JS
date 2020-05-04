import { fetchUsers } from '../api/usersAPI.js'
import { SELECTOR } from '../shared/constant.js'
import { validateElement } from '../shared/validator.js'

function Users(params) {
    const $targetElement = document.querySelector(params.target)
    const onClickUser = params.onClickUser
    this.userList = null

    validateElement($targetElement)

    document.querySelector(SELECTOR.USERLIST).addEventListener('click', e => {
        onClickUser(e.target.textContent)
    })

    this.render = async () => {
        this.userList = await fetchUsers()
        $targetElement.innerHTML = this.userList.map(userId => `<div>${userId}</div>`).join('')
    }

    this.render()
}

export default Users
