# 🎯 미션1 - TodoList 컴포넌트 작성 #49

- TodoList 컴포넌트 작성
  - <s>function 형태</s>
  - class 형태로 구현 ✅

## ➕ 보너스 구현사항 #50

- new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기 ✅

  - [x] null 혹은 undefined가 넘어오면?
    ```js
    if (!data) {
      throw new Error('TodoList를 생성할 때 data는 필수값입니다.');
    }
    ```
  - [x] array가 아닌 형태로 넘어오면?
    ```js
    if (!Array.isArray(data)) {
      throw new Error('data는 array 타입이여야 합니다.');
    }
    ```
  - [x] 데이터 내용이 이상하면?

    - 필요한 프로퍼티가 모두 있는지 확인 (text, isCompleted)
    - 각 프로퍼티의 type이 올바른지 확인

    ```js
    newData.forEach((todo) => {
      //  todo의 타입이 object인지, todo가 nullable 할 때의 검증 추가
      if (typeof todo !== 'object') {
        throw new Error('data의 element는 object타입이어야 합니다.');
        //
      } else if (Object.keys(todo).length === 0) {
        throw new Error('data의 element로 빈 객체를 할당할 수 없습니다');
      }

      //  각 프로퍼티가 존재하는지 + 타입은 무엇인지 관심사로 묶어서 검증
      //  → text 프로퍼티 검증
      if (!todo.text) {
        throw new Error('text 프로퍼티가 존재하지 않습니다.');

        if (typeof todo.text !== 'string') {
          throw new Error('text 프로퍼티의 type은 string이여야 합니다.');
        }
      }

      //  → isCompleted 프로퍼티 검증
      if (!('isCompleted' in todo)) {
        throw new Error('isCompleted 프로퍼티가 존재하지 않습니다.');

        if (typeof todo.isCompleted !== 'boolean') {
          throw new Error(
            'isCompleted 프로퍼티의 type은 boolean이여야 합니다.'
          );
        }
      }
    });
    ```

  - ❓ 해당 구현사항을 `validateData`함수로 묶어서 클래스 외부에서 선언했는데, 혹시 이를 <span style="background-color: #fff5b1">클래스 내부로 구현할 수 있는 방법이 있을까요? </span>

    - [x] setter, getter사용으로 해결했습니다. ✨

    ```js
    set data(data) {
      // 유효성 검사 ✅
      this._data = data;
    }
    ```

    ```js
    get data() {
      return this._data;
    }
    ```

- <s>new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기</s>
  - [x] class 형태로 구현했으므로 생략 ✔️

## ➕ 보너스 구현사항 - 다중 컴포넌트 #57

- [x] TodoList 컴포넌트를 총 세 개 만듭니다.

  - 첫 번째 컴포넌트에는 제가 넣어둔 data와 #todo-list에 렌더링하고, 나머지 두 개는 여러분이 추가하신 div + data를 활용해서 만들어주세요.

  ```js
  constructor(data, selector) {
    this.data = data;

    // 파라미터로 받은 selector로 DOM element를 가져와서 멤버변수로 할당합니다.
    this.$todoList = document.querySelector(selector);
  }

  render() {
    // 멤버변수 $todoList에 코드를 구현합니다
    this.$todoList.innerHTML = this.data
      .map(({ text, isCompleted }) =>
        isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      )
      .join('');
  }
  ```

  ```js
  const todoList = new TodoList(data, '#todo-list');
  todoList.render();

  const todoList2 = new TodoList(data2, '#todo-list-2');
  todoList2.render();

  const todoList3 = new TodoList(data3, '#todo-list-3');
  todoList3.render();
  ```

## ➕ 보너스 구현사항 - isCompleted 처리 #66

- [x] data의 각 object에 text외에 isCompleted 라는 필드를 추가합니다.
  - 해당 값은 true, 혹은 false 값을 지정해주세요.
  ```js
  const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ];
  ```
- [x] TodoList 컴포넌트 내에 text 렌더링 시, isCompleted 값이 true인 경우 `<s>` 태그를 이용해 삭선처리를 해주는 걸 추가합니다.
  ```js
  this.$todoList.innerHTML = this.data
    .map(({ text, isCompleted }) =>
      isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
    )
    .join('');
  ```

## ➕ 보너스 구현사항 - setState #67

- `TodoList` 함수에 `setState(nextData)`라는 함수를 만듭니다.
  - [x] 이 함수는 해당 컴포넌트 초기 생성 시 넘겼던 data 파라메터를 nextData로 대체하고
  - [x] 컴포넌트를 다시 렌더링합니다.
  ```js
  setState(nextData) {
    this.data = nextData;
    this.render();
  }
  ```
