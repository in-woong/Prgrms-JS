## 필수 구현사항 (#75)

- [x] 변수 선언은 `var` 대신 `let`, `const` 로만 사용하기
- [x] `<input type="text">` input에 할 일을 입력하여 `TodoList` 컴포넌트의 데이터에 추가되도록 하기
  - [x] 버튼 클릭 시 추가되도록 하기
  - [x] 엔터키 입력으로 추가되도록 하기 
- [x] 할 일 텍스트 뒤에 버튼을 하나 추가하기
  - [x] 해당 버튼을 클릭하여 할 일이 삭제되게 만들기
- [x] 할 일 텍스트를 클릭하면 해당 Todo의 isCompleted 값을 true로 만들기
  - [x] isCompleted 값이 `true` 인 경우, 앞에 ✔️ 문자 표시 + 삭선 처리 되도록 구현했습니다.

## 보너스 구현사항 (#76, #77, #81, #90, #91)
- [x] Todo를 막힘없이 추가할 수 있도록 처리
- [x] input 컴포넌트화 하기
  - [x] 입력값을 받는 input 과 모든 Todo 삭제 버튼, Todo 추가 버튼을 하나의 컴포넌트로 묶었습니다.
- [x] TodoCount 컴포넌트 만들기
- [x] Event Delegation 구현하기
  - [x] TodoList 컴포넌트 내에서 할 일 텍스트 클릭 이벤트, 할 일 삭제 버튼 클릭 이벤트를 처리하도록 했습니다. 이벤트 처리시 `data-` attribute 를 사용했습니다.  
- [x] removeAll custom event 구현하기
  - [x] window 객체에 `$root` 라는 프로퍼티를 추가하고 해당 프로퍼티에 `div#todo-list` DOM element 를 할당했습니다. 그런 다음, 해당 DOM element 에 `removeAll` 이벤트에 대한 리스너를 달아 주었고, `TodoInput` 컴포넌트에서 custom event 를 dispatch 할 때 `window.$root` 를 사용했습니다.
- [x] localStorage 활용하여 TodoList 관리하기

## 질문
- `input` 태그에 `keydown` 이벤트 리스너를 걸고나서 Enter 키를 누르면 Todo 가 추가되도록 구현했습니다. 그런데 한글 입력의 경우 Enter 키를 누르면 이벤트 핸들러가 2번 실행이 되는 문제가 있었습니다. 저는 이 부분을 일단 `isComposing` 이라는 `keydown` 이벤트 객체 내의 프로퍼티를 활용하여 해결했는데 다른 좋은 방법이 혹시 있을까요??