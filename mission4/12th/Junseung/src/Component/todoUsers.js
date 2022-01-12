import { getApi } from "../utils/fetchApi.js";

function TodoUsers(props){
    const { $target, getUsersTodo } = props;
    const $users = document.createElement("div");

    $users.setAttribute("class", "todoUsers");

    this.$target = $target;
    this.component = "";

    this.makeComponent = (data) => {
        const userDataHtml = data.map((dataItem) => {
            return `
                <li data-value = ${dataItem} data-flag = false>닉네임 ${dataItem}</li>
            `
        }).join(" ");

        return `<ul>${userDataHtml}</ul>`
    }

    this.setState = (newState) => {
        this.component = this.makeComponent(newState);
        this.render();
    }

    this.render = () => {
        this.$target.appendChild($users);
        $users.innerHTML = this.component;
    }

    // user들의 Todo항목을 나타내주는 함수
    this.makeUserComponent = (userDataList) => {
        const liHtml = userDataList.map((userData) => {
            const liChildHtml = (
                (userData.isCompleted) 
                ? `<s>${userData.content}</s>` 
                : `<span>${userData.content}</span>`
            )
            return `<li>${liChildHtml}</li>` 
        }).join(" ");

        return `<ul>${liHtml}</ul>`
    }

    this.referUsersEvent = () => {
        $users.addEventListener("click", async (e) => {
            const { tagName, dataset } = e.target;
            
            if (tagName === "LI"){
                if (!JSON.parse(dataset.flag)){
                    const userDataList = await getApi(dataset.value);
                    const userDataHtml = this.makeUserComponent(userDataList);
    
                    e.target.innerHTML = `닉네임 ${dataset.value}${userDataHtml}`
                    dataset.flag = true;
                    
                } else {
                    e.target.innerHTML = `닉네임 ${dataset.value}`
                    dataset.flag = false;
                    
                }
            
            }
        })
    }

    getUsersTodo();
    this.referUsersEvent();
}

export default TodoUsers;