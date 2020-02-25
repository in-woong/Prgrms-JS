function SearchKeyword ($target, { onSearch, addHistory }) {
    const ENTER_KEY = 13
    let timer = null
    
    if (timer) {
        clearTimeout(timer);
    }
        
    timer = setTimeout( () => {
        $target.addEventListener('keyup', e => {
            onSearch(e.target.value)
            console.log(e.target.value)
            addHistory(e.target.value)    
        })
        
    }, 1000);


    // $target.addEventListener('keydown', e => {
        //디바운스
        // let timer = 0
        
        // if (timer) {
        //     clearTimeout(timer);
        // }
        
        // timer = setTimeout( () => {
        //     search(e.target.value)
        // }, 300);

        // if (e.keyCode === ENTER_KEY) {
        //     addHistory(e.target.value)
        //     e.target.value=''
        // }
    // })
}
export default SearchKeyword
