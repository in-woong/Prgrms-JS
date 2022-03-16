export default function Users(params) {
  this.target = params.app
  this.data = params.data
  this.name = params.name
  this.onClick = params.onClick
  this.users = document.createElement('div')
  this.target.appendChild(this.users)

  this.users.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
      const name = e.target.closest('li').dataset.id
      this.onClick(name)
    }
  })

  this.render = () => {
    this.users.innerHTML = `
    현재 이름은 ${this.name} 입니다.
    <ul>${this.data
      .map((user) => `<li data-id="${user}">${user}</li>`)
      .join('')}
      </ul>`
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.setName = (nextData) => {
    this.name = nextData
    this.render()
  }

  this.render()
}
