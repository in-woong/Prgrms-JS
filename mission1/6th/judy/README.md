# [미션1] TodoList 컴포넌트 작성 - 필수 구현 사항
## 미션
- `TodoList` 라는 이름을 가진 함수를 작성합니다.
- 해당 함수는 new 키워드를 이용해 생성되며, 파라메터로 위의 data를 넘겨받습니다. `ex) var todoList = new TodoList(data);`
- `TodoList` 함수는 파라메터로 넘겨받은 data를 this 키워드를 이용해 함수 내 변수로 저장해둡니다. `this.data = data` 이런 식으로요.
- `this.render = function{ ... }` 형태로 TodoList 함수 내에 render function을 작성합니다.
	- 이 함수는 data를 이용해 data 배열을 순회하며 각 배열첨자의 text를 html로 만든 뒤, `todo-list`라는 id를 가진 div에 data의 text가 렌더링되도록 작성합니다. 아래 Tip을 참고하세요.
- 위에서 작성한 `TodoList` 함수를 `var todoList = new TodoList(data);` 형태로 생성한 후, `todoList.render()` 함수를 호출하여 실행되게 작성합니다.

## 구현 방향 
data.text 값을 가져와 todo-list에 data를 넣어준다. 
for문이나 forEach문을 활용하여 값을 넣어 준다. 

## 어려웠던 점 
data.text의 값을 입력할때 console 상에서는 값이 모두 찍혀있는데, 
innerHTML을 사용할때 마지막 값만 입력되어서 많이 어려웠다.

## 질문 

# [미션1] TodoList 컴포넌트 작성 - 보너스 구현사항 #50
## 구현 방향

## 어려웠던 점 

## 질문 

# [미션1] 보너스 구현사항 - 다중 컴포넌트 #57
## 구현 방향 

## 어려웠던 점 

## 질문 

# [미션1] 보너스 구현사항 - isCompleted 처리 #66
## 구현 방향 

## 어려웠던 점 

## 질문 

# [미션1] 보너스 구현사항 - setState #67
## 구현 방향 

## 어려웠던 점 

## 질문 