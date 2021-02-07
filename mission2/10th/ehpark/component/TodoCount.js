export default function TodoCount({ $target, data, todoCount }) {
  this.$target = $target
  this.data = data
  this.$todoCount = $target.querySelector(todoCount)

  this.getTotalCount = () => {
    return this.data.length
  }

  this.getCompletedCount = () => {
    return this.data.filter(data => data.isCompleted).length
  }

  this.render = () => {
    this.$todoCount.innerHTML = `<span class="unit-count">총 Todo의 갯수 : ${this.getTotalCount()}</span>
                                 <span class="unit-count">완료처리된 Todo의 갯수 : ${this.getCompletedCount()}</span>`
  }

  this.setState = (nextState) => {
    this.data = nextState
    this.render()
  }

  this.render()
}
 