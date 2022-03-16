export default function Loading({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  this.$loading = document.createElement('article');
  this.$target.appendChild(this.$loading);

  this.render = function() {
    this.$loading.innerHTML = this.state ? `
      <div>Loading...</div>
    ` : null;
  };

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  };
}
