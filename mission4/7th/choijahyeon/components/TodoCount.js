export default function TodoCount({ target, totalCount, completeCount }) {
  this.$target = target
  this.totalCount = totalCount
  this.completeCount = completeCount
  this.$paragraph = document.createElement('p')
  this.render = () => {
    this.$paragraph.innerHTML = `<p>${this.completeCount} / ${this.totalCount}</p>`
  }
  this.setState = ({ totalCount, completeCount }) => {
    this.totalCount = totalCount
    this.completeCount = completeCount
    this.render()
  }
  this.render()
  this.$target.appendChild(this.$paragraph)
}
