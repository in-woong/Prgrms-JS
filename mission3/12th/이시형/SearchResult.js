export default function SearchResult ({$target, initialState}) {
    this.state = initialState
    this.$target = document.querySelector($target)
    this.render = ()=>{
        this.$target.innerHTML = `${this.state.map((data)=>{
            if(!data) return `<p>검색 결과과 없습니다.</p>`
            return `<img src="${data.imageUrl}">`}
        ).join('')}`
    }
    
    this.setState = (nextState)=>{
        this.state = nextState
        this.render()
    }
    
    this.render()
}
