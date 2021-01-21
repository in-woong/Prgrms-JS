export default class SearchInput {
    constructor({$target,onInput}){
        this.$target = $target
        document.querySelector('#search-keyword')
        .addEventListener("keyup", event=>{
            const ENTER = 13
            if(event.keyCode === ENTER){
                onInput(event.target.value)
                event.target.value =null;
            }
        })
    }
}

