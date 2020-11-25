import {
  useNewKeyword,
  useArrayState,
  checkTarget,
  checkTypes,
} from './validation.js'

export default function TodoList({$app, initialState, deleteTodo, toggleTodo}) {
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
      ({ content, isCompleted }) =>
        typeof content === 'string' && typeof isCompleted === 'boolean'
    )
  }

  this.render = () => {
    const htmlString =
      this.state.length > 0
        ? `<ul>${this.state
            .map(({ content, isCompleted }, index) =>
              `<li id='${index}'>
                ${isCompleted ? `<s id='${index}'>${content}</s>` : content}
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
       const idx = eTarget.id
       if (eTarget.tagName === "LI" || eTarget.tagName === "S"){
         toggleTodo(this.state[idx]._id)
       } else if (eTarget.tagName === "BUTTON"){
          //누른 버튼의 id
         //this.state에 api에 있는 데이터가 들어있어요
         //this.state[idx] => 삭제하려는 데이터의 인덱스
        deleteTodo(this.state[idx]._id)
       } 
   })
 }
 
 this.clickEvent()
 this.validation(this.state)
  this.render()

}