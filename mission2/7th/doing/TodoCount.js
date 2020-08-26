import { validateTag } from './util.js'

function TodoCount(tag, count) {
  this.$count = validateTag(document.querySelector(tag))
  this.count = count
  if (typeof count !== 'number') {
    throw new Error('TodoCount의 count 인자가 숫자가 아닙니다.')
  }

  this.setState = (count) => {
    this.count = count
    this.render()
  }

  this.render = () => {
    this.$count.innerHTML = this.count
  }
}

export default TodoCount
