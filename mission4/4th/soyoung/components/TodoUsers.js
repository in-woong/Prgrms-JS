export default function TodoUsers({ $target, onClick }) {
  this.$target = $target
  this.userList = []

  this.onClick = onClick
  this.$target.addEventListener('click', e => {
    const username = e.target.closest('li').innerText
    this.onClick(username)
  })

  this.setState = newData => {
    if (!Array.isArray(newData)) throw new Error('Data is not a Array')
    this.userList = newData
    this.render()
  }
  this.render = () => {
    this.$target.innerHTML = this.userList
      .map(item => `<li class="user__item">${item}</li>`)
      .join('')
  }
}
