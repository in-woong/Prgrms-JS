export default function TodoCount($target, data, todoCountSelector) {
  this.$target = $target
  this.data = data
  this.$todoCount = $target.querySelector(todoCountSelector)

  this.getTotalCount = () => {
    return this.data.length
  }

  this.getCompletedCount = () => {
    let completedInit = 0
    this.data.forEach(item => {
      if(item.isCompleted) {
        completedInit += 1
      }
    })
    return completedInit
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