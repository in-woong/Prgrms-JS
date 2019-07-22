class SearchView {
  constructor(controller, $target) {
    this.controller = controller;
    this.$target = $target;
    //
    this.SearchInput = new SearchInput(controller);
    this.SearchResult = new SearchResult(controller);
    this.render();
  }

  setResult(data) { this.SearchResult.setResult(data); }
  setLoading(isLoading) { this.SearchResult.setLoading(isLoading); }

  render() {
    this.$target.appendChild(this.SearchInput.$input);
    this.$target.appendChild(this.SearchResult.$searchResult);
  }
}

class SearchInput {
  constructor(controller) {
    this.controller = controller;
    this.$input = domUtil.newEl('input');
    this.$input.addEventListener('keyup', e => this.controller.onSearch(e.target.value));
  }
}


class SearchResult {
  constructor(controller) {
    this.controller = controller;
    this.$searchResult = domUtil.newEl('section');
  }

  setResult(data) {
    this.data = data;
    this.render();
  }

  setLoading(isLoading) {
    this.loading = isLoading;
    if (isLoading) this.render();
    else null;
  }

  makeHTMLstring(data) {
    if (!data || !data.size) return '데이터가 없습니다.';
    let result = '';
    data.forEach(_ =>
      result += `<figure class="search__item">
                  <figcaption class="search__title">${_.title}</figcaption>
                  <img src=${_.imageUrl} onerror='this.src="asset/loadFail.jpg"'/>
                  <figcaption class="search__tag">${_.tags.map(tag => `<span>#${tag}</span>`).join(' ')}</figcaption>
                 </figure>`
    );
    return result
  }

  render() {
    if (this.loading) return this.$searchResult.innerHTML = '로딩중...'
    this.$searchResult.innerHTML = `<div>검색결과 ${this.data ? this.data.size : 0}</div>
                                    <div class="result">${this.makeHTMLstring(this.data)}</div>`;
  }
}