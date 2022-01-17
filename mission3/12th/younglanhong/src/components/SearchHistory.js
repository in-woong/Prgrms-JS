import { validateInstance } from '../utils/validation.js'

export default function SearchHistory({ history, storedHistory, onClick }) {
  if(validateInstance(this, SearchHistory)) return

  const $searchHistory = document.querySelector('#search-history')

  this.history = history
  this.storedHistory = storedHistory

  this.setHistory = newHistory => {
    this.history = newHistory 

    this.render()
  }

  this.setStoredHistory = newStoredHistory => {
    this.storedHistory = newStoredHistory

    this.render()
  }

  this.render = () => {
    const historyTemplate = `📌최근 검색어:
      ${this.storedHistory.map(keyword => `<li>${keyword}</li>`).join('')}
    `
    $searchHistory.innerHTML = historyTemplate
  }

  $searchHistory.addEventListener('click', ({ target }) => {
    onClick(target.innerText)
  })

  this.render()
}
