
function TodoDeleteAll($app, onDeleteAll){
    this.$target = document.createElement("button")
    this.$target.setAttribute("data-component-type", "TodoDeleteAll")
    this.$target.innerText = "모두 삭제"
    $app.appendChild(this.$target)
 

    let event = new Event('removeAll');

    this.$target.addEventListener('removeAll', function(e){
        console.log('dispatch');
    }, false);
    
    this.$target.addEventListener("click", ()=>{
        this.$target.dispatchEvent(event);
    });

    this.handleRemoveall=()=>{
        const isTrueRemoveAll = confirm("TodoList를 모두 초기화 합니다.");
        if(isTrueRemoveAll)
            this.onDeleteAll = onDeleteAll();
        console.log("handleRemoveAll");
    }
    this.$target.addEventListener("removeAll", this.handleRemoveall);
}

export default TodoDeleteAll;