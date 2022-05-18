export default function Loading({ $app, initialState }) {
  this.state = initialState;
  this.$loading = document.createElement('div');
  this.$loading.className = 'loading-wrap';

  $app.appendChild(this.$loading);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$loading.innerHTML = `<div class="loading-bar"></div>
                               <div class="loading-text">Loading...</div>`;
    this.$loading.style.display = this.state ? 'block' : 'none';
  };

  this.render();
}
