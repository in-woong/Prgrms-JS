function SearchHistory(target, searchedKeywords) {
    this.$target = document.querySelector(target)
    this.searchedKeywords = searchedKeywords

    this.render = () => {
        const htmlString = `${[...this.searchedKeywords]
            .map(searchedKeyword => `<li>${searchedKeyword}</li>`)
            .join('')}`
            this.$target.innerHTML = htmlString
    }

    this.setState = (queryString) => {
        this.searchedKeywords.add(queryString)
        this.render()
    } 
}

export default SearchHistory
