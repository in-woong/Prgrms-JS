export default function SearchHistory(onClickHistory, historyData, $target) {
    this.historyData = historyData
    this.$target = document.querySelector($target)

    this.$target.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('button')) {
            onClickHistory(target.innerText)
        }
    })

    this.render = function () {
        this.$target.innerHTML = `<ul>${[...this.historyData]
            .map(item => `<li><button type="button">${item}</button></li>`)
            .join('')}</ul>`
    }

    this.setState = function (historyData) {
        this.historyData = historyData
        this.render()
    }
}
