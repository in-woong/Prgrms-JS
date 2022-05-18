export function SearchHistory({
  $target,
  initialState,
  getAPI,
  setState,
  loadingText,
}) {
  this.$element = document.createElement('div');
  this.$element.className = 'history-list';
  $target.appendChild(this.$element);
  this.state = initialState;

  this.render = function () {
    this.clear();
    const markup = this.generateMakup();
    this.$element.insertAdjacentHTML('beforeend', markup);
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.clear = function () {
    this.$element.innerHTML = '';
  };

  this.generateMakup = function () {
    return this.state.inputList
      .map((d) => `<div class='history-tag'>${d}</div>`)
      .join('');
  };

  this.$element.addEventListener('click', async (e) => {
    const historyTag = e.target.closest('.history-tag');

    if (!historyTag) return;
    loadingText();
    const data = await getAPI(historyTag.textContent);

    setState({ data }, false);
  });
}
