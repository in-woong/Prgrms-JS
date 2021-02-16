import { $ } from '../util/index.js'

function SearchHistory({ target, onChange }) {
    this.init = () => {
        this.$element = $(target)
        this.keywordHistory = []

        this.bindEvents()
        this.render()
    }

    this.bindEvents = () => {
        this.$element.addEventListener('click', (e) => {
            if (e.target.className === 'keyword_item') {
                onChange(e.target.innerText)
            }
        })
    }

    this.render = () => {
        this.$element.innerHTML = `<ul>${this.keywordHistory
            .map(keyword => `<li class="keyword_item">${keyword}</li>`)
            .join('')}</ul>`
    }

    this.setState = value => {
        const result = this.keywordHistory.find(keyword => keyword === value)
    
        if (!result) {
          this.keywordHistory = [...this.keywordHistory, value]
          this.render()
        }
      }

    this.init()
}

export default SearchHistory
