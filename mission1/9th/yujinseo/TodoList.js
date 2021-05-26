import { useNewKeyword, useArrayState, checkTarget, checkTypes } from './validation.js'


export default function TodoList($target, initialState) {
  this.state = initialState;
  this.$target = $target;

  this.validation = (state) => {
    useNewKeyword(this)
    useArrayState(state)
    checkTarget(this.$target)
    checkTypes(state, ({ text, isCompleted }) => typeof text === 'string' && typeof isCompleted === 'boolean')
  }

  this.render = () => {
    const content =
      this.state.length > 0 ?
        `<ul>
      ${this.state.map(({ text, isCompleted }) =>
          isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`).join('')}</ul>` : '';
    this.$target.innerHTML = content;
  }

  this.setState = (nextState) => {
    this.validation(nextState)
    this.state = nextState;
    this.render();
  }
  this.validation(this.state)
  this.render();
}

