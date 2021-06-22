import UserName from '../components/user/UserName.js'
import UserList from '../components/user/UserList.js'

function UserContainer({ $target, state, setAllState, setNextState }) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR)
  }
  this.$target = $target
  this.state = state
  this.setNextState = setNextState
  this.setAllState = setAllState

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
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.userName.setState(this.state)
    this.userList.setState(this.state)
  }
}

export default UserContainer
