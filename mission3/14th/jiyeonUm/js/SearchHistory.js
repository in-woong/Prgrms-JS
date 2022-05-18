function SearchHistory({ $target, handleHistoryClick }) {
  this.render = function (paramData) {
    const historyUl = $target.querySelector('ul');
    if (historyUl) {
      const transSet = new Set(paramData);
      const setTransList = [...transSet];
      const htmlString = `
        ${setTransList.map((value) => `<li>${value}</li>`).join('')}
      `;
      historyUl.innerHTML = htmlString;
      historyUl.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const clickText = e.target.innerText;
        handleHistoryClick(clickText);
      });
    } else {
      const historyUl = document.createElement('ul', { is: 'history-list' });
      $target.append(historyUl);
    }
  };
  this.setState = function (paramData) {
    this.render(paramData);
  };
  this.render();
}
export default SearchHistory;
