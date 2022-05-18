# 구현사항 확인하기

## 필수 구현사항 설명

- [x] function style의 문법, class style의 문법 어느 것을 사용해도 좋습니다.
- [x] new 키워드를 통해 생성해서 사용됩니다.
- [x] 파라메터로 아래와 같은 형태의 data를 넘겨받습니다.
  > var todoList = new TodoList(data);와 같은 형태로 파라메터를 넘기고, 생성해서 사용합니다.s

### 보너스 구현사항

#### new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기

- [x] null 혹은 undefined가 넘어오면?
- [x] array가 아닌 형태로 넘어오면?
      : [MDN isArray() 메서드 인자가 Array인지 판별](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [x] 데이터 내용이 이상하면?

참고 : https://negabaro.github.io/archive/js-isEmpty

#### new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기

- [x] function 형태의 선언인 경우에만 해당  
       : [MDN New Target](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new.target)

#### 다중 컴포넌트

- [x] 다중 컴포넌트

##### html

- <div id="todo-list"></div> 외의 다른 div를 두 개 더 html 코드에 만듭니다.
- div의 id는 적당한 이름으로 지어주세요.

##### js

- var data = [{ ... }] 외에 todo를 담고 있는 array data를 두 개 더 만듭니다.
- todo의 내용은 본인의 현재 todo를 담아서 넣으면 더 좋겠죠?
- TodoList 컴포넌트를 총 세 개 만듭니다. 첫 번째 컴포넌트에는 제가 넣어둔 data와 #todo-list에 렌더링하고, 나머지 두 개는 여러분이 추가하신 div + data를 활용해서 만들어주세요.

#### isCompleted 처리

- [x] isCompleted 처리  
      : 삼항연산자를 이용하여 처리

#### setState

- [ ] setState
