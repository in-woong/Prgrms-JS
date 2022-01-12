import Username from './Username.js'
import Userlist from './UserList.js'

export default function UserContainer({ initialState, setState, updatedTodos }) {
    this.$target = document.querySelector('.section_userlist'),
    this.state = initialState;
    this.setState = setState;
    this.updatedTodos  = updatedTodos;

    this.username = new Username({
        $target : this.$target,
        initialState: this.state,
    })

    this.userList = new Userlist({
        $target : this.$target,
        initialState: this.state,
        onSelectUser: async(username) =>{
            const nextState  = await this.updatedTodos(username)
            this.setState(nextState)
        }
    })

    this.setState = function(nextState){
        this.state = nextState;
        this.username.setState(this.state)
        this.userList.setState(this.state)
    }
}
