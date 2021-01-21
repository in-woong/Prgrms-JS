export default class TodoList{
    constructor({$target, initialState, onChange}){
        const $wrapper = document.createElement("ul")
        $wrapper.className = "TodoList"
        $target.appendChild($wrapper)
        $wrapper.addEventListener("click",event=>{
            let target = event.target
            if(target.id !=="todoitem"){
                const INDEX = target.id
                onChange(INDEX)
            }
        })
        this.state = initialState
        this.render()
    }
    setState = (nextState) =>{
        this.state = nextState
        this.render()
    }
    render(){
        let index = 0;
        document.querySelector(".TodoList").innerHTML=this.state
        .map(data=>{
            const content = data.isCompleted? `<s>${data.text}</s>` : `${data.text}`
            const button = `<button className="button" type="button" id="${index}">`+(data.isCompleted?`X</button>`:`O</button>`)
            index++
            return `<li id="todoitem">${content}\t${button}</li>`
        }).join('');
    }
}
