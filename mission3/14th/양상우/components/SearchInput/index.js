export function SearchInput({
  $target,
  initialState,
  getAPI,
  setState,
  loadingText,
}) {
  this.$element = document.createElement('form');
  this.$element.className = 'search-keyword';
  $target.appendChild(this.$element);
  this.state = initialState;
  this.timer;

  this.render = function () {
    this.$element.innerHTML = `
        <input type = 'text' placeholder = "움짤을 입력하세요">
        `;
  };

  this.$element.addEventListener('keyup', (e) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(async function () {
      if (!e.target.value.trim().length > 0) return;
      loadingText();
      const data = await getAPI(e.target.value);
      const inputList = e.target.value;

      const nextState = {
        data,
        inputList,
      };
      setState(nextState);
    }, 800);
  });

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  this.render();
}
