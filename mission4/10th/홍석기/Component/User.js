import { fetchUsers, fetchTodo } from "../Api/api.js";

export async function User() {
    const $wrapperDiv = document.createElement("div");
    const $userDiv = document.createElement("div");
    const $userTodoDiv = document.createElement("div");
    $wrapperDiv.setAttribute("class", "content_wrap");
    $userDiv.setAttribute("class", "user_list");
    $userTodoDiv.setAttribute("class", "each_user_todo");

    const data = await fetchUsers();
    const htmlString = data.map(user => {
        return `<div><a class = "users" href = "#none" data-name = "${user}">${user}</a></div>`;
    }).join("")
    $userDiv.innerHTML = htmlString;
    
    document.querySelector("#app").appendChild($wrapperDiv);
    $wrapperDiv.appendChild($userDiv);
    $wrapperDiv.appendChild($userTodoDiv);

    document.querySelectorAll(".users").forEach(tag => {
        tag.addEventListener("click", async(e) => {
            const selectedUserTodoData = await fetchTodo(e.target.dataset.name);
            const htmlString = `${e.target.dataset.name}'s todolist is...`
            const tmp = selectedUserTodoData.map((ele, index) => {
                return `<ul>${index + 1}: ${ele.content}</ul>`
            }).join("")
            $userTodoDiv.innerHTML = htmlString + tmp;
        })
    })
}