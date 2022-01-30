export default function TodoCount({ $target, initialData }) {
  this.state = initialData
  this.$count = document.createElement('div')
  $target.appendChild(this.$count)

  this.render = () => {
    console.log('ToDoCount Render')
    const { totalCount, completedCount } = this.state
    this.$count.innerHTML = `
      <span>TotalCount : ${totalCount.length}</span>
      <span>CompletedCount : ${completedCount}</span>
    `
  }

  this.setState = (newData) => {
    console.log('ToDoCount SetState')
    this.state = newData
    this.render()
  }

  this.render()
}
