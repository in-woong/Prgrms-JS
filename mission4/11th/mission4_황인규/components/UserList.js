
function UserList(params){
    const $target = params.$target;
    const users = params.users;
    const onClick = params.onClick;
    this.usersList = params.data;
    this.$clickedKeyword = '';
    users();
  
    this.clickUserName = (li) => {
        console.log(li.innerHTML);
        this.$clickedKeyword = li.innerText;
        
        
        onClick(this.$clickedKeyword);
    }

    $target.addEventListener("click", (event) => {
        const {classList} = event.target
        if(classList.contains("user-list-element"))
            this.clickUserName(event.target.closest("li"));
    })

    this.render = () => {
       
        
        const htmlString = this.usersList.map((userList) =>{
            
            const className = `user-list-element ${ this.$clickedKeyword === userList ? 'current' : '' }`.trimEnd();
            return `<li class = "${className}" user-name = "${
              userList
            }">${userList}</li>`
        })

        $target.innerHTML = `<ul class="user-list">${htmlString.join('')}</ul>`
    }

    
    this.setState = (nextData) => {
        this.usersList = nextData;
        this.render()
    }
}

export default UserList;