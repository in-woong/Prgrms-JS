function TodoInput($target) {
    this.$target = $target; 

    this.render = function() { 
        const $input = `  
        <input type="text" id="todo-text"/>
        <button id="todo-btn">입력</button>`; 

        $target.innerHTML = $input; 
    }

    this.render(); 
}