export default function ($parent){
  // todoCount의 DOM 요소
  const elements = {
    $todoCount : Object.assign(document.createElement('span'), {className: 'todo-count'}),
  }
  
  // 넘겨 받은 data를 바탕으로 render 해줄 함수
  const renders = {
    todoListRender : todoList => { 
      const count = todoList.reduce((acc, item) => {
        return acc + (item.isCompleted ? 1 : 0);
      }, 0);
      elements.$todoCount.innerHTML = `완료 된 todo : <span class="count">${count}</span>`;
    },
  }
  
  // mount
  const mount = () => $parent.appendChild(elements.$todoCount);

  // 상위 컴포넌트를 위한 메소드
  this.renders = renders;
  
  /////////////////////////////////////////////////////////////////////
  mount();
};

