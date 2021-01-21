export default class SearchResult{
    setState = (searchKeyword) =>{
        this.state = searchKeyword
        this.render()
    }
    render = async() =>{
        try{
            const searchData =
            await fetch(`https://jjalbot.com/api/jjals?text=${this.state}`)
            if(searchData.ok){
                const jsonData = await searchData.json()
                const SearchResult = await `${jsonData
                    .map(img=>`<img src="${img.imageUrl}">`)
                    .join('')}`
                document.querySelector("#search-result").innerHTML = SearchResult
            }
        }catch(event){
            console.log(event.message)
        }
    }
}
