import { $ } from '../util/index.js'

function SearchResult(data, target) {
    console.log("resultJS")
    this.init = () => {
        this.$element = $(target)
        this.data = data || []

        this.render()
    }

    this.setState = data => {
        this.data = data
        this.render()
    }

    this.render = () => {
        this.$element.innerHTML = this.data.map(data => {
            return `<img src="${data.imageUrl}"></img>`
        }).join('')
    }

    this.init()
}

export default SearchResult
