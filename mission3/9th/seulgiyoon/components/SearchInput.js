export default class SearchInput {
  constructor({ target, event }) {
    this.target = document.querySelector(target)
    this.event = event
    this.addKeyupEvent()
    this.preventSubmitEvent()
  }

  addKeyupEvent = () => {
    this.target.addEventListener('keyup', (e) => {
      const keyword = e.target.value.trim()
      if (keyword !== '') {
        this.event(keyword)
        e.target.value = keyword
      }
    })
  }

  preventSubmitEvent = () => {
    this.target.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
      }
    })
  }
}
