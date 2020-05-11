# mission2

## #75 TodoApp 업그레이드하기

### #75.1 파일 구성

> index.html
>
> index.js
>
> - const todoList1
> - const todoList2
> - const todoList3
>
> > todoData.js
> >
> > - const data
> > - const data2
> > - const data3
> >
> > ---
> >
> > todoList.js
> >
> > - func TodoList
> >
> > > utils.js
> > >
> > > - validateData
> > > - updateData
> > >   - isValidateData

<br>

### #75.2 구현 내용

1. utils.js

   - `validateData`
     - data를 받아 validate
     - isValidDataFormat
       - data array의 items의 형식을 check
   - `updateData`
     - 새로운 data를 받아 data를 validate한 후 this.data에 push

2) todoData.js

   - `data`를 const로

3. todoList.js

   - `import` utils.js
   - `TodoList`

     - `new.target`을 사용해 new로 function을 실행했는지 check
     - `setState`
       - todoList를 생성할 시, validate된 data를 this.data로 initialize하는데, 이전의 setState는 추가된 data뿐만 아니라 기존의 data까지 포함한 data를 입력받아 불필요한 validate을 수행하게 됨. 새롭게 작성한 setState는 todoList 생성 이후 updateData를 통해 추가되는 data만 validate한 후 data를 렌더링
     - `makeNewTodoSection`

       - 새로운 할 일을 입력/추가하는 newTodoSection(div)을 생성하는 함수
       - enterkey 입력 또는 addBtn 클릭 시, data를 추가하고 setState후 input을 focus()

4) index.js

   - `import` todoData.js , todoList.js
   - import한 datas와 todoList 구성자를 사용해 3개의 `todoList` 생성

5. index.html

   - index.js를 defer 방식으로 load 및 실행

### #75.3 질문 사항

- data가 변경될 때, 새롭게 수정되는 data에 관련된 요소만 변경하는 구조에 대해 고민을 해봤습니다.
  data변경을 반영해 inner에 속하는 element를 새롭게 만들 경우 이를 outer에 append해야될텐데요. 이 떄 outer element에서 inner를 querySelect해 지우고 새로운 inner element를 추가하는 방법 외에는 다른 방법이 없을까요?
- 현재 코드의 방식으로는 일부의 data 변경에 따라 전체를 새롭게 render하게 되어 렌더링 방식이 비효율적이라 생각됐습니다.. render하는 항목을 나눈다면 필요한 부분만 새롭게 render하면 된다고 생각했지만, 항목을 세분화할수록 html style로 작성하는 코드가 줄어들뿐만 아니라 querySelect로 inner HTML을 지우고 새롭게 생성되는 inner HTML을 append하는 코드가 증가해 코드가 지저분해질 거라 생각했습니다. 제가 생각한 부분이 맞는 내용인지에 대해 여쭤보고싶습니다.
- 리엑트를 crash course로 아주 얕게 접해본 적이 있었는데요. 리엑트에서는 가상의 dom을 만들어 state가 변경될 때의 render와 가상의 dom(이전 state)을 비교해 수정된 부분만 새롭게 렌더링한다고 들었던 어렴풋한 기억이 있어.. 위에서 제가 느낀 부분이 이러한 리엑트의 렌더링 방식과 연관성이 있는지가 궁금했습니다.
- 위에서 언급한 내용들이 틀린 내용이라면 어떻게 필요한 데이터만을 새롭게 업데이트할 수 있는지 궁금합니다.
- todoList.js 파일의 28~32번쨰 code line에 코멘트를 남겼는데요. this.makeNewTodoSection 함수에 관한 커멘트이자 위 질문사항들과 관련되었다고 생각하는 코드입니다.

- 파일을 분리해보고 import export를 해봤는데 폴더 구성과 module 사용이 올바른지 확인 부탁드립니다!
