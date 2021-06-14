
function SearchInput({onFetchData}){
    
    document
        .querySelector('#search-keyword')
        .addEventListener('keyup', function(e) {
            fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}/`)
            .then(x => x.json())
            .then(data => {
                console.log(JSON.stringify(data, null, 2))
                const htmlString = `${data
                .map(d => `<img src="${d.imageUrl}">`)
                .join('')}`
                onFetchData(htmlString);
                
            })
        })

}
export default SearchInput;
  