import { getUsers }from '../Util/api.js'

export default function Users($target, data, onClickUserList){

    this.data = data;

    this.prerender = async () => {
        this.$userList = document.createElement('ul');
        this.userDatas = await getUsers();
        this.$userList.id = 'user-list';
        $target.appendChild(this.$userList);
        this.render();
        this.bindEvent();
    }

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.bindEvent = () => {
        this.$userList.addEventListener("click", evt => {
            if(evt.target.tagName==="LI"){
                onClickUserList(evt.target.innerHTML);
            }
        })
    }

    this.render = () => {
        this.$userList.innerHTML = this.userDatas.map((data) => 
            data === this.data.curUser ? `<li style="color: red">${data}</li>`
            : `<li>${data}</li>`
        ).join('');
    }

    this.prerender();

}
