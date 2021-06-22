class UserSelect {
  constructor({ $app, initialState, onChange }) {
    this.state = initialState

    this.$target = document.createElement('section')
    this.$target.className = 'user-select'

    this.$target.addEventListener('change', onChange)

    this._render()
    $app.appendChild(this.$target)
  }

  setState(nextState) {
    this.state = nextState
    this._render()
  }

  _render() {
    this.$target.innerHTML = `
      <h2>유저 선택</h2>
      <label>
        <span>유저를 선택하세요</span>
        <select>
          ${this.state.users
            .map(
              (username) => `
                <option value="${username}" ${username === this.state.currentUser ? 'selected' : ''}>${username}</option>
              `
            )
            .join('')}
        </select>
      </label>
    `
  }
}

export default UserSelect
