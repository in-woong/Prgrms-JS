function TodoList ({$app,TodoListData,onCompleteToogle,onDelete}) {
    this.state = TodoListData

    const $target = document.createElement("ul")
    $target.className="TodoList"

    this.$target = $target
    $app.appendChild(this.$target)

    this.$target.addEventListener("click",e=>{
        if (e.target.nodeName === "LI"){
            onCompleteToogle(e.target.dataset.index)
        }else if(e.target.nodeName === "BUTTON"){
            onDelete(e.target.closest("li").dataset.index)
        }
    })

    this.setState = (newTodoListData) =>{
        this.state = newTodoListData
        this.render()
    }

    this.render = () =>{
        this.$target.innerHTML = this.state.map(({text,isCompleted},index)=>{
            return `<li data-index=${index}>${isCompleted?`✅${text}`:`⛔${text}`}<button class='delBtn'>❌</button></li>`
        }).join("")
    }

   this.render()
}
