# 📑 TodoList 컴포넌트 작성

## 구현할 기능 목록

### class 생성

- [x] `data` 를 넘겨받아 객체를 관리할 `class` 를 생성한다.

  - [x] `data` 의 속성에 따라 예외처리를 해준다.

    - [x] `null` 혹은 `undefined` 가 넘어오는 예외처리

    - [x] `array` 형태가 아닌 `data` 가 넘어오는 예외처리

### render 함수 생성

- [x] `HTML` 내용을 관리하는 `render()` 함수를 작성한다.

  - [x] `render` 함수에는 인자를 넘겨받지 않는다.

  - [x] `isCompleted` 필드를 통해 렌더링 시 삭선처리를 해준다.

### To Do List 생성

- [x] 2개의 `To Do List` 목록을 더 만든다.

  - [x] 상속을 이용해 코드 중복을 최대하 피한다.

### setState 함수 생성

- [ ] `data` 파라메터를 `nextData` 로 대체한다.

- [ ] 컴포넌트를 다시 렌더링한다.
