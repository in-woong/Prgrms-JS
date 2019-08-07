# Mission 1

- `master` 브랜치를 기준으로 `mission1_본인이름` 브랜치를 만들어주세요.
- 해당 브랜치의 mission1 폴더에 본인이름 폴더를 만들고, 그곳이 `index.html` 파일을 만든 뒤 아래의 내용을 넣고 저장합니다.

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

- `TodoList` 라는 이름을 가진 함수를 작성합니다.
- 해당 함수는 new 키워드를 이용해 생성되며, 파라메터로 위의 data를 넘겨받습니다. `ex) var todoList = new TodoList(data);`
- `TodoList` 함수는 파라메터로 넘겨받은 data를 this 키워드를 이용해 함수 내 변수로 저장해둡니다. `this.data = data` 이런 식으로요.
- `this.render = function{ ... }` 형태로 TodoList 함수 내에 render function을 작성합니다.
	- 이 함수는 data를 이용해 data 배열을 순회하며 각 배열첨자의 text를 html로 만든 뒤, `todo-list`라는 id를 가진 div에 data의 text가 렌더링되도록 작성합니다. 아래 Tip을 참고하세요.
- 위에서 작성한 `TodoList` 함수를 `var todoList = new TodoList(data);` 형태로 생성한 후, `todoList.render()` 함수를 호출하여 실행되게 작성합니다.

## Bonus(필수는 아니지만 해보면 좋을 것들)

- new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기
- new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기

## Tip
- new 키워드와 this 키워드가 생소하신 분을 위해 간단한 샘플을 준비했습니다.
  - ```javascript
    function Band(name) {
      // 파라메터로 받은 name을 this.name으로 할당
      this.name = name;
      // Band 함수에 perform 함수를 만들고 그것을 this.perform 에 할당
      this.perform = function(){
        console.log(`${this.name} 밴드가 공연을 합니다!`);
      }
      this.performHTML = function() {
        document.querySelector('#stage').innerHTML = `<div>${this.name} 밴드가 공연을 합니다!</div>`
      }
    }

    // new 키워드를 이용해 Band 여러개를 만들기
    // new를 붙이고 함수가 실행될 때마다, 함수 내 this는 새 함수 인스턴스를 가리킵니다.
    var band1 = new Band('Cold Play'); // band1.name은 무엇일까요? band1.perform()을 실행하면 어떤 일이 일어날까요?

    // 나머지 band2, band3, band4에 대해서도 생각해봅시다.
    var band2 = new Band('Foo Fighters');
    var band3 = new Band('Crying Nut');
    var band4 = new Band('Jaurim');

    // 무슨 일이 일어날까요?
    band1.performHTML();
    // 무슨 일이 일어날까요?
    band2.performHTML();
    ```
- data와 html string을 결합하기 위해 + 를 연산자를 이용하는 방법
  - `var html = '<div>' + data[0].text + </div>`;
- string template을 이용하는 방법
  - ```
    var html = `<div>${data[0].text}</div>`
    ```
- 특정한 div 내에 html을 넣으려면 아래의 문법을 활용하세요.
  - `document.querySelector('#todo-list').innerHTML = 'html string';

## 읽으면 도움이 될 글들

- [JavaScript에서 사용자정의 생성자함수](https://yookeun.github.io/javascript/2015/03/08/javascript-construct/) - 생성자 함수에 대해 정리가 된 글입니다.
- [Template literals
](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) - ES6의 Template Literals 문법에 대한 글입니다. 이번 미션을 수행하면서 html을 string 형태로 생성하게 되는데, 적절히
활용하면 data와 html string을 붙이는 작업을 편하게 할 수 있습니다.
- [this는 어렵지 않습니다.](https://blueshw.github.io/2018/03/12/this/) - this에 대해 정리된 글입니다.
