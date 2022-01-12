export default class TodoInput {
  $target
  props
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.$target.innerHTML = this.template();
    this.setEvent();
  }

  template(){
    return `<input class='todo-input'/>
            <button class="remove-all-button" type="button">Remove All</button>`
  }

  setEvent() {
    this.$target.addEventListener("keypress",(e) => {
      if(e.key === "Enter" && e.target.value.length > 0){
          this.props.addTodo(e.target.value);
        }
    })

    this.$target.addEventListener('click', (e) => {
      if (e.target.className === 'remove-all-button') {
        window.dispatchEvent(new CustomEvent('remove-all-todos'))
      }
    })
  }

}
