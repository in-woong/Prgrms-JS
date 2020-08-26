export default function Users({user,onClickUser}){
    const $target = document.querySelector('#user-list');
    const $userName = document.querySelector('#user-name');
    $target.addEventListener('click',event=>{
        const userName = event.target.dataset.user;
        $userName.innerHTML = `${userName}의 TodoList입니다.`;
        onClickUser(userName);
    })
    this.render=(users)=>{
        if(users){
           const htmlString = users
            .map(user => `<button data-user="${user}">${user}</button>`)
            .join('')
           $target.innerHTML = htmlString 
        }
    }
    this.render();
}