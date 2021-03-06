# [미션2] TodoApp 업그레이드하기
## 미션
- 기존 미션1 에서 진행했던, index.html 안에 있던 TodoList 함수는 TodoList.js 라는 이름의 스크립트로 분리합니다.
- new TodoList() 를 실행했던 코드 구문은 index.js 라는 이름의 스크립트로 분리합니다.
- 미션1을 참고하여 index.html 파일을 생성한 뒤, 위에서 분리한 두 스크립트를 로딩하도록 합니다.
- 변수 선언은 var 대신 let, const로만 사용해주세요.
- <input type="text"> input에 할 일을 입력하여 TodoList 컴포넌트의 데이터에 추가하도록 합니다.
- 별도의 입력 버튼을 만들어서 버튼 클릭 시 추가 되게 하거나, 엔터키 입력으로 처리하거나 하는 건 자유롭게 합니다.
- TodoList로 그려지는 할 일 목록에 아래의 기능을 추가합니다.
  - 할 일 텍스트 뒤에 버튼을 하나 추가합니다. 해당 버튼을 클릭하여 할 일이 삭제되게 만듭니다.
  - 할 일 텍스트를 클릭하면 해당 Todo의 isCompleted 값을 true로 만듭니다.
- isCompleted가 true인 경우와 false인 경우를 구분할 수 있도록 TodoList의 html string을 작성합니다.
  - Todo Text 앞에 (완료) 라는 텍스트를 붙이는 방법
  - 삭선 처리 하는 방법(<strike>태그로 감싸기</strike>)
  - 그외 본인이 생각하기에 좋아보이는 방법을 써봅시다.

# [미션2] 보너스 구현사항 - input 컴포넌트화 하기 #76
## 미션
- 할 일을 추가하는 부분을 컴포넌트화 시켜보세요.
  - 이름은 TodoInput으로 합시다.
- App 이라는 컴포넌트를 만든 뒤, 이 App이 TodoInput과 TodoList를 관리하는 구조가 되게 만듭니다.

# [미션2] 보너스 구현 사항 - TodoCount 컴포넌트 #77
## 미션
- TodoCount 라는 컴포넌트를 만듭니다.
  - 해당 컴포넌트는 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시합니다.
  - TodoList 컴포넌트 아래에 렌더링 되도록 합니다.


# [미션2] 보너스 구현사항 - Event delegate #81
## 미션
- todo 데이터의 변동에 따라 해당 아이템을 렌더링하는 DOM이 늘어나고, 삭제되면 해당 todo DOM의 각종 이벤트를 매번 다시 걸어야합니다.
- 이를 Event delegate 기법을 이용하면 쉽게 처리할 수 있습니다.


# [미션2] 보너스 구현 사항 - 커스텀 이벤트 #90
## 미션
- 입력하는 곳 옆에 버튼을 하나 만듭니다. 이 버튼을 누르면 Todo가 모두 삭제됩니다.
  - 버튼 클릭 시 removeAll 이벤트가 발생하도록 합니다.
  - App에서 removeAll 이라는 이벤트를 받도록 합니다.
  - 해당 이벤트를 수신하면 현재 TodoList에 있는 모든 데이터를 삭제합니다.


# [미션2] 보너스 구현사항 - localStorage #91
## 미션
- todo 데이터를 하드코딩 해놓은 부분을 삭제합니다.
- localStorage를 활용해 todo data가 변경될 때마다 localStorage에 저장하게 합시다.
- 프로그램 초기 기동 시 todo는 localStorage에 저장해둔 todo가 있다면 그걸 사용하고, 없으면 빈 배열로 만듭니다.
- 새로고침 시 입력해둔 todo가 유지해되도록 localStorage를 활용해봅시다.


## 진행 + 느낀점 
바닐라 스크립트로 작업을 하는것이 어색한 초보입니다 ㅜ0ㅜ 그래도 열심히 나름 최선을 다해보았습니다..!!

아직 혼자서 코드의 로직을 구성하는 작업이 어려워서 다른 분들의 소스코드와 지난번 5기 코드 리뷰 인터넷 강의를 참고하면서 작업 하였습니다. 

코드 리뷰 해주신 소스에서 조금 수정 하여 올려 봤는데 개인 적으로 아직 공통적으로 함수 선언 하여 값을 불러온다던지 소스를 전체적으로 정리 하는게 어렵더라구요. 

구현 한 부분은 필수 구현사항 #90 #76 #77 하였습니다.  

ps. 지난번 5기 강의를 보고 느낀건데 모든 구현 사항(보너스 구현사항 포함)에 대해서 스터디 시간에 다 라이브코딩을 해주시진 않던데 (아쉽게도 다 구현 하기에는 시간이 부족한것 같더라구요.) 나머지 부분에 대해서는 소스 작업 해주셔서 git에 공유 가능할까요?? 필수 구현사항에 대해서 잘 알려주시지만 나머지 보너스 구현사항도 어떤식으로 작업하는지 궁금하더라구요. 다른분들 코드 보는것도 많이 도움이 되지만 그래도 한번 쭉 전체적으로 로토님이 설명해주셨던 코드 기반으로 작성한 소스를 보면 나중에 복습할 때 더 매끄럽게 도움이 될것같아요.! 

## 궁금한점 
App.js 
...this.data, 
>> ... 표기를 하여 값을 호출 하였는데 처음 보는 표현? 이었습니다. 해당 문법에 대해 알고 싶은데 뭐라고 구글링 해야 할까요?

TodoInput.js 
function TodoInput($target, { onAddTodo }) 
>> 함수 파라미터 자리에 객체 처럼 값을 넣어 표현 해 주셨는데 해당 이것도 역시 어떤 표현인지 이름이 궁금합니다! 

TodoList.js 
this.$target.querySelector('.todo-data__listbox') 
>> 해당부분 this.$target에서 자식요소를 선택하려고 했는데 childe나 childeNodes 로는 선택 할수 가 없더라구요. querySelector 보다 더 매끄럽게? 선택할 수 있는 방법이 어떤것 이 있을까요.

TodoCount.js
>> 아직 completed 작업 중입니다! 