export default function searchResult({
    jjals,
    target
}) {
    this.jjals = jjals
    this.target = target
    const resultUL = document.getElementById('search-result');

    this.render = () => {
        resultUL.innerHTML = `${this.jjals
            .map(d => `<img src="${d.imageUrl}" alt="${d.tags}">`)
            .join('')}`
    }

    this.setState = (nextData) => {
        if (!nextData) {
            throw new Error('검색어를 입력해야함')
        }
        try {
            this.jjals = nextData
            this.render()
        } catch (err) {
            console.log(err)
        }
    }

    this.render();
}
