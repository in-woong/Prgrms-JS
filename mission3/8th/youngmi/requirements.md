## 움짤 검색기 만들기 #92
- input.search-keyword 내용이 변경되면, 해당 input 내용을 기반으로 fetch API를 이용해 데이터를 가져옴

- SearchResult 라는 이름의 컴포넌트
    - data: 렌더링에 사용할 데이터
    - target: html string을 렌더링 할 element의 표현식(ex: #search-result)
    - 함수 두개: render, setState<br><br>
    
1. change로 내용변경 감지
2. 키워드 fetch로 보내기 
3. fetch로 받은 데이터를 SearchResult에 넘긴다
4. 
    
##  async ~ await 사용하기 #93
- fetch 해오는 코드를 promise에서 async, await를 사용하는 코드로 변경<br><br>

## debounce #94
- 움짤 키워드 검색 시 debounce 기법을 이용해 불필요한 API 요청이 가는 것을 방지

## 검색 히스토리 #102
- SearchHistory 라는 컴포넌트
- SearchInput 위에 렌더링하면 되며, 움짤을 검색할 때마다 SearchHistory의 히스토리 데이터가 하나씩 쌓입니다.
    - 해당 히스토리를 클릭하면 해당 검색어로 다시 검색합니다. 이때, 히스토리를 클릭해 발생한 검색에 대해선 히스토리에 쌓이지 않습니다.