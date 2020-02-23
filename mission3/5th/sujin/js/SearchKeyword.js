function SearchKeyword ($target, { fetchData }) {
    $target.addEventListener('keyup', e => {
        //디바운스
        let timer = 0
        if (timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout( () => {
            fetchData(e.target.value)
        }, 1000);
        // fetchData(e.target.value)
    })
}
export default SearchKeyword
