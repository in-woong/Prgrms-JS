export default function TodoCount({ $target, initialState }) {
  this.state = initialState
  this.$target = $target

  const $count = document.createElement('div')
  this.$target.appendChild($count)

  this.render = () => {
    console.log('Counter Render')
    const totalCount = this.state.length;
    const completedCount = this.state.filter(item=>item.isCompleted).length;
    $count.innerText = `Total: ${totalCount} Completed: ${completedCount}`
  }
  this.setState = (newData) => {
    console.log('Counter SetState')
    this.state = newData
    this.render()
  }
  this.render()
}
