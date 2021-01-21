export default class TodoInput{
    constructor({$target,onInput,onAllDelete}){
        const $input = `<input type="text" id="input" autofocus>` 
        const $allDelete = `<button id="allDelete"> 전체 삭제 </button>`
        const $wrapper = document.createElement("section")
        $wrapper.className = "TodoInput"
        $wrapper.innerHTML = $input+$allDelete
        $target.appendChild($wrapper)
        $wrapper.addEventListener("keyup",event=>{
            const ENTER = 13
            const target = event.target
            if(target.id ==="input" && event.keyCode===ENTER && target.value.length>0 ){
                onInput(event.target.value);
                event.target.value =null;
            }
        })
        $wrapper.addEventListener("click",event=>{
            if(event.target.id==="allDelete"){
                onAllDelete()
            }
        })
    }
}
