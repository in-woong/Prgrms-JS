export default function CurrentName({ $app, name }) {
  this.name = name
  this.$currentName = document.createElement('p')
  $app.appendChild(this.$currentName)

  this.setState = (name) => {
    this.name = name
    this.render()
  }

  this.render = () => {
    this.$currentName.innerHTML = `현재 검색 이름 : ${this.name}`
  }

  this.render()
}
