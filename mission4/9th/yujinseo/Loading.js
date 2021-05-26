function Loading({$app, initialState}) {
  this.state = initialState;

  const $loading = document.createElement('p');
  $loading.textContent = 'loading....';
  $loading.className = 'loading-text';
  $app.appendChild($loading);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    const loadingText = document.querySelector('.loading-text');
    loadingText.style.display = this.state.isLoading ? 'block' : 'none';
  }
  this.render();
}

export default Loading;