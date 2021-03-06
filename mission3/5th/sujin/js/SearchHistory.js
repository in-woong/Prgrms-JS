function SearchHistory ($target, inputData = [], { onSearch }) {
    this.$target = $target
    this.inputData = inputData
    this.historyList = []
    const $historyList = document.querySelector('#search-history')

    this.init = () => {
        this.render()
        this.bindEvent()
    }

    this.render = () => {
        // let htmlString = ''

        // htmlString = this.historyList
        //     .map(item => `<li>${item}</li>`)
        //     .join('') 
        
        // this.$target.innerHTML = `<ul>${htmlString}</ul>`
        this.$target.innerHTML = `<ul>${this.historyList
            .map(item => `<li>${item}</li>`)
            .join('')}</ul>`
    }

    this.setState = (nextData) => {
        this.historyList.push(nextData)
        this.inputData = nextData
        this.render()
    }

    this.bindEvent = () => {
        $historyList.addEventListener('click', e => {
            onSearch(e.target.innerText)
        })
    }

    this.init()
}
export default SearchHistory
