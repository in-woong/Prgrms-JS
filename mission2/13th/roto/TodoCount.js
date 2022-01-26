import { dispatchRemoveAllEvent } from './customEvent.js'

export default function TodoCount({ $target, initialState }) {
  this.$todoCount = document.createElement('div')
  $target.appendChild(this.$todoCount)
  this.state = initialState

  this.render = () => {
    const { totalCount, completedCount } = this.state

    this.$todoCount.innerHTML = `
      <div>
        <span>Total: ${totalCount}</span>
        </span>Completed: ${completedCount}</span>
        <button>remove all</button>
      </div>`
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.$todoCount.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      dispatchRemoveAllEvent()
    }
  })

  this.render()
}
