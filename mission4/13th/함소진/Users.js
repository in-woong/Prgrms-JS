import { validateArray } from './validator.js'

export default function Users({ $target, usersData, onClickUser }) {
  this.$usersList = document.createElement('ul')
  this.data = usersData

  $target.append(this.$usersList)

  this.setState = (nextData) => {
    this.data = validateArray(nextData)
    this.render()
  }

  this.render = () => {
    const htmlString = this.data
      .map((user) => {
        return `<li>${user}</li>`
      })
      .join('')
    this.$usersList.innerHTML = htmlString
  }
  this.$usersList.addEventListener('click', function (e) {
    if (e.target.nodeName == 'UL') return
    onClickUser(e.target.innerText)
  })

  this.render()
}
