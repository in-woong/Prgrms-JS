;(function() {
  const searchData = new SearchResult('','search-result');
  const searchHistory = new SearchHistory();

  const $searchKeyword = document.querySelector('#search-keyword');
  let timer;

  $searchKeyword.addEventListener('keyup', function(e) {
      if(timer){
        clearTimeout(timer);
      }
      timer = setTimeout(function(){
        if(e.target.value === ""){
          alert('키워드를 입력해주세요!');
        }else{
          searchHistory.onAddKeyword(e.target.value);//검색어저장-
          resultData(e.target.value).then(data => searchData.setState(data));
        }
      },500);
  });

  async function resultData(keyword){
    try{
      const fetchbot = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);
      return fetchbot.json();  
    }catch(err){
      return new Error('검색에 실패했습니다.');
    }
  }
  
  document.querySelector('#search-history').addEventListener('click',function(e){
      if(e.target.nodeName === "LI"){
        $searchKeyword.value = e.target.innerHTML;
        resultData($searchKeyword.value).then(data => searchData.setState(data));
      }
  });
})()  
