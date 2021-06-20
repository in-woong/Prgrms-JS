export default function ($parent){
  // TodoCount의 DOM 요소 생성
  const $todoCount = Object.assign(document.createElement('span'), {className: 'todo-count'});
  
  // 갱신된 todoList를 바탕으로 재 렌더링
  this.render = todoList => { 
    const count = todoList.reduce((acc, item) => {
      return acc + (item.isCompleted ? 1 : 0);
    }, 0);
    $todoCount.innerHTML = `완료 된 todo : <span class="count">${count}</span>`;
  }
  
  // DOM 구축
  const buildDOM = () => $parent.appendChild($todoCount);

  /////////////////////////////////////////////////////////////////////
  buildDOM();
};

