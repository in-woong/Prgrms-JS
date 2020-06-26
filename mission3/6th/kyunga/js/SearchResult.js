export default function SearchResult({ images, $target }) {
    this.images = images
    this.$target = $target

    this.render = function () {
        const htmlString = this.images.length === 0 ?
            '검색 결과가 존재하지 않습니다!' :
            this.images.map(d => `<img src=${d.imageUrl} alt=${d.title}>`).join('')

        this.$target.innerHTML = htmlString
    }

    this.setState = function (nextData) {
        this.images = nextData;
        this.render();
    }
}
