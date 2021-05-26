# Mission3

## 수업내용
- url endpoint 는 상수로 관리해주는 것이 좋음

## QnA
Q_ 검색이 완료된 후 this.target.value = '' 처리, 하지만 다음 input 에 텍스트를 입력하면 이전에 입력했던 단어의 마지막 글자가 나와서 수동으로 지워주어야함. 어떤 키워드로 구글링을 해보면 좋을지 난해.

A_ 영어와 달리 한글의 경우 글자를 타이핑할 때 CompositionEvent(compositionstart, compositionupdate, compositionend)를 타는데, event listener의 callback 내부에서 onSearch를 한 뒤 값을 초기화시켜도 한글의 경우 compositionend가 되지 않았기 때문에, 마지막 글자가 남아있는 것.
현재 상태에서 재빠르게 스페이스바나 방향키를 누른 뒤, input에 값을 입력하면 남아있는 글자가 없는 것을 알 수 있음.

한글이 compositionend가 되려면 뒤에 whitespace(space, enter) 혹은 우측 방향키 같은 키들이 필요. 두 가지 방법이 있을 수 있음. (표준이 있거나 다른 좋은 방법이 있을 수도 있음)

 1. onSearch 이후 강제로 blur > 초기화 > focus
 2. compositionstart와 compositionend에 flag를 두는 방법
키워드는 IME, CompositionEvent 정도로 찾아봤고, 아래 참고 링크
* https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent
* https://stackoverflow.com/questions/51226598/what-is-javascripts-compositionevent-please-give-examples
* https://ntalbs.github.io/2015/editor-ime/

## Review1
* 문제 / `App.js`
  * array의 includes가 기존 배열에 영향을 주지 않으므로 spread를 사용하지 않아도 됨
  * array의 concat 자체가 새로운 배열을 만들기 때문에 spread로 배열을 복사하지 않아 됨
  * keyword가 이미 존재한다면 배열을 spread로 복사하지 않아도 됨
* 해결
    * `[...this.state.searchHistories]` -> `this.state.searchHistories`

### Review1-2
* 문제 / `App.js`
  * `concat` 이중배열을 사용할 필요가 없음 `this.state.searchHistories.concat([keyword])`
* 해결
    * `this.state.searchHistories.concat(keyword)`

### Review1-3
* 문제 / `App.js`
  * 함수의 변수명을 명사형으로 사용 `nextHistories()`
* 해결
  * 동사형으로 변경 `getNextHistories()`

## Review2
* 문제 / `App.js`
  * 굳이 변수에 `const searchHistories = [...this.state.searchHistories]` 넣을 필요 없음
  * `this.setState({ searchResults, searchHistories })`
* 해결
  * `const searchHistories = [...this.state.searchHistories]` 삭제 
  * `this.setState({ searchResults, searchHistories })` -> `this.setState({ ...this.state, searchResults })`

## Review3
* 문제 / `App.js`
  * `filter` 는 새로운 배열을 생성하기 때문에 스프레드 기법이 필요 없음
* 해결
  * `const nextHistories = [...this.state.searchHistories].filter((target) => target !== this.state.searchHistories[itemIndex])` -> `const nextHistories = this.state.searchHistories.filter((target) => target !== this.state.searchHistories[itemIndex])`

## Review4
* 문제 / `SearchResult.js`
  * `this.state` 가 빈배열일 경우 체크
* 해결
  * `Array.isArray(this.state) && this.state.length !== 0` 빈배열 체크하는 조건 `if`문에 추가

## Review5
* 문제
  * onSearch를 한 뒤 값을 초기화시켜도 한글의 경우 compositionend가 되지 않았기 때문에, 마지막 글자가 남아있는 현상 개선
* 해결
```
this.target.blur()
this.target.value = ''
this.target.focus()
```

## Review6
* 문제 / `SearchHistory.js`
  * 가독성을 위한 개행처리가 되어 있지 않음
* 해결
  * enter처리로 개행 추가

## Review7
* 문제 / `util.js`
  * `debounce`는 디바운싱된 함수를 반환해야 함
* 해결
  * `return timer = setTimeout(callback, debounceSeconds)`
        