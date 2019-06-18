### Spec 

요구사항 정리 

## Basic
- [x] 삭제 버튼 추가히여 todoData 삭제 
- [X] 할 일 텍스트를 클릭하면 해당 Todo의 isCompleted 값을 toggle 시킵니다. 
-> 토글 시킬 때 html 변화는 본인이 선호하는 방법으로 적용하기 
ex) 완료, strike 등 
 
## Bonus 
- [X] TodoInput 컴포넌트 제작 -> Form으로 바로 제작 
- [ ] TodoCount 컴포넌트 제작
- 해당 컴포넌트는 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시합니다.
  TodoList 컴포넌트 아래에 렌더링 되도록 합니다.
- [X] App을 통해서 TodoInput, TodoCount, TodoList가 유기적으로 동작하도록 구성  
- [X] Event Delegation 적용하기 
 
## Bonus - Hard
- [ ] 커스텀 이벤트 활용
- [ ] removeAll 버튼 적용하기 
- [ ] TodoList -> removeAll 받아서 모든 데이터 날리기 
- [ ] 로컬스토리지 적용하기 

## 추가
- [ ] 그 외 데이터에 들어있는 많은 값들로 화면을 풍부하게 만들어봅시다.
- [ ] 각종 방어코드 추가

### Tip 
* 우선 작업해야하는 화면을 기준으로 컴포넌트 단위로 쪼갭니다.
* 컴포넌트 마다의 역할을 생각하고, 각 컴포넌트마다 한 가지의 역할을 하도록 합니다.
* 컴포넌트간의 의존성을 생각해봅니다. 
* 어떤 컴포넌트가 너무 불필요한 정보를 들고 있는 건 아닌지, 혹은 너무 무의미하게 다른 컴포넌트들을 의존하는지를 곰곰히 생각해봅니다.
* 데이터의 흐름도 중요한데, 애플리케이션 전체적으로 데이터가 어떻게 흘러가는지를 손으로 가볍게 그려보거나 머릿 속에 떠올리고 있는 것도 설계에 많은 도움이 됩니다.

### Component 


App
- TodoForm 
- TodoList
- App
 
- localStorage

### App 

1. TodoForm - TodoList - 이벤트와 data의 흐름을 관장해서 유기적으로 동작하도록 해준다. 


### TodoForm

1. add Event를 받아서 todo를 add 시킨다 
2. 사용자 key event에 따라서 혹은 등록되었을 때  form을 reset한다  


### TodoList

1. list data를 app에서 받아서 todo Template에 맞게 render 시켜준다. 
2. 각 todo item의 이벤트를 받아 todo update
- 2.1 todo completed toggle 이벤트를 받아서 todo를 update시켜준다.
- 2.2 todo remove event를 받아서 todo를 update시킨다. 
- 2.3 removeAll 이벤트를 받아서 todo를 update 시킨다. 

### Ux 생각해보기 


### ETC
