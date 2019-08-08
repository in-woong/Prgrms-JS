# Mission 1

- [x] `master` 브랜치를 기준으로 `mission1_본인이름` 브랜치를 생성
- [x] 해당 브랜치의 mission1 폴더에 본인이름 폴더 생성, `index.html` 파일을 만든 뒤 아래의 내용을 넣고 저장

```html
<html>

<head>
  <title>Mission 1</title>
  <meta charset="utf-8" />
</head>

<body>
  <div id="todo-list"></div>
  <script>
    var data = [
      {
        text: 'JS 공부하기'
      },
      {
        text: 'JS 복습하기'
      }
    ]
	// 이곳에서 코딩을 시작하세요!
  </script>
</body>
</html>
```

`script` 태그 내에 아래의 요구사항을 만족하는 코드를 작성합니다.

## 기본 요구사항

- [x] `TodoList` 라는 이름을 가진 함수를 작성
- [x] 해당 함수는 new 키워드를 이용해 생성
  - [x] 파라메터로 위의 data를 넘겨받음 `ex) var todoList = new TodoList(data);`
- [x] `TodoList` 함수는 파라메터로 넘겨받은 data를 this 키워드를 이용해 함수 내 변수로 저장 `this.data = data` 이런 식으로요.
- [x] `this.render = function{ ... }` 형태로 TodoList 함수 내에 render function을 작성
	- [x] 이 함수는 data를 이용해 data 배열을 순회하며 각 배열첨자의 text를 html로 만든 뒤, `todo-list`라는 id를 가진 div에 data의 text가 렌더링되도록 작성합니다.
- [x] 위에서 작성한 `TodoList` 함수를 `var todoList = new TodoList(data);` 형태로 생성한 후, `todoList.render()` 함수를 호출하여 실행되게 작성

## Bonus(필수는 아니지만 해보면 좋을 것들)

- [x] new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생
- [x] new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
