function TodoDelete($target, onTodoDelete) {
    $target.addEventListener('click', e => {
        if (e.target.innerText === 'del') {
            onTodoDelete(e.target.value)
        }
    })
}
