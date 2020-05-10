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
   - `makeNewTodoSection`

     - 새로운 할 일을 입력/추가하는 newTodoSection(div)을 생성하는 함수
     - 엔터 입력 시 입력값이 있을 경우 데이터를 update
     - data update 후

   - `TodoList`

     - new.target을 사용해 new로 function을 실행했는지 check
     - this.data
       - todo
     - setState
       - todoList를 생성할 시, validate된 data를 this.data로 initialize하는데, 기존의 setState는 추가된 data뿐만 아니라 기존의 data까지 포함한 data를 받아 불필요한 validate을 수행. 따라서 todoList생성 이후에는 updateData를 통해서만 data를 업데이트하는 것을 규칙으로 하고 setState를 수정.

4) index.js

   - `import` todoData.js , todoList.js
   - import한 datas와 todoList 구성자를 사용해 3개의 `todoList` 생성

5. index.html

   - index.js를 defer 방식으로 load 및 실행
