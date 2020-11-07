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

  const that = this;
  const ENTER_KEY_CODE = 13;
  this.addTodo = ($target) => {
    $target.addEventListener('keyup', function (e) {
      if (e.keyCode === ENTER_KEY_CODE) {
        const inputData = {
          text: '',
          isCompleted: false
        }
        inputData.text = $target.value;
        that.setState([...that.state, inputData]);
        $target.value = '';
      }
    })
  }

  $target.addEventListener('click', function (e) {
    if (e.target.className === 'todo-remove-btn') {
      const index = e.target.parentNode.getAttribute('key');
      that.state.splice(index, 1);
      e.target.parentNode.remove();
    } else if (e.target.className === 'todo-item') {
      const index = e.target.getAttribute('key');
      that.state[index].isCompleted = !that.state[index].isCompleted
      that.setState(that.state);
    } else if (e.target.parentNode.className === 'todo-item') {
      const index = e.target.parentNode.getAttribute('key');
      that.state[index].isCompleted = !that.state[index].isCompleted
      that.setState(that.state);
    }
  })

  this.render = () => {
    const content =
      this.state.length > 0 ?
        `<ul>
      ${this.state.map(({ text, isCompleted }, index) =>
          isCompleted ? `<li key=${index} class="todo-item"><s>${text}</s><button type="button" class="todo-remove-btn">삭제</button></li>` : `<li key=${index} class="todo-item">${text}<button type="button" class="todo-remove-btn">삭제</button></li>`).join('')}</ul>` : '';
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

