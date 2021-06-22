import UserName from '../components/UserName.js';
import UserList from '../components/UserList.js';

function UserContainer ({ $target, state, setState, setNextState }){
  this.$target = $target
  this.state = state
  this.setState = setState
  this.setNextState = setNextState

  this.userName = new UserName({
    $target: this.$target,
    state: this.state,
  })

  this.userList = new UserList({
    $target: this.$target,
    state: this.state,
    onSelectUser: async (userName) => {
      try {
        const nextState = await this.setNextState(userName)
        this.setState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

}

export default UserContainer;
