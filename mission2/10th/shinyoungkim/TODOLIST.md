### 📌 [mession2] Todo List
- [ ] 필수 구현사항 - #75 TODO 업그레이드하기
- [ ] 보너스 구현사항 - #76 input 컴포넌트화 하기 
- [ ] 보너스 구현사항 - #77 TodoCount 컴포넌트화 하기 
- [ ] 보너스 구현사항 - #81 Event delegate 
- [ ] 보너스 구현사항 - #90 커스텀 이벤트
- [ ] 보너스 구현사항 - #91 localStorage 

#### ▪ [mession2] 필수 구현사항 
- [ ] 기존 미션1 진행했던, index.html 파일을 TodoList 함수는 TodoList.js 라는 이름의 스크립트로 분리
- [ ] new TodoList()를 실행했던 코드 구문 index.js라는 이름으로 스크립트 분리
- [ ] index.html 파일을 생성한 뒤, 위에서 분리한 두 스크립트를 로딩하도록 한다.
- [ ] TodoList의 데이터 만든다. / 따로 파일을 생성하는게 효울적일 듯.

###### Input 사용하여 추가적 data를 생성
- [ ] 변수 선언은 var 대신 let, const로만 사용
- [ ] <input type="text"> input에 할 일을 입력시 TodoList 컴포넌트의 데이터에 추가하도록 한다.
- [ ] 버튼 & Enter key로 작업 데이터 입력 후 전달 
- [ ] TodoList로 그려지는 할 일 목록에 기능을 추가한다.
- [ ] 삭제 버튼 추가. 해당하는 데이터 삭제 기능
- [ ] 할일 텍스트를 클릭시 isCompleted를 true값으로 변경 => 힐일 텍스트를 클릭하는거 말고/ 체크박스나? 체크할 것을 표시하는게 좋을 듯 
- [ ] isCompleted가 true인 경우와 false인 경우를 구분할 수 있도록 TodoList의 html string을 작성 ? 뭐지..?
- [ ] 완료시 상태가되는 값이 어떤 것인지? 이거 표시할 방법? 
- [ ] addEventListener로 이벤트 등록 
 

#### ▪ 추가 구현사항

**보너스 구현 - input 컴포넌트화 하기**

- [ ] 할 일 추가되는 부분을 컴포넌트화 / 파일명 - TodoInput 

```
App.js 
  ⌞ TodoInput.js
  ⌞ TodoList.js 
```

**보너스 구현 - TodoCount 컴포넌트화 하기**
- [ ] TodoCount 컴포넌트를 만든다.
- [ ] 해당 컴포넌트는 총 Todo 갯수, 완료처리된 Todo 갯수 표시 
- [ ] TodoList  컴포넌트 아래에 렌더링 

**보너스 구현 - Event delegate**
- [ ] Event delegate를 이용하여 처리 

> https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
  https://poiemaweb.com/js-event 요기 8번에 설명되어 있습니다.

**보너스 구현 - 커스텀 이벤트**
- [ ] 입력하는 곳 옆에 버튼을 만들고, Todo가 모두 삭제 기능
- [ ] removeAll 이벤트 발생 
- [ ] App에서 removeAll 이라는 이벤트 받도록한다.
- [ ] 해당 이벤트 수신 -> TodoList 모든 데이터 삭제 

>  https://developer.mozilla.org/ko/docs/Web/Guide/Events/Creating_and_triggering_events

**보너스 구현 - localStorage**
- [ ] todo 데이터 부분을 하드코딩한 부분을 삭제
- [ ] localStorage를 활용 todo data가 변경될 때마다 localStorage에 저장
- [ ] 프로그램 초기 가동 시 todo는 localStorage 저장해둔 todo가 있으면 사용, 없으면 빈배열로 만든다.
- [ ] 새로고침 시 todo가 유지되도록 localStorage를 활용

>  https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage 

### [Mission2] 코드 진행시 유의점 
- 

### [Mission2] 진행 어려웠던 점 & 궁금한 부분 