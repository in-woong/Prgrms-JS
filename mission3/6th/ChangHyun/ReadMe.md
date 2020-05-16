## mission3

### 파일 구성 & 주요 구현내용

> index.html
> main.js
>
> api.js
>
> - getJJALImgs
>
> App.js
>
> - keywordHandlers, historyHandlers 객체
>   - 각 컴포넌트 인자로 전달되는 handler들을 객체에 저장 , eventTarget+event를 entry명으로.
>   - 추후 handler 추가 또는 제거 시, 컴포넌트에 대한 handlers객체를 통해 수정
>     - keywordHandlers.inputKeyup : 2차 디바운싱 (구현 내용에 추가 설명)
> - init()
>   - target에 component를 담을 container를 추가(?). 각 컴포넌트의 setState 시 변경될 수 있는 레이아웃을 고정하기 위해.
> - this.components 객체
>   - App에서 component 인스턴스를 선택하기 용이하도록 객체에 컴포넌트를 저장
> - this.setState
>
>   - App에서의 선택적인 state 처리를 위해 인자로 states 객체를 전달, 전달되는 state 변경에 따라 component instance에서 setState 실행
>
> 📂components
>
> > SearchHistory.js
> >
> > - SearchHistory.js
> >   - this.setState(newQuery) : 새로 입력되는 query를 받아 기존 데이터를 수정
> >   - this.render() : input에서 들어오는 query에 의한 XSS 방지를 위해 textContent 사용
> >   - this.queries & this.history 구분
> >     ex)
> >     - HISTORYLENGTH : 3
> >     - input.value : 월-화-수-목-월-화-수-화-월
> >     - queries : {월 : 3, 화:3, 수:2, 목:1}
> >     - history : [목,수,화,월]
> >     - setState 의해 추가됨
> >
> > SearchKeyword.js
> > SearchResult.js
>
> 📂utils
>
> > debounce.js
> >
> > - 온라인 강좌에서 다뤘던 컴포넌트 재사용
> > - 인자가 있는 함수 전달이 가능한 debouncer

<br>

### 구현 내용

- 다른 분들 코드 참고해 작성했습니다.
- error 처리와 validation에 관련된 부분은 이해가 부족해 좀 더 공부 후 추가해보겠습니다.
- 각 컴포넌트와 util을 App.js에서 사용했습니다.
- App과 Api를 main.js에서 사용했습니다.
- setState에서 불필요한 state에 대한 처리를 없애기 위해 App.js에서 handler function 인자로 변경되는 state를 전달했습니다.
- component에서 $target을 $app으로 설정할 경우, setState에 따른 render에 의해 레이아웃이 고정되지 않아 app.init 시 각 컴포넌트를 담을 container를 생성하고 해당 container를 컴포넌트의 target 인자로 전달했습니다.
- data를 App에서 처리할 경우 불필요하게 data를 가지게 되는 component가 발생해 component에서 필요한 data를 가지고 있게 설계했습니다.
- input handler를 디바운싱할 경우 history와 result 내역이 동시에 로딩되는데, result는 짧은 timeInterval을 주어 사용자가 이미지를 빠르게 확인하고 history는 충분한 시간이 지난 후에 update해 실질적인 데이터만 처리하고 렌더하게끔 구현해보고 싶었습니다. input handler 내에서 debounce util을 사용해보았지만 input handler가 종료되는 시점에 garbage collecting이 되어서인지 clearTimeout이 작동하지 않았습니다. 결과적으로 debounce(input handler) 외부 변수 app.historyTimer를 사용해 2차 디바운싱을 구현했습니다.

### 질문 사항

- api.js, app.js를 다른 폴더로 구분하면 좋다고 생각됐는데요. 맞다면, 폴더명을 어떻게 정하는 게 좋을까요?
- 전반적으로 구조가 맞게 설계되었는지 궁금합니다.
- app에서 데이터를 처리할 경우 하위 컴포넌트에서 처리되는 데이터를 가지고 있어야 setState시 수정되는 데이터가 render에서 반영되는 것으로 이해했는데 잘 이해했는지가 궁금합니다. (app에서만 data를 쥐고 component에서는 app에서의 data를 전달받아 setState > render할 수가 있을까요?)
- 이처럼 컴포넌트화하는 것이 import export문이 생긴 이후의 파일 분리 방법인가요?
- XSS attack을 방지하기 위한 코드 내용이 잘 이해하고 짠 코드일까요..?
- handler 함수를 별도 파일로 관리할 수도 있을까요? (어딘가에서 꼬여 덮어버렸습니다..😅)
- 변수, 파일 네이밍이 적절할까요?
- 보너스 구현 내용 외에 추가해보고 싶은 구현을 추가해서 리뷰 부탁드려도 될까요
- 이번 기수 기간이 지난 이후에도 리뷰 요청이 가능할까요(기간 내에 소화하기에는 미션 내용이 꽤 어려워 부탁드립니다ㅜ)
