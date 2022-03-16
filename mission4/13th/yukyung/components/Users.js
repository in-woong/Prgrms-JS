class Users {
  constructor({ $target, initialState, onClick }) {
    this.$target = $target
    this.state = initialState
    this.onClick = onClick

    this.setEvent()
    this.render()
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }

  setEvent() {
    this.$target.addEventListener('click', (e) => {
      const userName = e.target.closest('button').innerText
      this.onClick(userName)
    })
  }

  render() {
    const htmlString = this.state.map(
      (item) => `<li><button>${item}</button></li>`
    )

    this.$target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }
}

export default Users
