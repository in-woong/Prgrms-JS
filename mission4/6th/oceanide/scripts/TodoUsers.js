function TodoUsers(users, $target, onClickUser) {
  if (!(this instanceof TodoUsers)) {
    throw new Error('TodoUsers must be called with new')
  }

  if (!$target) {
    throw new Error('$target must be injected')
  }

  const clickUserHandler = (e) => {
    const user = e.target.innerHTML
    onClickUser(user)
  }

  this.bindEvents = function () {
    this.$target.addEventListener('click', clickUserHandler)
  }

  this.render = function () {
    const htmlString = this.users.map((user) => `<li>${user}</li>`).join('')
    $target.innerHTML = htmlString
  }

  this.setState = function (nextData) {
    this.users = nextData
    this.render()
  }

  this.init = function () {
    this.users = users
    this.$target = $target
    this.bindEvents()
  }

  this.init()
}

export default TodoUsers
