export default function TodoRemoveAll() {
    const removeBtn = document.querySelector("#remove-all-btn");

    const removeTodoEvent = new CustomEvent('RemoveAll');

    removeBtn.addEventListener('click', (e) =>{
        e.target.dispatchEvent(removeTodoEvent);
    });

}
