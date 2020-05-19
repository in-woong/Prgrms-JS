export default function SearchResult(data, $target) {
    this.data = data
    this.$target = document.querySelector($target)

    this.render = function () {
        const htmlString = `${this.data.length === 0 ?
            '검색 결과가 존재하지 않습니다!' :
            `${this.data.map(d => `<img src="${d.imageUrl}" alt="${d.title}">`).join('')}`}`

        this.$target.innerHTML = htmlString
    }

    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }
}
