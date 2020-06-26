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

# [미션1] 보너스 구현사항 - 다중 컴포넌트 #57
## 미션
- <div id="todo-list"></div> 외의 다른 div를 두 개 더 html 코드에 만듭니다.
- div의 id는 적당한 이름으로 지어주세요.

- var data = [{ ... }] 외에 todo를 담고 있는 array data를 두 개 더 만듭니다.
- todo의 내용은 본인의 현재 todo를 담아서 넣으면 더 좋겠죠?
- TodoList 컴포넌트를 총 세 개 만듭니다. 첫 번째 컴포넌트에는 제가 넣어둔 data와 #todo-list에 렌더링하고, 나머지 두 개는 여러분이 추가하신 div + data를 활용해서 만들어주세요.

## 구현 방향 
todo-list array data 추가로 TodoList 함수에 파라미터 값으로 해당 element 값들을 넣어줬다. 

## 어려웠던 점 

## 질문 

# [미션1] 보너스 구현사항 - isCompleted 처리 #66
## 미션
- data의 각 object에 text외에 isCompleted 라는 필드를 추가합니다.
- 해당 값은 true, 혹은 false 값을 지정해주세요.
var data = [
  { 
    text: '코딩하기',
    isCompleted: true
  },
  {
    text: '집안 청소하기',
    isCompleted: false
  }
]
- TodoList 컴포넌트 내에 text 렌더링 시, isCompleted 값이 true인 경우 <s> 태그를 이용해 삭선처리를 해주는 걸 추가합니다.

## 구현 방향 
if문으로 true / false 구현 

## 어려웠던 점 

## 질문 

# [미션1] TodoList 컴포넌트 작성 - 보너스 구현사항 #50
## 미션
- new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기
  - null 혹은 undefined가 넘어오면?
  - array가 아닌 형태로 넘어오면?
  - 데이터 내용이 이상하면?
- new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
  - function 형태의 선언인 경우에만 해당
에러는 우선 에러를 내야하는 상황이 생기는 경우 throw new Error("error message") 문법을 사용해주세요.

## 구현 방향 

## 어려웠던 점 

## 질문 
!Array.isArray(data)에 대해서는 제대로 구동이 되는데 typeof로 undefined나 null을 체크 해야 할 경우 
객체의 값 자체가 잘못 됐을 경우 어떤식으로 타입검사를 해야할지 잘 모르겠습니다. 

# [미션1] 보너스 구현사항 - setState #67
## 미션
- TodoList 함수에 setState(nextData)라는 함수를 만듭니다.

- 이 함수는 해당 컴포넌트 초기 생성 시 넘겼던 data 파라메터를 nextData로 대체하고 컴포넌트를 다시 렌더링합니다.
- 해당 함수를 추가한 뒤, new TodoList(...) 하는 코드 이후에 해당 컴포넌트의 인스턴스에 todoList.setState(새로운 배열) 형태로 데이터만 다시 넣었을 때 컴포넌트가 다시 렌더링 되도록 작성해주세요.

- setState 함수 호출 후 다시 todoList.render()를 호출하는 것이 아니라, setState 함수 내에서 화면을 다시 렌더링하는 것까지 처리해야 합니다.

## 구현 방향 
질문이 무슨 내용인지 이해가 안가요 ㅠ0ㅠ... 

## 어려웠던 점 

## 질문 