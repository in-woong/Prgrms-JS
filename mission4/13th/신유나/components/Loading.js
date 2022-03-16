import { Core } from './Core.js'

export class Loading extends Core {
  setup() {
    this.$state = this.$props.isLoading

    const element = document.createElement('div')
    element.className = 'loading'

    this.$target.appendChild(element)
    this.$target = element
  }

  template() {
    return this.$state
      ? '<div class="loading__underlay"><p>데이터 불러오는중...</p></div>'
      : ''
  }
}
