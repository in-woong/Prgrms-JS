import { $ } from './utils.js'

export default class TodoRemoveAll {
  constructor($app, clearList) {
    this.app = $app
    this.clearList = clearList
    this.removeAllbtn = $('.removeall-btn')

    const removeAllevent = new CustomEvent('removeAll', {
      detail: {
        text: 'TodoList 가 모두 비워집니다.',
        clearList: this.clearList,
      },
    })

    this.app.addEventListener('removeAll', function (e) {
      if (confirm(e.detail.text)) {
        e.detail.clearList()
      }
    })

    this.removeAllbtn.addEventListener('click', () => {
      this.app.dispatchEvent(removeAllevent)
    })
  }
}
