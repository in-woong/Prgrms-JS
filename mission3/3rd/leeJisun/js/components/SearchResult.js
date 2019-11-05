export function SearchResult (target, data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
  }

  const render = () => {
    document.querySelector(target).innerHTML = `${data.map((d) => `<img src="${d.imageUrl}">`).join('')}`;
  }
};