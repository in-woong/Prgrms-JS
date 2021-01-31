export class TodoCount {
  constructor({ $app, initialState }) {
    const $todoInfoBox = document.createElement('div')
    let completedItemTotal = 0
    this.completedItemTotal = completedItemTotal
    this.state = initialState
    this.$todoInfoBox = $todoInfoBox

    $app.append($todoInfoBox)
    this.render()
  }

  setState = ( nextState ) => {
    this.state = nextState
    this.render()
  }

  render = () => {
    this.completedItemTotal = 0
    this.state.forEach((completedItem) => {
      if (completedItem.isCompleted) {
        this.completedItemTotal++
      }
    })

    this.$todoInfoBox.innerHTML = `<strong class="info-title">Todo Total : </strong>${this.state.length} 개 <strong class="info-title">Todo Completed : </strong> ${this.completedItemTotal} 개`
  }
}
