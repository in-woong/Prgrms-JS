export default function Username({$target, initialState}){
    this.$target =  document.querySelector('.section_userlist');
    this.state = initialState;
    
    this.$UserName = document.createElement('h2')
    this.$UserName.classList.add('user_name')
    this.$target.appendChild(this.$UserName)

    this.setState = function(nextState) {
        this.state = nextState
        this.render()
    }

    this.render =() =>{
        this.$UserName.innerHTML = `${this.state.username}의 TodoList입니다`
    }

    this.render()
}
