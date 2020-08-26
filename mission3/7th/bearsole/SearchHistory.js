function SearchHistory(){
    let keywordList = [];

    this.onAddKeyword = function(data){
        keywordList.push(data);
        console.log(keywordList);
        document.querySelector('#search-history').innerHTML = keywordList.map((keyword) =>`<li>${keyword}</li>`).join('');
    }
}