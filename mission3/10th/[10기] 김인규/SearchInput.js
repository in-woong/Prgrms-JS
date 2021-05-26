function SearchInput (searchData,saveHistory) {
    const $target = document.querySelector('#search-keyword');
    this.$target = $target
    let timer
    
    this.$target.addEventListener('keyup',(e)=>{        
        if(timer){
            clearTimeout(timer);
        }
        
        timer = setTimeout(function(){
            if(e.target.value !==""){
                searchData(e.target.value)
                saveHistory(e.target.value)
                //e.target.value = ""
            }
        },1000)
    })
}
