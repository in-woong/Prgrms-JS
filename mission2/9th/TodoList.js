import {
    useNewKeyword,
    useArrayState,
    checkTarget,
    checkTypes,
  } from './validation.js'

  export default function TodoList($target, initialState) {
    this.state = initialState
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
                isCompleted ? `<li id='${index}'><s>${text}</s></li><button id='${index}'>DELETE</button>` : `<li id='${index}'>${text}</li><button id='${index}'>DELETE</button>`
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

    this.validation(this.state)
    this.render()

   this.addEvent = () => {
     this.$target.addEventListener("click", (event)=>{
         const eTarget = event.target;

         if (eTarget.tagName === "LI" || eTarget.tagName === "S"){
             this.state[eTarget.id].isCompleted = !this.state[eTarget.id].isCompleted
         } else if (eTarget.tagName === "BUTTON"){
           this.state.splice(eTarget.id, 1)
         }

         this.render();
     })
   }
   this.addEvent()
  }

