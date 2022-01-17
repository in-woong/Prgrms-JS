function TodoInput({$app, doWhenInputted}) {

    const todoInput = document.createElement('input');
    $app.appendChild(todoInput);

    const removeAll = document.createElement('button');
    removeAll.textContent = 'Remove all';
    $app.appendChild(removeAll);
    
    todoInput.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || event.isComposing !== false) return;
        if (todoInput.value === null || todoInput.value.length === 0) throw new Error("todo가 입력되지 않았습니다.");
        
        doWhenInputted(todoInput.value);
        todoInput.value = '';
    });

    removeAll.addEventListener('click', (event) => {
        event.target.dispatchEvent(new CustomEvent("removeAll", {bubbles: true}));
    });

}
