## Basic
- [x] SearchResult Component로 이벤트에 따른 data로 rendering해주는 핵심 기능 구현
## Bonus 
- [x] `fetch` 하는 코드를 별도의 모듈로 분리하세요.
- [x]  promise -> async await로 고쳐보기
- [x] 검색 결과가 없을 때는 어떤 걸 보여주면 좋을까요  
- [x] 현재 화면에 그려진 데이터가 어떤 검색어로 검색된 결좌인지 보여주기
- [ ] 그 외 데이터에 들어있는 많은 값들로 화면을 풍부하게 만들어봅시다.
- [x] 각종 방어코드 추가 0.5 -> update
## Bonus - Hard
- [ ] `search-input` -> SearchInput 콤포넌트 제작 및 이 컴포넌트에 렌더에 대한 부분 고민
- [ ] `App` 이라는 이름의 컴포넌트를 만들고 그 안에서 `SearchInput`, `SearchResult` 동작하도록 수정
- [ ] debounce 적용하기

### Tip 
* 우선 작업해야하는 화면을 기준으로 컴포넌트 단위로 쪼갭니다.
* 컴포넌트 마다의 역할을 생각하고, 각 컴포넌트마다 한 가지의 역할을 하도록 합니다.
* 컴포넌트간의 의존성을 생각해봅니다. 
* 어떤 컴포넌트가 너무 불필요한 정보를 들고 있는 건 아닌지, 혹은 너무 무의미하게 다른 컴포넌트들을 의존하는지를 곰곰히 생각해봅니다.
* 데이터의 흐름도 중요한데, 애플리케이션 전체적으로 데이터가 어떻게 흘러가는지를 손으로 가볍게 그려보거나 머릿 속에 떠올리고 있는 것도 설계에 많은 도움이 됩니다.

### Component 

1. 요구사항 

Search-input -> SearchInput 콤포넌트 제작 및 이 컴포넌트에 렌더에 대한 부분 고민
App 이라는 이름의 컴포넌트를 만들고 그 안에서 SearchInput, SearchResult 동작하도록 수정
debounce 적용하기

App
- SearchInput 
- SearchResult(Galleries) 

### App 의 역할은 무엇일까?

1. config를 받아서 -> 
searchInput, SearchResult 가 역할을 하도록 준비시켜준다.
2. searchInput에 이벤트로 받은 결과를 처리한다 
2.1 성공시 -> data update -> data가 업데이트 되면 galleries에 data를 전달한다.
2.1.2 필요한 data만 정제할 필요도 있는 듯 
2.2 Error 처리 -> 

### SearchInput 의 역할은 무엇일까? 

1. keyEvent를 받아서 jjalApi로 보토 data를 얻어온다 
2. data를 App에 전달시킨다. 

ux 
3. x버튼 느려고 했다가 많은 input창이 생각보다 x버튼이 또 없네? 필요 없으려나
없는데: (naver, google, soundcloud,tumblr, faceboo )
있는데 (airbnb) 

```js
막상 타이핑을 해보니까  esc로 그냥 clear해주는 편이 좋은 ux일 것 같다 생각했다. 
자동완성 검색어가 들어갔을때 clear가 좋으려나 'ㅁ';
일단 여기는 서버가 있어야 되니까 x버튼은 없는 걸로 결정 
```

4.focus가 될때 최근에 검색한 검색어들을 보여준다.
4.1 한 번 통신하고 성공할 마다 검색어들을 로컬 스토리지에 push 한다.
4.2 focusing이 될 때 localStorage에 있는 검색어들을 5개 잘라서 가지고 온다


### SearchResult(Galleries) 에 역할은 무엇일까?

1. 검색한 키워드를 보여주고 결과수를 보여준다.
2. 검색 결과에 따른 이미지들을 카드로 렌더링한다. 

UX + 그 외 데이터에 들어있는 많은 값들로 화면을 풍부하게 만들어봅시다.
3. tags와 id
3.1 동작-> 호버시 tag를 보여준다.
4. 좋아요, 공유하기 버튼 호버시 
5. api가 있을시 추가 구현 , 공유하기는 가능하려나? 찾아보기 
6. 정렬 (좋아요값은 없지만) 날짜 최신 순으로 정렬
7. 오른쪽에 자신이 pick한 jjal이 들어갈 수 있게 
8 무한 스크롤 or 더보기 버튼 - data를 많이 불러오지는 않는 것 같아서 이 부분도 api가 있으면 추가 구현
8.1 무한 스크롤로 적용하기로 ux적으로는 둘다 장단이 있어보이는데 개발적으로 무한스크롤이 더 재밌어 보인다.



### ETC
지금은 키워드에 계속 반응해서 api로 짤을 업데이트 하는데 일반적인 SearchForm처럼
1. 검색할때는 자동 검색 완성어가 뜨는 형태고
2. 검색 버튼을 눌렀을때 짤이 바뀌는게 더 좋은 ux같아 보인다. 

