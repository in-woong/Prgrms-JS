import { showErrorMessage } from '../util/validator.js'

export default function TodoCount(todoCountData) {
  this.$todoCount = document.querySelector(todoCountData.selector)
  this.data = todoCountData.data

  this.render = () => {
    this.$todoCount.innerHTML = `
      완료: ${this.data.completedCount}
      /${this.data.totalCount}
    `
  }

  this.setState = nextData => {
    this.data = nextData
    this.render()
  }

  this.render()
}
