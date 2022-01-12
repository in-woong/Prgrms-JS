export default class TodoCount {
  $target
  props
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
  }

  render(){
    this.$target.innerHTML = `<div>Total Count: ${this.props.todoCount}</div>
                              <div>Completed Count: ${this.props.completedTodoCount}</div>`
  }

}
