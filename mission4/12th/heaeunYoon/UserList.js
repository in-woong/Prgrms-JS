export default function UserList({ $app, initialState, onClick }) {
  this.state = initialState

  this.$ul = document.createElement('div')

  $app.appendChild(this.$ul)

  this.render = async () => {
    const userListHtmlString = this.state
      .map(
        (userName) => `
      <li>
        <button>${userName}</button>
      </li>
    `
      )
      .join('')
    const empltyListHtmlString = `<p>유저 없음</p>`

    const htmlString =
      this.state.length === 0
        ? empltyListHtmlString
        : `<ul>${userListHtmlString}</ul>`

    this.$ul.innerHTML = `
      <h2>유저 리스트</h2>
      ${htmlString}
    `
  }

  this.setState = (nextState) => {
    this.state = nextState

    this.render()
  }

  this.setEvent = () => {
    this.$ul.addEventListener('click', (e) => {
      const userName = e.target.closest('button')

      if (userName) {
        onClick({ userName: userName.textContent })
      }
    })
  }

  this.render()
  this.setEvent()
}
