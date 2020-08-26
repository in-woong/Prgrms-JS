function TodoInput(target,{onAddTodo}){
   
    target.addEventListener('keydown',e=>{
        if(e.target.value && e.key ==="Enter"){
            onAddTodo(e.target.value);
        }
    })
};