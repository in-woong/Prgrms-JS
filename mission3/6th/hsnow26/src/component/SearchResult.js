export default function SearchResult(data, target){
    
    this.$target = document.querySelector(target)
    this.data = data

    this.render = _ => {
        const htmlString = this.data.map(d => `<img src="${d.imageUrl}">`).join('')
        this.$target.innerHTML = htmlString
    }

    this.setState = nextData => {
        this.data = nextData
        this.render()
    }  
}