export default function TodoCount({ $target, initialState }) {
  this.state = initialState || {};

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.$ul = document.createElement('ul');
  $target.appendChild(this.$ul);

  this.render = () => {
    const totalCount = this.state.totalCount || 0;
    const completeCount = this.state.completeCount || 0;

    this.$ul.innerHTML = `<li>전체 개수 : ${totalCount}</li><li>완료 개수 : ${completeCount}</li>`;
  };

  this.render();
}
