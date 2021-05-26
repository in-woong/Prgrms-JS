export default function SearchResult({$app, data}){
    const $target = document.createElement('div')
    $target.id = 'search-result'
    $app.appendChild($target);

    this.$target = $target
    this.data = data
    

    this.setState = (nextData) => {
        this.data = nextData
        this.render()
    }

    this.render = () => {
        if(this.data){
            const htmlString = `${this.data
                .map(d => `<img src="${d.imageUrl}">`)
                .join('')}`
            $target.innerHTML = htmlString
        }
    }

    this.render()
}