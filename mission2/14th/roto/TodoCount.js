export default function TodoCount({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
      <div>Total Todo Count: ${this.state.totalCount}</div>
      <div>Completed Todo Count: ${this.state.completedCount}</div>
    `;
  };

  this.render();
}
