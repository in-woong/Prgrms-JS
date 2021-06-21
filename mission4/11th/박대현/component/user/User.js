import { getUserList } from '../../api/user.js';
import UserInput from './UserInput.js';
import UserList from './UserList.js';
export default function($parent, { handleSelectUsername }, { spinnerOffRender, spinnerOnRender }){
  
  // user가 관리할 하위 컴포넌트
  const components = []

  // user가 관리할 data
  const data = {
    originalUserList : [],
    filteredUserList : [],
    username : '',
  }

  // user의 DOM 요소
  const elements = {
    $user : Object.assign(document.createElement('aside'), {className:'user-wrapper'}),
    $username : Object.assign(document.createElement('div'), {className:'user-name', innerHTML:'현재 선택된 사용자 : <span>없음</span>'})
  }

  // data의 상태를 변경하게 해줄 함수
  const setState = {
    setOriginalUserList : newUserList => {
      data.originalUserList = newUserList
    },
    setFilteredUserList : newFilteredUserList =>  {
      data.filteredUserList = newFilteredUserList
    },
    setUsername : newUsername => {
      data.username = newUsername
    }
  }

  // 넘겨 받은 data를 바탕으로 render해줄 함수
  const renders = {
    userListRender : (keyword) => {
      const { filteredUserList, username } = data;
      const [ _, userList ] = components;
      userList.renders.userListRender(filteredUserList, keyword);
    },
    usernameRender : () => {
      elements.$username.querySelector('span').innerText = data.username;
    }
  }
  
  // user 포함 하위 컴포넌트가 다룰 이벤트 핸들러
  const eventHandlers = {
    handleSearch: keyword => {
      const pattern = new RegExp(keyword,'gi');
      setState.setFilteredUserList(data.originalUserList.filter(username => pattern.test(username)));
      renders.userListRender(keyword);
    },
    handleSelectUsername : (keyword, isNewUser) => {
      setState.setUsername(keyword);
      if(isNewUser) setState.setOriginalUserList([...data.originalUserList, keyword]);
      handleSelectUsername(keyword);
      renders.usernameRender();
    }
  }

  // 서버로부터 data를 받아오는 함수
  const loaders = {
    loadTotalUserList : async () => {
      try {
        spinnerOnRender();
        const userList = await getUserList();
        setState.setOriginalUserList([...userList]);
        setState.setFilteredUserList([...userList]);
        renders.userListRender();
      } catch (error) {
        console.error(error);
        alert('UserList 로드 실패');
      } finally {
        spinnerOffRender();
      }
    }
  }
  
  // mount
  const mount = () => {
    const { $user, $username } = elements;
    $user.appendChild($username);
    components.push(new UserInput($user, eventHandlers));
    components.push(new UserList($user, eventHandlers));
    $parent.appendChild($user);
  }

  ///////////////////////////////////////////////////////////
  mount();
  loaders.loadTotalUserList();
}