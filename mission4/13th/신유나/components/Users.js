import { getUsers } from '../api/index.js'
import { Core } from './Core.js'

export class Users extends Core {
  setup() {
    const container = document.createElement('div')
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul')

    container.dataset.component = 'todo-users'
    h2.innerText = '유저 리스트'
    ul.className = 'users'

    container.appendChild(h2)
    container.appendChild(ul)

    this.$target.appendChild(container)
    this.$target = ul

    this.fetchUsers()
  }

  async fetchUsers() {
    try {
      this.setState({ ...this.$state, isLoading: true })
      const users = await getUsers()
      this.setState({ users, isLoading: false })
    } catch (error) {
      this.setState({ ...this.$state, isLoading: false })
      console.error('🚀 ~ fetchUsers ~ error', error)
    }
  }

  template() {
    const { users, isLoading } = this.$state

    return isLoading
      ? `<li class="user-loading">유저 불러오는중...</li>`
      : users
          ?.map(
            (user) => `<li class="users__item" data-user="${user}">${user}</li>`
          )
          .join('') ?? `<li>유저가 없습니다.</li>`
  }

  setEvent() {
    const { fetchSelectUserTodo } = this.$props

    this.addEvent('click', '.users__item', ({ target }) => {
      const userName = target.dataset.user

      if (userName) {
        fetchSelectUserTodo(userName)
      }
    })
  }
}
