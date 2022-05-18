export default function ({$app, initialState, onClick}){
    this.state = initialState;
    this.onclick = onClick;

    this.$user = document.createElement('div');
    this.$user.className = 'users-wrap';

    $app.appendChild(this.$user);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        const $userCurrent = this.state.userCurrent;
        this.$user.innerHTML = `<ul>
                ${this.state.usersList.map(user => {
                    return `<li data-user="${user}" class="${user === $userCurrent? 'user-checked' : ''}">${user}</li>` 
                }).join('')}
                </ul>`;
    }

    this.$user.addEventListener("click", e => {
        if(e.target.tagName === 'LI'){
            const eUser = e.target.dataset.user;
            this.onclick(eUser);
        }
    });

    this.render();
}