import CommonComponent from './common-component.js';

export default class SearchResult extends CommonComponent {

  constructor() {
    super();
    this.isLoading = false;
    this.result = [];
  }

  render() {
    this.$container.innerHTML = this.createTemplate();
  }

  createTemplate() {
    let template = [];
    template.push(`${this.isLoading ? '<div>Loading....</div>' : ''}`);
    template.push(`${!this.result.length && !this.isLoading ? '<div>검색 결과가 없습니다</div>' : ''}`);
    template.push(this.result
      .map(item => `<div><img src="${item.imageUrl}" /></div>`)
      .join(''));
    return template.join('');
  }

  setState(state) {
    const { result, isLoading } = state;
    if (result !== this.result || isLoading !== this.isLoading) {
      this.result = result || [];
      this.isLoading = isLoading;
      this.render();
    }
  }
}