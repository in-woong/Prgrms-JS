# Mission 3

## TodoApp 강화하기

1주차에 했던 `TodoList` 기억하시나요? 이번주에는 그 `TodoList`에 좀 더 기능을 붙여서 Todo 추가하기, 완료처리하기, 삭제하기를 해봅시다.

- [x] Mission2 때와 마찬가지로 `mission3_본인이름` 브랜치를 작성합니다.
- [x]  `mission3` 폴더 안에 본인 이름의 폴더를 만들고 진행하면 됩니다.
- [x] `TodoList` 코드는 본인이 작성했던 코드 그대로 써도 되고, 샘플 코드를 써도 됩니다.


## 기본 요구사항

- [x] 변수 선언은 `var` 대신 `let`, `const`를 사용해주세요.
- [x] `<input type="text">` input에 할 일을 입력하여 `TodoList` 컴포넌트의 데이터에 추가하도록 합니다.
  - [x] 별도의 입력 버튼을 만들어서 버튼 클릭 시 추가 되게 하거나
- [x] `TodoList`로 그려지는 할 일 목록에 아래의 기능을 추가합니다.
  - [x] 할 일 텍스트 뒤에 버튼을 하나 추가합니다. 해당 버튼을 클릭하여 할 일이 삭제되게 만듭니다.
  - [x] 할 일 텍스트를 클릭하면 해당 Todo의 `isCompleted` 값을 `true`로 만듭니다.
    - `isCompleted`가 `true`인 경우와 `false`인 경우를 구분할 수 있도록 `TodoList`의 html string을 작성합니다.
      - Todo Text 앞에 `(완료)` 라는 텍스트를 붙이는 방법
      - 삭선 처리 하는 방법(`<strike>`태그로 감싸기)
      - 그외 본인이 생각하기에 좋아보이는 방법을 써봅시다.
- https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener 문서를 참고하여 DOM 객체의 `addEventListener` 함수를 통해 이벤트를 등록합니다.

## Bonus

- [x] 할 일을 추가하는 부분을 컴포넌트화 시켜보세요.
  - 이름은 `TodoInput`으로 합시다.
- [x] `TodoCount` 라는 컴포넌트를 만듭니다.
  - 해당 컴포넌트는 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시합니다.
  - `TodoList` 컴포넌트 아래에 렌더링 되도록 합니다.
- [ ] `App` 이라는 이름의 컴포넌트를 만든 뒤 위 3개의 컴포넌트가 유기적으로 동작하도록 만듭니다.
- [x] Todo의 완료 처리 및 삭제 시 event deligation을 이용합니다.
  - https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%9C%84%EC%9E%84---event-delegation 요 게시글을 참고하여 이벤트 위임을 구현합니다.

## Bonus - Hard

- [ ] 커스텀 이벤트를 활용해봅니다.
  - 입력하는 곳 옆에 버튼을 하나 만듭니다. 이 버튼을 누르면 Todo가 모두 삭제됩니다.
  - 버튼 클릭 시 `removeAll` 이벤트가 발생하도록 합니다.
  - `TodoList`에서 `removeAll` 이라는 이벤트를 받도록 합니다.
    - 해당 이벤트를 수신하면 현재 `TodoList`에 있는 모든 데이터를 삭제합니다.
- [ ] todo 입력하는 input과 버튼을 `form`으로 감쌉니다.
  - 버튼의 type을 `submit`으로 바꿉니다.
  - 버튼 클릭 시 처리하던 이벤트 코드를 삭제하고, `form`에 `submit` 이벤트를 추가해서 처리하도록 합니다.
- [ ] `localStorage`를 이용해봅시다. 코드에 하드코딩 해놓은 부분을 없애고, 데이터가 변동될 때마다 `localStorage`에 해당 데이터를 저장합니다.
  - 이후 새로고침 시 `localStorage`에서 데이터가 있는 경우 꺼내서 쓰도록 하는 처리를 합니다.

## Tip

- `Javascript`의 event 처리가 이번이 처음이신 분도 계시고, 이미 익숙하신 분도 계실 것입니다.
  - 이벤트 버블링, 캡쳐링이 무엇이고 어떻게 일어나는지, 이걸로 어떤 걸 할 수 있는지에 대해서는 기본적으로 숙지하고 있는 것이 좋습니다.
- 커스텀 이벤트는 https://developer.mozilla.org/ko/docs/Web/Guide/Events/Creating_and_triggering_events 요 글을 참고하시면 도움이 됩니다.
- 보너스 미션 중`form` 작업을 할 때는 `event` 객체의 `preventDefault` 함수가 어떤 역할을 하는지 알아둘 필요가 있습니다. https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault 를 참고합시다.