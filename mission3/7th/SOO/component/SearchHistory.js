export default function SearchHistory({
    keywords,
    onClickHistory
}) {
    this.keywords = keywords
    const historyUL = document.getElementById('search-history');

    this.render = () => {
        historyUL.innerHTML = this.keywords.map((word) =>
            `<li class='hisotryLI'data-id='${word}'>${word}</li>`
        ).join('')
    }

    this.checkOverlap = (keyword) => {
        this.keywords = this.keywords.includes(keyword) ?
            this.keywords :
            this.keywords.concat(keyword)
    }

    this.setState = (nextKeyword) => {
        this.checkOverlap(nextKeyword)
        this.render()
    }

    this.render()

    historyUL.addEventListener('click', (e) => {
        const clickedHistory = e.target.dataset.id
        onClickHistory(clickedHistory)
    })
}
