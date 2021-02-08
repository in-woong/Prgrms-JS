# Mission2 TodoApp 업그레이드 하기📑✏

Mission1의 TodoList에 추가 및 삭제 기능을 추가로 구현해본다.

## 필수 구현사항❗❗❗❗

- [x] Mission1의 html과 js 파일을 분리하고, js 파일은 메소드별로 구분지어 파일을 나눠준다.
- [x] index.html 파일에서 분리한 두 스크립트가 로딩되도록 한다.
- [x] 변수는 let과 const만 사용한다.
- [x] 할 일을 입력하고 추가할 수 있는 <input>태그를 생성한다.
- [x] 목록에 버튼을 추가해 삭제할 수 있는 기능을 추가한다.
- [x] 할 일 텍스트를 클릭하면 해당 텍스트의 isCompleted 값을 true로 만든다.
- [x] isCompleted가 true일 때, false일 때의 경우를 구분해준다.

## 보너스 구현사항❗❗❗

- [x] input 컴포넌트화
- [x] TodoCount 컴포넌트
- [x] Event delegate
- [ ] 커스텀 이벤트
- [ ] localStorage

### 1/27 ~ 2/7 작업내용

#75 TodoApp 업그레이드하기
#76 input 컴포넌트화
#81 Event delegate

### 2/8 작업내용

#77 TodoCount 컴포넌트

- [x] TodoCount라는 컴포넌트를 만든다.
- [x] 해당 컴포넌트는 todo의 개수와 완료처리된 갯수를 표시한다.
- [x] TodoList 컴포넌트 아래에 렌더링되도록 한다.

#90 커스텀이벤트

- [x] 입력하는 곳 옆에 버튼을 하나 만든다.
- [x] 버튼을 누르면 모든 todo가 삭제되게끔 한다.
- [x] 버튼 클릭시, removeAll 이벤트가 발생하도록 함.
- [x] App에서 removeAll이라는 이벤트를 받도록 함.
- [x] 해당 이벤트를 수신하면 현재 TodoList에 있는 모든 데이터를 삭제함.

#91 localStorage

- [ ] todo 데이터를 하드코딩 해놓은 부분을 삭제한다.
- [ ] localStorage를 활용해 todo data가 변경될 때마다 localStorage에 저장하게 한다.
- [ ] 프로그램 초기 기동 시 todo는 localStorage에 저장해둔 todo가 있다면 그걸 사용하고, 없으면 빈 배열로 만든다.
- [ ] 새로고침 시 입력해둔 todo가 유지되도록 localStorage를 활용한다.

참고사이트
localStorage 관련문서는 https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage 를 참고합니다.

#### 어려웠던 점

- 모듈

##### 참고 링크

이벤트 버블링
https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
https://poiemaweb.com/js-event 요기 8번에 설명되어 있습니다.
