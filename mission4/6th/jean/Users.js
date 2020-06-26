export default function Users({ $target, users, onClickUser, $username }) {
  $target.addEventListener("click", (e) => {
    const { user } = e.target.dataset

    if (user) {
      onClickUser(user)
      $username.innerHTML = `${user}의 Todo List`
    }
  })

  this.render = (users) => {
    const htmlString = users
      .map(user => `<button data-user="${user}">${user}</button>`)
      .join('')
    $target.innerHTML = htmlString
  }

}
