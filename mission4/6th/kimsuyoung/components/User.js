function User({ $user, user }) {
  this.render = () => {
    $user.innerHTML = `${user}님의`
  }

  this.setState = (nextData) => {
    user = nextData
    this.render()
  }

  this.render()
}

export default User
