import { checkDataValidation, getCompletedCount } from './utils.js'

function TodoCount($element, data) {
  if (!$element) throw new Error('Element Invalid!')

  this._count = data?.length || 0
  this._completedCount = getCompletedCount(data) || 0

  this.setState = (nextData = []) => {
    if (!checkDataValidation(nextData)) throw new Error('Data Invalid!')
    this._count = nextData?.length || 0
    this._completedCount = getCompletedCount(nextData) || 0

    this.render()
  }

  this.render = () => {
    $element.innerHTML = `
    총 Todo의 갯수 : ${this._count}
    완료처리된 Todo의 갯수 : ${this._completedCount}
    `
  }
  this.render()
}

export default TodoCount
