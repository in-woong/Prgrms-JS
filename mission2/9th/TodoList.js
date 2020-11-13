import {
    useNewKeyword,
    useArrayState,
    checkTarget,
    checkTypes,
  } from './validation.js'

  export default function TodoList({$app, initialState, changeState}) {
    this.state = initialState
    const $target = document.createElement('div')
    $target.className = 'TodoList'
    $app.appendChild($target)
    this.$target = $target
  
    this.validation = (state) => {
      useNewKeyword(this)
      useArrayState(state)
      checkTarget(this.$target)
      checkTypes(
        state,
        ({ text, isCompleted }) =>
          typeof text === 'string' && typeof isCompleted === 'boolean'
      )
    }
  
    this.render = () => {
      const htmlString =
        this.state.length > 0
          ? `<ul>${this.state
              .map(({ text, isCompleted }, index) =>
                `<li id='${index}'>
                  ${isCompleted ? `<s id='${index}'>${text}</s>` : text}
                  </li><button id='${index}'>DELETE</button>`
              )
              .join('')}</ul>`
          : ''
      this.$target.innerHTML = htmlString

    }
  
    this.setState = (nextState) => {
      this.validation(nextState)
      this.state = nextState
      this.render()
    }

    
   this.clickEvent = () => {
     this.$target.addEventListener("click", (e)=>{
         const eTarget = e.target;
         const id = eTarget.id
         console.log(eTarget)
         if (eTarget.tagName === "LI" || eTarget.tagName === "S"){
            this.state[id].isCompleted = !this.state[id].isCompleted
         } else if (eTarget.tagName === "BUTTON"){
            this.state.splice(id, 1)
         }
        changeState(this.state)
     })
   }
   
   this.clickEvent()
   this.validation(this.state)
    this.render()

  }

