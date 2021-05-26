import { fetchTodo, inputTodo, deleteTodo, toggleTodo } from "../Api/api.js"

export function EventHandler({$addBtn, $targetList, userName, onRenderUpdate}) {
    $addBtn.addEventListener("click", async(e) => {
        const todoText = document.querySelector("#todo-input").value;

        if(todoText.length > 0) {
            await inputTodo(userName, todoText);
            const updatedData = await fetchTodo(userName);
            onRenderUpdate(updatedData);
        } else {
            alert("Todo have to be at least one character.");
        }

        document.querySelector("#todo-input").value = ""
    })

    $targetList.addEventListener("click", async(e) => {
        const id = e.target.closest('li').dataset.id;
        if (e.target.className === 'remove-button') {
            e.stopPropagation();
            await deleteTodo(userName, id);
            const updatedData = await fetchTodo(userName);
            onRenderUpdate(updatedData);
          } else {
            await toggleTodo(userName, id);
            const updatedData = await fetchTodo(userName);
            onRenderUpdate(updatedData);
          }
    })
}