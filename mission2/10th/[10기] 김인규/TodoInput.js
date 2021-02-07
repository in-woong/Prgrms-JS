const ENTER_KEY = "Enter"
const BLANK_PATTERN = /[\s]*/

function TodoInput ({$app,onInput}){
    const $input = document.createElement("input")
    const $removeAll = document.createElement("button")
    $removeAll.innerHTML = "모두 삭제"
    
    this.$input = $input 
    this.$removeAll = $removeAll

    $app.appendChild(this.$input)
    $app.appendChild(this.$removeAll)

    // 커스텀 이벤트는 이렇게 하는게 맞나?
    const removeAllEvent = new Event('removeAll',{bubbles:true})


    const handleOnInput = (event) =>{
        if(event.key === ENTER_KEY){
            blankCheck(event.target.value)
            onInput(event.target.value)
            event.target.value = ""
            event.target.focus()
        }
    }
    
    const blankCheck = (userInput) =>{
        if(userInput.replace(BLANK_PATTERN,"").length === 0){
            alert(ERR_MSG.INPUT_ONLY_BLANK)
            this.$input.value= ''
            throw new Error(ERR_MSG.INPUT_ONLY_BLANK)
        }
    }

    this.$input.addEventListener("keydown",(e)=>{
        handleOnInput(e)
    })

    this.$removeAll.addEventListener("click",(e)=>{
        this.$removeAll.dispatchEvent(removeAllEvent)
    })
   
}
