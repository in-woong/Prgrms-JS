# Mission2 Review

## Review1

- 문제 : App.js / addTodoItem은 immutable하게 작성, deleteAllItem에서 사용된 splice의 경우 mutable 하기 때문에 setState가 불리기 전에 this.state의 변경이 일어남.
- 해결방법
  - setState에 빈 배열을 넣는 것으로 충분
- 해결
  - `this.setState([])`

## Review2

- 문제 : App.js / splice가 mutable하기 때문에 splice를 사용한 후 setState 하기전 this.state가 변하게 됨
- 해결방법
  - immutable한 배열을 제거
  - "제거"하는 대신 해당 항목을 포함하지 않는 새 배열을 "생성"하는 filter
- 해결

```
const removeTarget = this.state[itemIndex]
const nextState = this.state.filter((target) => target !== removeTarget)
this.setState(nextState)
```

- 참고자료

  - [array remove element immutable](https://ultimatecourses.com/blog/remove-specific-item-from-array-javascript)

  ## Review2-2

  - 더 나은 방향 : `index` 만으로도 비교 가능
  - 해결 : `index`만 남기고 불필요한 부분 제거

## Review3

- 문제 : App.js / setState로 데이터를 업데이트 하기 전, 이미 targetListItem reference로 인해 this.state[itemIndex] 부분의 업데이트가 발생
- 해결
  - `map()`을 사용해서 새로운 배열 생성

```
const toggleTarget = this.state[itemIndex]
const nextState = this.state.map((item) => {
if (item.text === toggleTarget.text) {
    return {
    text: toggleTarget.text,
    isCompleted: !toggleTarget.isCompleted,
    }
} else {
    return { text: item.text, isCompleted: item.isCompleted }
}
})
this.setState(nextState)
```

## Review3-2

- 문제: todo 마다 특정한 id를 부여해서 찾는 것이 더 안전. 지금의 로직으로는 서로 다른 todo가 같은 text를 갖는다면 둘다 토글
- 해결방법
  - `todoItem`에 아이디를 부여
- 해결
  - `uuid`를 `Math.random().toString(36).substr(2, 16)` 로 생성하여 유일한 아이디 부여

## Review4

- 문제 : TodoCount.js / TodoCount 컴포넌트가 initialState, setState를 통해 todoItem들을 상태로 가지고있는 상황에서, completedItemTotal 상태를 별도로 관리하지 않고 filter를 통해 completed된 todoItem의 갯수를 카운팅하면 completedItemTotal에 별도로 연산하지 않아도 됨
- 해결방법
  - `this.state.filter(todoItem => todoItem.isCompleted).length`
- 해결
  - `completedItemTotal` 관련코드 삭제

## Review5

- 문제 : TodoList.js / 초기화로 인해 this.state가 initialState가 된 상태이므로 this.setState가 불필요
- 해결방법, 해결
  - `this.setState(this.state)` 삭제

## Review6

- 문제 : TodoList.js
  1. $app의 경우, setState에서 업데이트 되지 않기 때문에 setState보다는 constructor에서 검증하는 것이 더 적절
  2. this.state에 nextData를 넣기전에 nextData를 검증하는 것이 조금 더 안전
  3. 생성할 때도 initialState가 valid한지 검증하면 좋을 것
- 해결
  - $app을 검증하는 validator 생성
  - nextData 검증위치 변경
  - initialData 검증 추가

## Review7

- 문제 : TodoList.js / this.state.length가 음수일 수 없기 때문에 else만 쓰거나 삼항연산자 사용. (validator에서 this.state가 array 임을 검증하기때문에)
- 해결방법
  - 삼항연산자 사용
  - `else if` 의 if문 제거

## Review8

- 문제 : TodoInput.js / 실제로 렌더링이 되는 부분이 아니고 event listener를 등록해주기 때문에 contstructor에 둬도 될 것
- 해결
  - 위치변경

## Review9

- 문제 : TodoInput.js / 이 코드가 여기에 있으면 클릭이 될때마다 새로 생김.

```
  this.$deletAllBtn.addEventListener(
    'click',
    () => {
      const event = new Event('removeAll')
```

- 해결방법 : 바깥에서 한번만 실행
- 해결 : 위치변경

## Review10

- 문제 : TodoList.js / 두 프로퍼티에 대한 타입 검사도 추가되면 더 안전할 것
- 해결방법 : 타입 검사 추가
- 해결

```
} else if (typeof item.text !== 'string') {
    throw new Error(ERROR_MESSAGE.IS_NOT_STRING)
  }
```

## Review11

- 문제 : TodoList.js / 변수 선언이 잘못됨
- 해결방법 : `let` -> `const`
