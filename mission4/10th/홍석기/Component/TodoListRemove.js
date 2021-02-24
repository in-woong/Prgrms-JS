import { fetchTodo, deleteAll } from "../Api/api.js"

export function TodoListRemove({$appTarget, userName, onRenderUpdate}) {
    const $target = document.createElement("button");
    const $targetText = document.createTextNode("Remove all")
    $target.className = "remove-all-button";
    $target.appendChild($targetText);
    $appTarget.appendChild($target);

    $target.addEventListener("click", async(e) =>{
        await deleteAll(userName);
        const updateData = await fetchTodo(userName);
        onRenderUpdate(updateData);
    })
}