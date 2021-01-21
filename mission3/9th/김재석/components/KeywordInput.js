function KeywordInput($app, inputKeyword) {
    const target = document.createElement("input")
    target.className = "search-keyword"
    
    this.target = target
    $app.appendChild(this.target)
    this.inputKeyword = inputKeyword

    let timer
    this.target.addEventListener('keyup', async (e)=> {
            if(timer)
                clearTimeout(timer)
            timer = setTimeout(() => {
                if(e.target.value)
                this.inputKeyword(e.target.value, true)   
            },1000)
                 
    })
    
}

export default KeywordInput