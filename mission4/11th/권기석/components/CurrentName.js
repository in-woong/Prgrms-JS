export default function CurrentName({ $app, name }) {
  this.name = name
  this.$currentName = document.createElement('span')
  this.$currentName.innerHTML = this.name
  $app.appendChild(this.$currentName)

  this.setState = (name) => {
    this.name = name
    this.render()
  }

  this.render = () => {
    this.$currentName.innerHTML = this.name
  }
}
