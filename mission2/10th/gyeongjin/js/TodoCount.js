export class TodoCount {
  constructor({ $app, initialState }) {
    const $todoInfoBox = document.createElement('div')
    // review4 : completedItemTotal 별도의 생성 없이 처리
    this.state = initialState
    this.$todoInfoBox = $todoInfoBox

    $app.append($todoInfoBox)
    this.render()
  }

  setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  render = () => {
    this.$todoInfoBox.innerHTML = `<strong class="info-title">Todo Total : </strong>${
      this.state.length
    } 개 <strong class="info-title">Todo Completed : </strong> ${
      this.state.filter((todoItem) => todoItem.isCompleted).length
    } 개`
  }
}
