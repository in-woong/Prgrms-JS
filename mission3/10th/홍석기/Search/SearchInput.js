export function SearchInput({$searchInput, onSearchInput}) {
    let timer;
    $searchInput.addEventListener("keyup", (e) => {
        if(timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout( async() => {
            const fetchResponse = await fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`);
            const data = await fetchResponse.json();
            // .json() 함수도 Promise를 반환하므로 await가 들어간다.
            onSearchInput(data);
        }, 300)
    })
}