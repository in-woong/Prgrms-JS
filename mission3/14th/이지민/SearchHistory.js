export default function SearchHistory({ $history, initialData, onSubmit }) {
  this.$element = document.createElement('ul');
  $history.appendChild(this.$element);

  this.state = initialData;

  this.setState = (nextData) => {
    this.state = nextData;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = this.state
      .map((data) => `<li>${data}</li>`)
      .join('');
  };

  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    const historyText = $li.innerText;
    onSubmit(historyText);
  });

  this.render();
}
