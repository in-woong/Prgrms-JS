export default function SearchKeyword({$app, searchData}){
    const $target = document.createElement('input')
    $target.id = 'search-keyword'
    $app.appendChild($target);

    this.$target = $target
    this.searchData = searchData
    
    function fetchData() {
        const url = `https://jjalbot.com/api/jjals?text=${$target.value}`
        return fetch(url).then(function(response) {
          return response.json();
        });
    }
    
    async function logData() {
        const data = await fetchData();
        searchData(data)
    }

    function initEvent(){
        $target.addEventListener('keyup', function(e) {
            if(e.target.value){
                logData()
            }
        })
    }

    initEvent()
  
}
