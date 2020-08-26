### 필수 구현사항 설명
function style의 문법, class style의 문법 어느 것을 사용해도 좋습니다.
new 키워드를 통해 생성해서 사용됩니다.
파라메터로 아래와 같은 형태의 data를 넘겨받습니다.
var data = [
  {
    text: 'JS 공부하기'
  },
  {
    text: 'JS 복습하기'
  }
]
var todoList = new TodoList(data);와 같은 형태로 파라메터를 넘기고, 생성해서 사용합니다.

해당 컴포넌트에 render 함수를 작성합니다.
이 함수는 파라메터로 넘겨받은 data를 순회하며 각 배열첨자의 text를 html string으로 만든 뒤, todo-list라는 id를 가진 div에 innerHTML을 이용해 렌더링 되도록 합니다.
이 함수는 별도의 파라메터 없이 todoList.render() 형태로 실행되도록 만듭니다.

#### 구현 flow

1.  class TodoComponents render함수 todos data 적용 




#### 보너스 구현 사항 1

- [x] new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기 -> class를 써서 따로 처리하지는 않음 
- [x] null 혹은 undefined가 넘어오면? todos ?
- [X] array가 아닌 형태로 넘어오면? todos ?
데이터 내용이 이상하면?
new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
function 형태의 선언인 경우에만 해당
에러는 우선 에러를 내야하는 상황이 생기는 경우 throw new Error("error message") 문법을 사용해주세요.

### 보너스 구현 사항 2 
html
<div id="todo-list"></div> 외의 다른 div를 두 개 더 html 코드에 만듭니다.
div의 id는 적당한 이름으로 지어주세요.
js  
var data = [{ ... }] 외에 todo를 담고 있는 array data를 두 개 더 만듭니다.
todo의 내용은 본인의 현재 todo를 담아서 넣으면 더 좋겠죠?
TodoList 컴포넌트를 총 세 개 만듭니다. 첫 번째 컴포넌트에는 제가 넣어둔 data와 #todo-list에 렌더링하고, 나머지 두 개는 여러분이 추가하신 div + data를 활용해서 만들어주세요.


### 보너스 구현 사항 setState: TodoList 함수에 setState(nextData)라는 함수를 만듭니다.

이 함수는 해당 컴포넌트 초기 생성 시 넘겼던 data 파라메터를 nextData로 대체하고
컴포넌트를 다시 렌더링합니다.
해당 함수를 추가한 뒤, new TodoList(...) 하는 코드 이후에 해당 컴포넌트의 인스턴스에 todoList.setState(새로운 배열) 형태로 데이터만 다시 넣었을 때 컴포넌트가 다시 렌더링 되도록 작성해주세요.

setState 함수 호출 후 다시 todoList.render()를 호출하는 것이 아니라, setState 함수 내에서 화면을 다시 렌더링하는 것까지 처리해야 합니다.