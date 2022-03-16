export default function TodoCount({ $target, initialState = {} }) {
  this.$target = $target;
  this.state = initialState;

  this.$todoCount = document.createElement('div');
  this.$target.appendChild(this.$todoCount);

  this.render = function() {
    const { todoCount, completedCount } = this.state;

    this.$todoCount.innerHTML = `
      <span>todo 갯수: ${todoCount}</span>
      <span>완료한 갯수: ${completedCount}</span>
    `;
  };

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  }

  this.render();
}
