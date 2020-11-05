console.log("SearchInput is loading")

const TEMPLATE = '<input type="text">'

class TodoInput{
    constructor({$target,onInput}){
        console.log("searchinput  : "+ $target)
        const $wrapper = document.createElement("section")
        $wrapper.className="SearchInput"
        const $searchInput = document.createElement("input")
        this.$searchInput =$searchInput
        // this.$searchInput.placeholder ="할 일을 입력하세요."
        $wrapper.appendChild($searchInput)
        $target.appendChild($wrapper)
    
        $searchInput.addEventListener("keyup",event=>{
            if(event.keyCode===13){
                onInput(event.target.value)
            }
        })
        console.log("in TodoInput : "+this)
    }
    
    render(){}
}


// class SearchInput{
//     construcotr({target}){
//         const $wrapper = document.createElement("section")
//         $wrapper.className="SearchInput"
//         const $searchInput = document.createElement("input")
//         $wrapper.appendChild($searchInput)
//         $target.appendChild($wrapper)

//         $searchInput.addEventListener("keyup",event=>{
//             if(event.keyCode===13){
//                 onInput
//             }
//         })
//     }
//     render(){}
// }