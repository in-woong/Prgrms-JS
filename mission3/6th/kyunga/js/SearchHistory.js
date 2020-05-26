export default function SearchHistory({ onClickHistory, histories, $target }) {
    this.histories = histories
    this.$target = $target

    this.$target.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('button')) {
            onClickHistory(target.innerText)
        }
    })

    this.render = function () {
        this.$target.innerHTML = `<ul>${[...this.histories]
            .map(item => `<li><button type="button">${item}</button></li>`)
            .join('')}</ul>`
    }

    this.setState = function (nextData) {
        this.histories = nextData
        this.render()
    }
}
