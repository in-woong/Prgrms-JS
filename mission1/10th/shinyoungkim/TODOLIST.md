# TODO List

### 📌 [mession1] Todo List
- [X] #49 TodoList 컴포넌트 작성 - 필수 구현 사항
- [X] #50 보너스 구현사항 - 유효성 검사
- [X] #57 보너스 구현사항 - 다중 컴포넌트
- [X] #66 보너스 구현사항 - isCompleted 처리
- [X] #67 보너스 구현사항 - setState

#### ▪ [mession1] 필수 구현사항 
- [X] TodoList라는 이름을 가지는 함수를 작성한다.
- [X] 해당 함수는 new 키워드를 이용해 생성되며, 파라메터로 위의 data를 넘겨받습니다. `ex) var todoList = new TodoList(data);`
- [X] `TodoList` 함수는 파라메터로 넘겨받은 data를 this 키워드를 이용해 함수 내 변수로 저장해둡니다. `this.data = data` 이런 식으로요.
- [X] `this.render = function{ ... }` 형태로 TodoList 함수 내에 render function을 작성합니다.
- [X] 이 함수는 data를 이용해 data 배열을 순회하며 각 배열첨자의 text를 html로 만든 뒤, `todo-list`라는 id를 가진 div에 data의 text가 렌더링되도록 작성합니다. 아래 Tip을 참고하세요.
- [X] 위에서 작성한 `TodoList` 함수를 `var todoList = new TodoList(data);` 형태로 생성한 후, `todoList.render()` 함수를 호출하여 실행되게 작성합니다.


#### ▪ 추가 구현사항

보너스 구현 - 에러처리 하기 
```
new 키워드로 함수 인스턴스 만들 때 올바른 인자값이 넘어오지 않을 경우 에러 발생
에러는 우선 에러를 내야하는 상황이 생기는 경우 throw new Error("error message") 문법을 사용해주세요.

```
- [X] array아닌 형태로 넘어오는 경우
- [X] new 키워드 안 붙이고 함수 실행시 에러 발생하게 하기
- [X] null or undefined 
- [X] 데이터가 이상하면

**보너스 구현 - 다중 컴포넌트**
- [X] html에 `<div id="todo-list"></div>` 외의 다른 div를 두 개 더 html 코드에 만듭니다.
- [X] div의 id는 적당한 이름으로 지어주세요.
- [X] js파일에 var data = [{ ... }] 외에 todo를 담고 있는 array data를 두 개 더 만듭니다.
- [X] 3개의 컴포넌트를 만든다.

**보너스 구현 - isCompleted**
- [X] data의 각 object에 text외에 isCompleted라는 필드 추가 한다.
- [X] isCompleted Boolean값 지정 
- [X] TodoList 컴포넌트 내에 text 렌더링 시, isCompleted 값이 true인 경우 <s> 태그를 이용해 삭선처리를 해주는 걸 추가

**보너스 구현사항 - setState**
- [X] TodoList 함수에 setState(nextData)라는 함수를 생성
- [X] 해당 함수를 추가한 뒤, new TodoList(...) 하는 코드 이후에 해당 컴포넌트의 인스턴스에 todoList.setState(새로운 배열) 형태로 데이터만 다시 넣었을 때 컴포넌트가 다시 렌더링 되도록 작성
- [X]  setState 함수 호출 후 다시 todoList.render()를 호출하는 것이 아니라, setState 함수 내에서 화면을 다시 렌더링하는 것까지 처리해야 합니다.

### [Mission1] code review
- 변수명에 대한 정확히 무엇을 하는지 정확하게 파악이 가능해야 한다.
-  element를 string으로 받는 대신 document.querySelector('#todo-list2') 한 결과를 넘겨주면  
  TodoList는 dom selecting에 대해 생각하지 않아도 되고 id 형태의 string을 넘기야만 하는 제약이 없어지므로 html에도 id 대신 class, data attribute등 여러가지 방법으로 selecting해서 넘길 수 있게 됩니다.