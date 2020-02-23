function SearchKeyword ($target, { search, addHistory }) {
    $target.addEventListener('keydown', e => {
        const ENTER_KEY = 13
        //디바운스
        let timer = 0
        
        if (timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout( () => {
            search(e.target.value)
        }, 300);

        if (e.keyCode === ENTER_KEY) {
            addHistory(e.target.value)
            e.target.value=''
        }
    })
}
export default SearchKeyword
