export default function ($parent, { handleSelectUsername }){
  // userList의 DOM 요소
  const elements = {
   $userList : Object.assign(document.createElement('ul'), {className:'user-list'}),
  }

  // 넘겨 받은 data를 바탕으로 render해줄 함수
  const renders = {
    userListRender:(userList, username) => {
      const templateByUsername = userList.length === 0 ? 
      `<li class="user-item new-user">
        <span>${username}</span>(으)로 생성하기
      </li>` : '';

      const templateByList= userList.reduce((acc, item) =>  acc + 
        `<li class="user-item">
            <span>${item}</span>
        </li>`, '');

      elements.$userList.innerHTML = templateByUsername + templateByList;
    },
  };
  
  // mount
  const mount = () =>  $parent.appendChild(elements.$userList);

  // 등록할 이벤트 리스너
  const eventListeners = () => {
    elements.$userList.addEventListener('click', e => {
      const childElem = e.target;
      const parentElem = childElem.parentElement;
      if(childElem.classList.contains('user-item')){
        const isNewUser = childElem.classList.contains('new-user');
        const keyword = childElem.querySelector('span').innerText.trim();
        handleSelectUsername(keyword, isNewUser);
      }
      else if(parentElem.classList.contains('user-item')){
        const isNewUser = parentElem.classList.contains('new-user');
        const keyword = e.target.innerText.trim();
        handleSelectUsername(keyword, isNewUser);
      }
    })
  };

  // 상위 컴포넌트를 위한 메소드
  this.renders = renders;

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  mount();
  eventListeners();
};
