export default function SearchHistory(target, histories, searchKeyword) {
  this.$target = target
  this.histories = histories
  this.searchKeyword = searchKeyword

  this.setState = (newHistories) => {
    this.histories = newHistories
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = ''
    const $historyContainer = document.createElement('div')
    $historyContainer.addEventListener('click', (event) => {
      if (!event.target) {
        return
      }

      const { className, id } = event.target
      if (className === 'history-item') {
        this.searchKeyword(id, false)
      }
    })

    for (const [index, history] of this.histories.entries()) {
      const $history = document.createElement('div')
      $history.id = history
      $history.className = 'history-item'
      $history.innerHTML = `${index + 1} :: ${history}`
      $historyContainer.appendChild($history)
    }

    this.$target.appendChild($historyContainer)
  }

  this.render()
}
