export default function UserList(user, $target, $btn, settingTodos) {
    this.$target = $target;
    this.$btn = $btn;
    this.user = user;

    this.$ul = document.createElement('ul');


    this.addEventListner = () => {
        this.$ul.addEventListener('click', (e)=>{
            settingTodos(e.target.dataset.index);
        })

        this.$btn.addEventListener('click', (e)=>{
            document.getElementById('user-list').style.display = 'block';
            document.getElementById('todo-list').style.display = 'none';
            document.getElementById('user-name').style.display = 'none';
        })

    }

    this.render = () => {
        this.$ul.innerHTML = this.user.map((u, idx)=>`<li data-index=${idx}>${u}</li>`).join(' ');
        this.$target.prepend(this.$ul);
    }
    
    this.render();
    this.addEventListner();
}