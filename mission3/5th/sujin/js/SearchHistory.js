function SearchHistory ($target, inputData, { search }) {
    this.$target = $target
    this.inputData = inputData
    this.historyList = ['피자']
    const $historyList = document.querySelector('#search-history')

    this.render = () => {
        this.$target.innerHTML = '<ul>' + this.historyList
            .map(item => `<li>${item}</li>`)
            .join('') + '</ul>'
        this.bindEvent()
    }

    this.setState = (nextData) => {
        this.historyList.push(nextData)
        this.inputData = nextData
        this.render()
    }

    this.bindEvent = () => {
        $historyList.addEventListener('click', e => {
            this.onClickSearchWord(e)
        })
    }

    this.onClickSearchWord = (e) => {
        search(e.target.innerText)
    }

    this.render()
}
export default SearchHistory
