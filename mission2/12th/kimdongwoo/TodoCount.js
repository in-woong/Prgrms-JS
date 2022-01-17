export default function TodoCount({ $element, props }) {
  this.$element = $element;
  this.props = props;

  this.render = function() {
    this.$element.innerHTML = `
      <p>총 할 일 갯수: ${this.props.allTaskCount}</p>
      <p>할 일 완료 갯수: ${this.props.completedTaskCount}</p>
    `;
  };

  this.render();
}
