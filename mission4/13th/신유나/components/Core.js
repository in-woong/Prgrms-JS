import { vaildateTodos, validateTarget } from '../utils/validate.js'

export class Core {
  $target
  $state
  $props
  constructor($target, $props) {
    this.$target = validateTarget($target)
    this.$props = $props

    this.setup()
    this.render()
    this.setEvent()
  }

  setup() {}

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)]
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector)

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false
      callback(event)
    })
  }

  setState(newState) {
    this.$state = newState
    this.render()
  }

  template() {
    return ''
  }

  componentDidMount() {
    // 컴포넌트가 렌더링 된 후의 액션을 실행시켜줄 메소드
  }

  render() {
    this.$target.innerHTML = this.template()
    this.componentDidMount()
  }
}
