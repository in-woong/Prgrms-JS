function SearchHistory({$target,searchData}){
    this.state = [] 
    this.$ul = document.createElement("ul")
    this.$ul.addEventListener("click",(e)=>{
        console.log(e.target.innerText)
        searchData(e.target.innerText)
    })
    
    $target.insertBefore(this.$ul,document.querySelector("#search-result"))


    this.setState = (nextState) =>{
        this.state = nextState
        this.render()
    }

    this.render = () =>{
        this.$ul.innerHTML = this.state.map((element)=>{
            return `<li>${element}</li>`
        }).join("")
    }

    this.render()

}   
