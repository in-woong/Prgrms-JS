export default function TodoList(data, $target, removeTodo, changeStauts){
    this.data = data;
    this.$target = $target;
    const listItem = document.getElementById("todo-list")
    
    this.render = function(){
        // error => innerHTML의 html은 다 upper & <s>로 상태 벼화 표시 - 삼항연산자 이용 
        listItem.innerHTML = this.data.map(({text, isCompleted}, index)=>
        isCompleted? `<li class="${index}"><s>${text}</s></li><button class="${index}">Delete❌</button>`:
        `<li class="${index}">${text}</li><button class="${index}">Delete❌</button>`
        ).join('');
    }

    this.eventsHandler = function(){
        listItem.addEventListener("click", e=>{
            //nodeName에서는 uppper class로 나온다 
            if(e.target.nodeName === "LI"){
                changeStauts(e.target.className);
            }  
            if (e.target.nodeName ==="S"){
                changeStauts(e.target.parentNode.className);
            } 
            if (e.target.nodeName === "BUTTON"){
                removeTodo(e.target.className);
            }
        })
    }

    this.render();
    this.eventsHandler();
}
