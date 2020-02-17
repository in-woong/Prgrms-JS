function TodoInput(selector, data, todoUpdateEvent) {
    this.data = data;   
    const $target  = document.querySelector(`#${selector}`);

    const removeAllEvent = new CustomEvent('todo-removeAll');
    const addTodoEvent = new CustomEvent('todo-addTodo');

    this.render = function() {
        $target.insertAdjacentHTML('afterend', `<div id="new-todo-${selector}"><input type="text" class="new-text" id="new-text-${selector}" placeholder="새로운 할 일">
        <button class="new-button" id="new-button-${selector}"><i class="fas fa-plus-square"></i> Add </button> <button class="removeall-button" id="removeall-button-${selector}">removeAll</button></div>`);

        const addButton = document.querySelector(`#new-button-${selector}`);  
        const removeAllButton = document.querySelector(`#removeall-button-${selector}`)

        addButton.addEventListener('click', (event) => {
            const newTextElement = document.querySelector(`#new-text-${selector}`)
            
            if(newTextElement.value === undefined || newTextElement.value === null || newTextElement.value <= 0){
               return alert("텍스트를 입력해주세요.");
            } 

            this.data.push({text: newTextElement.value, isCompleted: false});
     
            // const liElement = `<li class="todo-item" id="todo-${this.data.length}"><span class="todo-text">${newTextElement.value}</span><button class="del-button"><i class="fas fa-trash-alt"></i> Delete</button></li>`;
            // document.querySelector(`#${selector} ul`).insertAdjacentHTML('beforeEnd', liElement);               
    
            newTextElement.value = null;

            $target.dispatchEvent(addTodoEvent);
            }
        ); 

        removeAllButton.addEventListener('click', (e) => {
            $target.dispatchEvent(removeAllEvent);
        })
    }

    this.render();

}
