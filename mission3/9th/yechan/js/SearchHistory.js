export default class SearchHistory{
    constructor({$target,initialState,onHistorySearch,onHistoryDel}){
        this.state = initialState;
        document.querySelector("#search-history")
        .addEventListener("click",event=>{
            if(event.target.tagName === "LI"){
                onHistorySearch(event.target.id)
            }
            if(event.target.tagName === "BUTTON"){
                onHistoryDel(event.target.id)
            }
            
        })
        this.render()
    }
    setState = (nextState) =>{
        this.state = nextState
        this.render()
    }
    render(){
        let index = 0;
        document.querySelector("#search-history").innerHTML=
        this.state.map(data=>{
            const button = `<button className="history-button" type="button" id="${index}"> X </button>`
            const content = `<li className="history-li" id="${index}">${data}\t${button}</li>`
            index++
            return content
        }).join('')
        document.querySelector("#search-history").innerHTML += `<button className=`
    }
}
