'use strict';
import TodoList from './TodoList.js';

const form = document.querySelector('.new_todo');
const input = document.querySelector('.footer_input');
const add_btn = document.querySelector('.footer_btn');
const items = document.querySelector('.items');

input.focus(); //마우스 클릭안해도 입력가능 (더 편하게 입력할 수 있도록)

form.addEventListener('submit', (event) => {
  event.preventDefault(); //form태그의 submit은 기본적으로 브라우저 새로고침함. 이를 없앰
  onAdd(); 
});

//add 클릭되었을 때 
function onAdd() {
  //1. 입력된 값 받아옴
  const input_text = input.value; 

  //입력된 데이터를 객체로 생성 
  const data=createData(input_text, false);
  
  //아무것도 input에 작성되지 않았을 때 함수종료
  if(input_text === '') {
    input.focus();
    return;
  }
  //2. 새로운 아이템 만들기(item_row)
  const item = createItem(data); 
  //3. items안에 새로 만든 아이템 추가 
  items.prepend(item);
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});
  //5. input 초기화 
  input.value = '';
  input.focus(); 
}

function createData(input_text) {
  const data = [
    {
      text: `${input_text}`,
      isCompleted: false
    }
  ]
  return data;
}

let id = 0; 
function createItem(input_data) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
    <div class='item'>
      <span class='item_name' data-id=${id}>${input_data[0].text}</span>
      <button class='item_complete' type='button'>
        <i class="far fa-frown" data-id=${id}></i> 
        <span class="blind">삭제하기 버튼</span>
      </button>
    </div>`;
  id++; //아이템 새로 만들어질 때 마다 id++
  return itemRow;
}

//event delegate(81)
items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    const title = document.querySelector(`.item_name[data-id="${id}"]`);
    toBeDeleted.innerHTML=`
    <div class='item'>
      <span class='item_name' data-id=${id}><s>${title.innerHTML}</s></span>
      <button class='item_complete' type='button'>
        <i class="far fa-smile"></i> 
        <span class="blind">삭제하기 버튼</span>
      </button>
    </div>
    `;
    items.appendChild(toBeDeleted); //완료된 것은 가장 마지막에 넣음
  }
});

//TodoList class 사용
// const data1 = [
//   {
//     text: 'JS 공부하기',
//     isCompleted: true
//   },
//   {
//     text: 'JS 복습하기',
//     isCompleted: false
//   }
// ];


// const todoList1 = new TodoList(data1, document.querySelector('#todo-list1'));

// todoList1.setState([
//   ...data1,
//   {
//     text: '아이스크림 사기',
//     isCompleted: false
//   }
// ])
