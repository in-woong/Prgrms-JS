function SearchResult($target, data) {
    ValidateTarget($target)
    ValidateData(data)

    this.data = data
    this.target = $target

    this.setState = function (nextData) {
        ValidateData(nextData)

        this.data = nextData
        this.render()
    }
    this.render = function () {
        const htmlString = `${this.data
            .map(d => `<img src="${d.imageUrl}">`)
            .join('')}`
        this.target.innerHTML = htmlString
    }
}
