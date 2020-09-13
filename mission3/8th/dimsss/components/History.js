const createHistoryView = (data) => {
  if (!data) return '<div id="history"></div>';

  return `${data.map((item) => { 
    return `<p class="serarch-history">${item}</p>` }).join('')}`;
}

const renderHistory = (element, data) => {
  element.innerHTML = createHistoryView(data);
}

function History(element) {
  this.element = element;
  this.historys = [];

  this.setState = (newState) => {
    this.historys = [...this.historys, newState]
    renderHistory(this.element, this.historys);
  }

}

export { History, createHistoryView }
