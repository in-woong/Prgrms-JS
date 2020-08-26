export default function SearchHistory({ target, searchGif, state, setState }) {
  this.$target = target;
  this.histories = state;

  this.$target.addEventListener('click', async (e) => {
    if (e.target.localName === 'ul') return;
    if (e.target.className === 'delete-history') {
      const targetWord = e.target.previousSibling.textContent;
      setState({ deleteText: targetWord });
      return;
    }
    if (e.target.localName === 'span') {
      const text = e.target.textContent;
      const jjals = await searchGif(text);
      setState({ jjals });
    }
  });

  this.setState = (newHistoreis) => {
    this.histories = newHistoreis;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.histories
      .map(
        (history) =>
          `<li><span>${history}</span><span class="delete-history">X</span></li>`
      )
      .join('');
  };
}
