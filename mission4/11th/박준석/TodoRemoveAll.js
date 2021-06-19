export default class TodoRemoveAll {
  constructor(params) {
    this.targetButton = params.targetButton
    this.onRemoveAll = params.onRemoveAll

    this.targetButton.addEventListener('click', () => this.removeAllEventHandler())
  }

  removeAllEventHandler() {
    this.onRemoveAll()
  }
}
