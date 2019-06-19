## 기본 요구사항

- [x] 변수 선언은 `var` 대신 `let`, `const`를 사용해주세요.
- [x] `<input type="text">` input에 할 일을 입력하여 `TodoList` 컴포넌트의 데이터에 추가하도록 합니다.
  - [x] 별도의 입력 버튼을 만들어서 버튼 클릭 시 추가 되게 하거나
  - [ ] 엔터키 입력으로 처리하거나 하는 건 자유롭게 합니다.
- [ ] `TodoList`로 그려지는 할 일 목록에 아래의 기능을 추가합니다.
  - [x] 할 일 텍스트 뒤에 버튼을 하나 추가합니다. 
    - [x] 해당 버튼을 클릭하여 할 일이 삭제되게 만듭니다.
  - [ ] 할 일 텍스트를 클릭하면 해당 Todo의 `isCompleted` 값을 `true`로 만듭니다.
    - [x] `isCompleted`가 `true`인 경우와 `false`인 경우를 구분할 수 있도록 `TodoList`의 html string을 작성합니다.
      - [x] Todo Text 앞에 `(완료)` 라는 텍스트를 붙이는 방법
      - [x] 삭선 처리 하는 방법(`<strike>`태그로 감싸기)
      - [x] 그외 본인이 생각하기에 좋아보이는 방법을 써봅시다.
        - [x] 체크박스 추가 
- [x] https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener 문서를 참고하여 DOM 객체의 `addEventListener` 함수를 통해 이벤트를 등록합니다.

## Bonus

- [ ] 할 일을 추가하는 부분을 컴포넌트화 시켜보세요.
  - [ ] 이름은 `TodoInput`으로 합시다.
- [ ] `TodoCount` 라는 컴포넌트를 만듭니다.
  - [ ] 해당 컴포넌트는 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시합니다.
  - [ ] `TodoList` 컴포넌트 아래에 렌더링 되도록 합니다.
- [ ] `App` 이라는 이름의 컴포넌트를 만든 뒤 위 3개의 컴포넌트가 유기적으로 동작하도록 만듭니다.
- [ ] Todo의 완료 처리 및 삭제 시 event deligation을 이용합니다.
  - [ ] https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%9C%84%EC%9E%84---event-delegation 요 게시글을 참고하여 이벤트 위임을 구현합니다.

## Bonus - Hard

- [ ] 커스텀 이벤트를 활용해봅니다.
  - [ ] 입력하는 곳 옆에 버튼을 하나 만듭니다. 이 버튼을 누르면 Todo가 모두 삭제됩니다.
  - [ ] 버튼 클릭 시 `removeAll` 이벤트가 발생하도록 합니다.
  - [ ] `TodoList`에서 `removeAll` 이라는 이벤트를 받도록 합니다.
    - [ ] 해당 이벤트를 수신하면 현재 `TodoList`에 있는 모든 데이터를 삭제합니다.
- [ ] todo 입력하는 input과 버튼을 `form`으로 감쌉니다.
  - [ ] 버튼의 type을 `submit`으로 바꿉니다.
  - [ ] 버튼 클릭 시 처리하던 이벤트 코드를 삭제하고, `form`에 `submit` 이벤트를 추가해서 처리하도록 합니다.
- [ ] `localStorage`를 이용해봅시다. 코드에 하드코딩 해놓은 부분을 없애고, 데이터가 변동될 때마다 `localStorage`에 해당 데이터를 저장합니다.
  - [ ] 이후 새로고침 시 `localStorage`에서 데이터가 있는 경우 꺼내서 쓰도록 하는 처리를 합니다.



## TODO 
- [ ] 임시로 id++ 되도록 해놨으나 추후 아이디 부여 방법 추가 할 것 


--- 
## COMMIT LOG

### remove button 추가 및 기능 구현 (6/19)
- todo item에 id 부여 
- remove Button 추가  
  - click eventListener 추가 
  - id 비교하여 todo 삭제 
- 삭제된 데이터가 todo 추가시 다시 살아나는 문제 수정 
  - main.js에서 input form을 이용해 todo 추가시 todoList.data 사용하도록 변경 



### 폴더 구조 변경, isComplete 상태에 따라 표시 형식 변경 (6/19)
- render html 수정
- 완료 상태에 따라 표시 형식 변경 